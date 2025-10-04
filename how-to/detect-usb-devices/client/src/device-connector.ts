import { type OpenFin } from "@openfin/core";
import { HID_DEVICE, USB_DEVICE } from "./device-type";

// Global variables
let loggingElement: HTMLElement | null;
let usbPollingActive = false; // Used to control the USB polling loop


document.addEventListener("DOMContentLoaded", async () => {
	try {
		await init();
	} catch (error) {
		console.error(error);
	}
});

async function init(): Promise<void> {
    const tag = document.querySelector("#tag") as HTMLSpanElement;
    loggingElement = document.querySelector("#logging");
    // Extract the 'deviceType' parameter from the querystring
    let search = location.search;
    const urlParams = new URLSearchParams(search);
    const deviceTypeParam = urlParams.get('deviceType');
    let deviceType = USB_DEVICE;
    if(deviceTypeParam === HID_DEVICE) {
        deviceType = HID_DEVICE;
        navigator.hid.addEventListener("disconnect", (event) => {
            loggingAddEntry(`HID disconnected: ${event.device.productName}`);
        });
        navigator.hid.addEventListener("connect", (event) => {
            loggingAddEntry(`HID connected: ${event.device.productName}`);
        });
    } else {
        navigator.usb.addEventListener("disconnect", (event) => {
            loggingAddEntry(`USB disconnected: ${event.device.productName}`);
        });
        navigator.usb.addEventListener("connect", (event) => {
            loggingAddEntry(`USB connected: ${event.device.productName}`);
        });
    }

    const btnLoggingClear = document.querySelector("#btnLoggingClear");
	if (btnLoggingClear) {
		btnLoggingClear.addEventListener("click", () => {
			if (loggingElement) {
				loggingElement.textContent = "";
			}
		});
	}

    const btnOpenDevice = document.querySelector("#btnOpenDevice");
    if (btnOpenDevice) {
        btnOpenDevice.addEventListener("click", async () => {  
            loggingAddEntry("Gathering devices.");
            const devices = deviceTypeParam === HID_DEVICE ? await navigator.hid.getDevices() : await navigator.usb.getDevices();
            loggingAddEntry(`Found ${devices.length} ${deviceType} devices.`);
            devices.forEach((device, index) => {
                loggingAddEntry(`Device ${index + 1}: Product Name: ${device.productName}, Vendor ID: ${device.vendorId}, Product ID: ${device.productId}`);
            });
            
            if(devices.length > 0) {
                loggingAddEntry("Selecting first device.");
                let device = devices[0];
                try {
                    if(device.opened) {
                        loggingAddEntry("Device already opened. Closing it first.");
                        await device.close();
                        loggingAddEntry("Device closed.");
                    }
                    
                    await device.open();
                    loggingAddEntry(`Device opened: ${device.productName}`);
                    
                    if (deviceTypeParam === HID_DEVICE) {
                        // HID device handling
                        loggingAddEntry("Adding inputreport event listener for HID device.");
                        const hidDevice = device as HIDDevice;
                        hidDevice.addEventListener("inputreport", (event: any) => {
                            loggingAddEntry(`Input report received from ${hidDevice.productName}`);
                            loggingAddEntry(JSON.stringify(event, null, 5));
                        });
                    } else {
                        // USB device handling
                        loggingAddEntry("Setting up USB device for input.");
                        
                        // Cast to USBDevice for proper type checking
                        const usbDevice = device as USBDevice;
                        
                        // Select configuration (usually the first one)
                        if (usbDevice.configuration === null) {
                            loggingAddEntry(`Selecting the first configuration.`);
                            await usbDevice.selectConfiguration(usbDevice.configurations[0].configurationValue);
                        }
                        
                        // Log available interfaces
                        loggingAddEntry(`Device has ${usbDevice.configuration?.interfaces.length || 0} interfaces.`);
                        
                        // Try to find and claim a usable interface
                        if (usbDevice.configuration && usbDevice.configuration.interfaces.length > 0) {
                            loggingAddEntry(`Device has ${usbDevice.configuration.interfaces.length} interfaces.`);
                            
                            // Log all interfaces
                            usbDevice.configuration.interfaces.forEach((iface, index) => {
                                loggingAddEntry(`Interface ${iface.interfaceNumber}: Class ${iface.alternate.interfaceClass}, Subclass ${iface.alternate.interfaceSubclass}`);
                            });
                            
                            // Try to find a non-protected interface
                            let interfaceClaimed = false;
                            for (const iface of usbDevice.configuration.interfaces) {
                                const interfaceNumber = iface.interfaceNumber;
                                try {
                                    loggingAddEntry(`Attempting to claim interface ${interfaceNumber}...`);
                                    await usbDevice.claimInterface(interfaceNumber);
                                    loggingAddEntry(`Successfully claimed interface ${interfaceNumber}.`);
                                    
                                    // Start polling for USB input with the claimed interface
                                    startListeningForUSBInput(usbDevice, interfaceNumber);
                                    interfaceClaimed = true;
                                    break;
                                } catch (err: any) {
                                    const errorMessage = err?.message || 'Unknown error';
                                    loggingAddEntry(`Failed to claim interface ${interfaceNumber}: ${errorMessage}`);
                                    
                                    // Check if this is a protected class error
                                    if (errorMessage.includes('protected class')) {
                                        loggingAddEntry(`Interface ${interfaceNumber} is a protected class interface.`);
                                        loggingAddEntry(`Protected classes often include: Human Interface Device (HID), Audio, Mass Storage, etc.`);
                                        loggingAddEntry(`These interfaces may require specialized drivers or APIs (like WebHID for HID devices).`);
                                        
                                        // If this is a HID class device, provide specific guidance
                                        if (iface.alternate.interfaceClass === 3) { // Class 3 is HID
                                            loggingAddEntry(`This appears to be a HID device (Class 3). Try using the WebHID API instead.`);
                                        }
                                    }
                                }
                            }
                            
                            if (!interfaceClaimed) {
                                loggingAddEntry(`Could not claim any interfaces on this device.`);
                                loggingAddEntry(`This may be because all interfaces implement protected classes.`);
                                loggingAddEntry(`If this is a HID device, try using the WebHID API instead.`);
                            }
                        } else {
                            loggingAddEntry("No interfaces available on this device.");
                        }
                    }
                } catch (error) {
                    loggingAddEntry(`Error opening device: ${error}`);
                }
            }

        });
    }

    const btnCodeCopy = document.querySelector("#btnCodeCopy");
    if (btnCodeCopy) {
        btnCodeCopy.addEventListener("click", async () => { 
            loggingAddEntry("Copying code to clipboard");
        });
    }

    if(fin) {
        const info = await fin.me.getOptions();
        const permissions = info.permissions;
        const devices = permissions?.devices;
        let device: OpenFin.DeviceInfo | undefined;
        if(tag) {
            if(devices && devices.length > 0) {
                device = devices[0];
                tag.textContent = `Device Connector - Device Type: ${deviceType} Vendor Id: ${device.vendorId} : Product Id: ${device.productId}`;
            } else {
                tag.textContent = "Device Connector - No device permissions found";
            }
        }
        if(device) {
            loggingAddEntry(`Fetching permissions.`);
            let logPermissions = `Required permissions:
            
This could be controlled through Domain Setting Rules in the manifest, as permissions in your startup_app or platform configuration in the manifest (the permission will apply to the main/provider window), in your platform configuration as default viewOptions or windowOptions (the platform must define the permission as well) or added to specific window or views.

Permission Block:

"permissions": ${JSON.stringify(permissions, null, 5)}`;
            loggingAddEntry(logPermissions);
        }
    }
}

/**
 * Add a new entry in to the logging window with a timestamp.
 * @param entry The entry to add.
 */
function loggingAddEntry(entry: string): void {
	if (loggingElement) {
        // Create timestamp in format HH:MM:SS:mmm
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        const milliseconds = now.getMilliseconds().toString().padStart(3, '0');
        const timestamp = `${hours}:${minutes}:${seconds}:${milliseconds}`;
        
		loggingElement.textContent = `[${timestamp}]: ${entry}\n\n${loggingElement.textContent}`;
	}
}

/**
 * Start polling for input from a USB device
 * @param device The USB device to listen to
 * @param interfaceNumber The interface number to use
 */
async function startListeningForUSBInput(device: USBDevice, interfaceNumber: number): Promise<void> {
    // First, find endpoints for this interface
    const iface = device.configuration?.interfaces.find(i => i.interfaceNumber === interfaceNumber);
    if (!iface) {
        loggingAddEntry(`Interface ${interfaceNumber} not found.`);
        return;
    }
    
    // Log interface details
    loggingAddEntry(`Interface ${interfaceNumber} details:`);
    loggingAddEntry(`- Class: ${iface.alternate.interfaceClass}`);
    loggingAddEntry(`- Subclass: ${iface.alternate.interfaceSubclass}`);
    loggingAddEntry(`- Protocol: ${iface.alternate.interfaceProtocol}`);
    
    // Check if this is a known protected class
    const knownClasses: {[key: number]: string} = {
        1: 'Audio',
        3: 'HID (Human Interface Device)',
        7: 'Printer',
        8: 'Mass Storage',
        9: 'Hub',
        10: 'CDC-Data',
        11: 'Smart Card',
        14: 'Video',
        15: 'Personal Healthcare'
    };
    
    if (iface.alternate.interfaceClass in knownClasses) {
        loggingAddEntry(`Warning: This is a ${knownClasses[iface.alternate.interfaceClass]} class device, which might be protected.`);
    }
    
    // Find all endpoints and log them
    const endpoints = iface.alternate.endpoints;
    loggingAddEntry(`Interface has ${endpoints.length} endpoints:`);
    
    endpoints.forEach((endpoint, index) => {
        loggingAddEntry(`- Endpoint ${index+1}: Number ${endpoint.endpointNumber}, Direction: ${endpoint.direction}, Type: ${endpoint.type}`);
    });
    
    // Find the first IN endpoint (device-to-host)
    const inEndpoint = endpoints.find(e => e.direction === 'in');
    
    if (!inEndpoint) {
        loggingAddEntry('No IN endpoint found for reading data. Cannot receive data from this device.');
        return;
    }
    
    loggingAddEntry(`Using IN endpoint: ${inEndpoint.endpointNumber} for data reception.`);
    
    // Set the flag to true to start polling
    usbPollingActive = true;
    
    // Add a button to stop polling if needed
    const btnStopPolling = document.querySelector("#btnStopPolling");
    if (btnStopPolling) {
        btnStopPolling.addEventListener("click", () => {
            usbPollingActive = false;
            loggingAddEntry("USB polling stopped.");
        });
    }
    
    // Start the polling loop
    pollUSBDevice(device, inEndpoint.endpointNumber);
}

/**
 * Continuously poll a USB device for input data
 * @param device The USB device to poll
 * @param endpointNumber The endpoint number to read from
 */
async function pollUSBDevice(device: USBDevice, endpointNumber: number): Promise<void> {
    if (!usbPollingActive) {
        loggingAddEntry("USB polling stopped.");
        return;
    }
    
    try {
        // Try to read data from the device
        // The length parameter specifies the maximum number of bytes to read
        const result = await device.transferIn(endpointNumber, 64);
        
        if (result.status === 'ok' && result.data && result.data.byteLength > 0) {
            // Convert the data to something readable
            const data = new Uint8Array(result.data.buffer);
            
            // Log the received data
            loggingAddEntry(`Received data from endpoint ${endpointNumber}:`);
            loggingAddEntry(`Data length: ${data.length} bytes`);
            loggingAddEntry(`Raw data: ${Array.from(data).map(b => b.toString(16).padStart(2, '0')).join(' ')}`);
            
            try {
                // Try to decode as UTF-8 text if appropriate
                const textDecoder = new TextDecoder('utf-8');
                const textData = textDecoder.decode(data);
                if (/^[\x20-\x7E\r\n\t]*$/.test(textData)) { // Check if it's mostly printable ASCII
                    loggingAddEntry(`Text data: ${textData}`);
                }
            } catch (e) {
                // If it can't be decoded as text, that's fine
            }
        }
    } catch (error: any) {
        const errorMessage = error?.message || 'Unknown error';
        loggingAddEntry(`Error polling USB device: ${errorMessage}`);
        
        // Check for specific error types and provide more helpful messages
        if (errorMessage.includes('device disconnected')) {
            loggingAddEntry('Device appears to have been disconnected.');
        } else if (errorMessage.includes('timeout')) {
            loggingAddEntry('Operation timed out. Device may not be sending data or may be busy.');
        } else if (errorMessage.includes('access denied') || errorMessage.includes('permission')) {
            loggingAddEntry('Access denied. This could be due to permission issues or another application using the device.');
        } else if (errorMessage.includes('protected class')) {
            loggingAddEntry('This device interface implements a protected class and cannot be accessed directly with WebUSB.');
            loggingAddEntry('Try using a different interface or a specialized API like WebHID for HID devices.');
        }
        
        usbPollingActive = false;
        return;
    }
    
    // Continue polling after a short delay
    setTimeout(() => {
        pollUSBDevice(device, endpointNumber);
    }, 100); // Poll every 100ms - adjust as needed
}