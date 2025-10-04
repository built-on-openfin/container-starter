/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!*****************************************!*\
  !*** ./client/src/device-identifier.ts ***!
  \*****************************************/

// Global variable to store the currently selected device
let selectedDevice = {
    deviceType: null,
    device: null
};
// Global variable to store if fins parameter was passed
let hasFinsParameter = false;
let finsLink = "";
document.addEventListener("DOMContentLoaded", async () => {
    try {
        await initDom();
    }
    catch (error) {
        console.error(error);
    }
});
/**
 * Initializes the controls available on the detection page.
 */
async function initDom() {
    let search = location.search;
    let showFins = false;
    // Extract the 'fins' parameter from the querystring
    const urlParams = new URLSearchParams(search);
    const finsParam = urlParams.get("fins");
    // Set up event listeners for USB and HID buttons
    setupButtonEventListeners();
    if (finsParam !== null) {
        console.log("Fins parameter value:", finsParam);
        if (finsParam.includes("fin://") || finsParam.includes("fins://")) {
            showFins = true;
            hasFinsParameter = true;
            finsLink = decodeURIComponent(finsParam);
            console.log("Fins protocol URL detected:", finsLink);
        }
    }
    // Initially hide the fin-launch-container
    updateFinLaunchContainerVisibility();
}
async function requestHidDevices() {
    // Clear the current selection
    clearDeviceSelection();
    if ("hid" in navigator) {
        try {
            const devices = await navigator.hid.requestDevice({ filters: [] });
            console.log("Selected HID devices:", devices);
            // Store the first HID device if available
            if (devices && devices.length > 0) {
                selectedDevice = {
                    deviceType: "HID",
                    device: devices[0] // Store the first device or handle multiple as needed
                };
                console.log("Stored selected HID device:", selectedDevice);
                // Update visibility of fin-launch-container
                updateFinLaunchContainerVisibility();
            }
            displayHIDDevices(devices);
            return devices;
        }
        catch (error) {
            console.error("Error requesting HID devices:", error);
        }
    }
    else {
        console.log("WebHID API is not supported in this browser");
    }
    return [];
}
/**
 * Displays HID device information in the UI
 */
function displayHIDDevices(devices) {
    if (!devices || devices.length === 0)
        return;
    const deviceList = document.getElementById("device-list");
    if (deviceList) {
        // Clear previous entries
        deviceList.innerHTML = "";
        // Create list items for each device
        devices.forEach((device, index) => {
            const listItem = document.createElement("li");
            // Highlight the first device which is stored as the selected device
            if (index === 0) {
                listItem.textContent = `HID (Selected): ${device.productName || "Unknown"} - Vendor ID: ${device.vendorId}, Product ID: ${device.productId}`;
                listItem.style.fontWeight = "bold";
            }
            else {
                listItem.textContent = `HID: ${device.productName || "Unknown"} - Vendor ID: ${device.vendorId}, Product ID: ${device.productId}`;
            }
            deviceList.appendChild(listItem);
        });
    }
}
async function requestUSBDevices() {
    // Clear the current selection
    clearDeviceSelection();
    if ("usb" in navigator) {
        try {
            const device = await navigator.usb.requestDevice({ filters: [] });
            console.log("Selected USB device:", device);
            // Store the USB device
            if (device) {
                selectedDevice = {
                    deviceType: "USB",
                    device: device
                };
                console.log("Stored selected USB device:", selectedDevice);
                // Update visibility of fin-launch-container
                updateFinLaunchContainerVisibility();
            }
            displayUSBDevice(device);
            return device;
        }
        catch (error) {
            console.error("Error requesting USB device:", error);
        }
    }
    else {
        console.log("WebUSB API is not supported in this browser");
    }
    return null;
}
/**
 * Sets up the event listeners for all buttons
 */
function setupButtonEventListeners() {
    // Wire up USB device request button
    const usbButton = document.getElementById("btn-request-usb-device");
    if (usbButton) {
        usbButton.addEventListener("click", async () => {
            try {
                // Clear the UI before showing the device picker dialog
                clearDeviceSelection();
                await requestUSBDevices();
            }
            catch (error) {
                console.error("Error requesting USB device:", error);
            }
        });
    }
    // Wire up HID device request button
    const hidButton = document.getElementById("btn-request-hid-device");
    if (hidButton) {
        hidButton.addEventListener("click", async () => {
            try {
                // Clear the UI before showing the device picker dialog
                clearDeviceSelection();
                await requestHidDevices();
            }
            catch (error) {
                console.error("Error requesting HID devices:", error);
            }
        });
    }
    // Wire up clear device button
    const clearSelectionButton = document.getElementById("btn-clear-device");
    if (clearSelectionButton) {
        clearSelectionButton.addEventListener("click", () => {
            try {
                // Just clear the selection state and UI
                clearDeviceSelection();
                console.log("Device selection cleared");
            }
            catch (error) {
                console.error("Error clearing device selection:", error);
            }
        });
    }
    // Wire up fin launch button
    const finLaunchButton = document.getElementById("btn-fin-launch");
    if (finLaunchButton) {
        finLaunchButton.addEventListener("click", () => {
            try {
                // Store device info
                const deviceInfo = {
                    type: selectedDevice.deviceType,
                    vendorId: selectedDevice.device?.vendorId,
                    productId: selectedDevice.device?.productId,
                    productName: selectedDevice.device?.productName
                };
                // Pass the device info to the starter
                console.log("Device info passed to starter:", deviceInfo);
                let url = finsLink.replace("?", "") +
                    `?$$deviceType=${deviceInfo.type}&$$vendorId=${deviceInfo.vendorId}&$$productId=${deviceInfo.productId}`;
                window.open(url, "_blank");
                // Clear selection state and UI
                clearDeviceSelection();
                // You could add additional code here to navigate away or close the window
            }
            catch (error) {
                console.error("Error in fin launch process:", error);
            }
        });
    }
}
/**
 * Displays USB device information in the UI
 */
function displayUSBDevice(device) {
    if (!device)
        return;
    const deviceList = document.getElementById("device-list");
    if (deviceList) {
        // Clear previous entries
        deviceList.innerHTML = "";
        // Create a list item for the device
        const listItem = document.createElement("li");
        listItem.textContent = `USB: ${device.productName || "Unknown"} - Vendor ID: ${device.vendorId}, Product ID: ${device.productId}`;
        deviceList.appendChild(listItem);
    }
}
/**
 * Clears the selected device and updates the UI
 */
function clearDeviceSelection() {
    // Reset the selected device
    selectedDevice = {
        deviceType: null,
        device: null
    };
    // Clear the device list in the UI
    const deviceList = document.getElementById("device-list");
    if (deviceList) {
        deviceList.innerHTML = "";
    }
    // Update the visibility of the fin-launch container
    updateFinLaunchContainerVisibility();
    console.log("Device selection cleared");
}
/**
 * Updates the visibility of the containers based on device selection and fins parameter
 */
function updateFinLaunchContainerVisibility() {
    const finLaunchContainer = document.getElementById("fin-launch-container");
    const deviceContainer = document.getElementById("device-container");
    // Check if we have a selected device
    const hasDeviceSelected = selectedDevice.device !== null;
    // Update device container visibility
    if (deviceContainer) {
        deviceContainer.style.display = hasDeviceSelected ? "block" : "none";
        console.log(`Device container visibility set to ${hasDeviceSelected ? "visible" : "hidden"}`);
    }
    // Update fin launch container visibility
    if (finLaunchContainer) {
        // Show the container only if we have both a fins parameter and a selected device
        const shouldShow = hasFinsParameter && hasDeviceSelected;
        finLaunchContainer.style.display = shouldShow ? "block" : "none";
        console.log(`Fin launch container visibility set to ${shouldShow ? "visible" : "hidden"}`);
    }
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFLLElBQUksQ0FBQztJQUV6RCxxQ0FBcUM7SUFDckMsSUFBSSxlQUFlLEVBQUUsQ0FBQztRQUNyQixlQUFlLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDckUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxzQ0FBc0MsaUJBQWlCLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztJQUMvRixDQUFDO0lBRUQseUNBQXlDO0lBQ3pDLElBQUksa0JBQWtCLEVBQUUsQ0FBQztRQUN4QixpRkFBaUY7UUFDakYsTUFBTSxVQUFVLEdBQUcsZ0JBQWdCLElBQUksaUJBQWlCLENBQUM7UUFFekQsa0JBQWtCLENBQUMsS0FBSyxDQUFDLE9BQU8sR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ2pFLE9BQU8sQ0FBQyxHQUFHLENBQUMsMENBQTBDLFVBQVUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQzVGLENBQUM7QUFDRixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZGV0ZWN0LXVzYi1kZXZpY2VzLy4vY2xpZW50L3NyYy9kZXZpY2UtaWRlbnRpZmllci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBTdG9yZSB0aGUgc2VsZWN0ZWQgZGV2aWNlIGFuZCBpdHMgdHlwZVxuaW50ZXJmYWNlIERldmljZVNlbGVjdGlvbiB7XG5cdGRldmljZVR5cGU6IFwiSElEXCIgfCBcIlVTQlwiIHwgbnVsbDtcblx0ZGV2aWNlOiBhbnk7XG59XG5cbi8vIEdsb2JhbCB2YXJpYWJsZSB0byBzdG9yZSB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGRldmljZVxubGV0IHNlbGVjdGVkRGV2aWNlOiBEZXZpY2VTZWxlY3Rpb24gPSB7XG5cdGRldmljZVR5cGU6IG51bGwsXG5cdGRldmljZTogbnVsbFxufTtcblxuLy8gR2xvYmFsIHZhcmlhYmxlIHRvIHN0b3JlIGlmIGZpbnMgcGFyYW1ldGVyIHdhcyBwYXNzZWRcbmxldCBoYXNGaW5zUGFyYW1ldGVyID0gZmFsc2U7XG5cbmxldCBmaW5zTGluayA9IFwiXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGFzeW5jICgpID0+IHtcblx0dHJ5IHtcblx0XHRhd2FpdCBpbml0RG9tKCk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5lcnJvcihlcnJvcik7XG5cdH1cbn0pO1xuXG4vKipcbiAqIEluaXRpYWxpemVzIHRoZSBjb250cm9scyBhdmFpbGFibGUgb24gdGhlIGRldGVjdGlvbiBwYWdlLlxuICovXG5hc3luYyBmdW5jdGlvbiBpbml0RG9tKCk6IFByb21pc2U8dm9pZD4ge1xuXHRsZXQgc2VhcmNoID0gbG9jYXRpb24uc2VhcmNoO1xuXHRsZXQgc2hvd0ZpbnMgPSBmYWxzZTtcblx0Ly8gRXh0cmFjdCB0aGUgJ2ZpbnMnIHBhcmFtZXRlciBmcm9tIHRoZSBxdWVyeXN0cmluZ1xuXHRjb25zdCB1cmxQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHNlYXJjaCk7XG5cdGNvbnN0IGZpbnNQYXJhbSA9IHVybFBhcmFtcy5nZXQoXCJmaW5zXCIpO1xuXG5cdC8vIFNldCB1cCBldmVudCBsaXN0ZW5lcnMgZm9yIFVTQiBhbmQgSElEIGJ1dHRvbnNcblx0c2V0dXBCdXR0b25FdmVudExpc3RlbmVycygpO1xuXG5cdGlmIChmaW5zUGFyYW0gIT09IG51bGwpIHtcblx0XHRjb25zb2xlLmxvZyhcIkZpbnMgcGFyYW1ldGVyIHZhbHVlOlwiLCBmaW5zUGFyYW0pO1xuXHRcdGlmIChmaW5zUGFyYW0uaW5jbHVkZXMoXCJmaW46Ly9cIikgfHwgZmluc1BhcmFtLmluY2x1ZGVzKFwiZmluczovL1wiKSkge1xuXHRcdFx0c2hvd0ZpbnMgPSB0cnVlO1xuXHRcdFx0aGFzRmluc1BhcmFtZXRlciA9IHRydWU7XG5cdFx0XHRmaW5zTGluayA9IGRlY29kZVVSSUNvbXBvbmVudChmaW5zUGFyYW0pO1xuXHRcdFx0Y29uc29sZS5sb2coXCJGaW5zIHByb3RvY29sIFVSTCBkZXRlY3RlZDpcIiwgZmluc0xpbmspO1xuXHRcdH1cblx0fVxuXG5cdC8vIEluaXRpYWxseSBoaWRlIHRoZSBmaW4tbGF1bmNoLWNvbnRhaW5lclxuXHR1cGRhdGVGaW5MYXVuY2hDb250YWluZXJWaXNpYmlsaXR5KCk7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlcXVlc3RIaWREZXZpY2VzKCkge1xuXHQvLyBDbGVhciB0aGUgY3VycmVudCBzZWxlY3Rpb25cblx0Y2xlYXJEZXZpY2VTZWxlY3Rpb24oKTtcblxuXHRpZiAoXCJoaWRcIiBpbiBuYXZpZ2F0b3IpIHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgZGV2aWNlcyA9IGF3YWl0IG5hdmlnYXRvci5oaWQucmVxdWVzdERldmljZSh7IGZpbHRlcnM6IFtdIH0pO1xuXHRcdFx0Y29uc29sZS5sb2coXCJTZWxlY3RlZCBISUQgZGV2aWNlczpcIiwgZGV2aWNlcyk7XG5cblx0XHRcdC8vIFN0b3JlIHRoZSBmaXJzdCBISUQgZGV2aWNlIGlmIGF2YWlsYWJsZVxuXHRcdFx0aWYgKGRldmljZXMgJiYgZGV2aWNlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdHNlbGVjdGVkRGV2aWNlID0ge1xuXHRcdFx0XHRcdGRldmljZVR5cGU6IFwiSElEXCIsXG5cdFx0XHRcdFx0ZGV2aWNlOiBkZXZpY2VzWzBdIC8vIFN0b3JlIHRoZSBmaXJzdCBkZXZpY2Ugb3IgaGFuZGxlIG11bHRpcGxlIGFzIG5lZWRlZFxuXHRcdFx0XHR9O1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcIlN0b3JlZCBzZWxlY3RlZCBISUQgZGV2aWNlOlwiLCBzZWxlY3RlZERldmljZSk7XG5cblx0XHRcdFx0Ly8gVXBkYXRlIHZpc2liaWxpdHkgb2YgZmluLWxhdW5jaC1jb250YWluZXJcblx0XHRcdFx0dXBkYXRlRmluTGF1bmNoQ29udGFpbmVyVmlzaWJpbGl0eSgpO1xuXHRcdFx0fVxuXG5cdFx0XHRkaXNwbGF5SElERGV2aWNlcyhkZXZpY2VzKTtcblx0XHRcdHJldHVybiBkZXZpY2VzO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKFwiRXJyb3IgcmVxdWVzdGluZyBISUQgZGV2aWNlczpcIiwgZXJyb3IpO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRjb25zb2xlLmxvZyhcIldlYkhJRCBBUEkgaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5cdH1cblx0cmV0dXJuIFtdO1xufVxuXG4vKipcbiAqIERpc3BsYXlzIEhJRCBkZXZpY2UgaW5mb3JtYXRpb24gaW4gdGhlIFVJXG4gKi9cbmZ1bmN0aW9uIGRpc3BsYXlISUREZXZpY2VzKGRldmljZXM6IGFueVtdKTogdm9pZCB7XG5cdGlmICghZGV2aWNlcyB8fCBkZXZpY2VzLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xuXG5cdGNvbnN0IGRldmljZUxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRldmljZS1saXN0XCIpO1xuXHRpZiAoZGV2aWNlTGlzdCkge1xuXHRcdC8vIENsZWFyIHByZXZpb3VzIGVudHJpZXNcblx0XHRkZXZpY2VMaXN0LmlubmVySFRNTCA9IFwiXCI7XG5cblx0XHQvLyBDcmVhdGUgbGlzdCBpdGVtcyBmb3IgZWFjaCBkZXZpY2Vcblx0XHRkZXZpY2VzLmZvckVhY2goKGRldmljZSwgaW5kZXgpID0+IHtcblx0XHRcdGNvbnN0IGxpc3RJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuXG5cdFx0XHQvLyBIaWdobGlnaHQgdGhlIGZpcnN0IGRldmljZSB3aGljaCBpcyBzdG9yZWQgYXMgdGhlIHNlbGVjdGVkIGRldmljZVxuXHRcdFx0aWYgKGluZGV4ID09PSAwKSB7XG5cdFx0XHRcdGxpc3RJdGVtLnRleHRDb250ZW50ID0gYEhJRCAoU2VsZWN0ZWQpOiAke2RldmljZS5wcm9kdWN0TmFtZSB8fCBcIlVua25vd25cIn0gLSBWZW5kb3IgSUQ6ICR7XG5cdFx0XHRcdFx0ZGV2aWNlLnZlbmRvcklkXG5cdFx0XHRcdH0sIFByb2R1Y3QgSUQ6ICR7ZGV2aWNlLnByb2R1Y3RJZH1gO1xuXHRcdFx0XHRsaXN0SXRlbS5zdHlsZS5mb250V2VpZ2h0ID0gXCJib2xkXCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRsaXN0SXRlbS50ZXh0Q29udGVudCA9IGBISUQ6ICR7ZGV2aWNlLnByb2R1Y3ROYW1lIHx8IFwiVW5rbm93blwifSAtIFZlbmRvciBJRDogJHtcblx0XHRcdFx0XHRkZXZpY2UudmVuZG9ySWRcblx0XHRcdFx0fSwgUHJvZHVjdCBJRDogJHtkZXZpY2UucHJvZHVjdElkfWA7XG5cdFx0XHR9XG5cblx0XHRcdGRldmljZUxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuXHRcdH0pO1xuXHR9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlcXVlc3RVU0JEZXZpY2VzKCkge1xuXHQvLyBDbGVhciB0aGUgY3VycmVudCBzZWxlY3Rpb25cblx0Y2xlYXJEZXZpY2VTZWxlY3Rpb24oKTtcblxuXHRpZiAoXCJ1c2JcIiBpbiBuYXZpZ2F0b3IpIHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgZGV2aWNlID0gYXdhaXQgbmF2aWdhdG9yLnVzYi5yZXF1ZXN0RGV2aWNlKHsgZmlsdGVyczogW10gfSk7XG5cdFx0XHRjb25zb2xlLmxvZyhcIlNlbGVjdGVkIFVTQiBkZXZpY2U6XCIsIGRldmljZSk7XG5cblx0XHRcdC8vIFN0b3JlIHRoZSBVU0IgZGV2aWNlXG5cdFx0XHRpZiAoZGV2aWNlKSB7XG5cdFx0XHRcdHNlbGVjdGVkRGV2aWNlID0ge1xuXHRcdFx0XHRcdGRldmljZVR5cGU6IFwiVVNCXCIsXG5cdFx0XHRcdFx0ZGV2aWNlOiBkZXZpY2Vcblx0XHRcdFx0fTtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJTdG9yZWQgc2VsZWN0ZWQgVVNCIGRldmljZTpcIiwgc2VsZWN0ZWREZXZpY2UpO1xuXG5cdFx0XHRcdC8vIFVwZGF0ZSB2aXNpYmlsaXR5IG9mIGZpbi1sYXVuY2gtY29udGFpbmVyXG5cdFx0XHRcdHVwZGF0ZUZpbkxhdW5jaENvbnRhaW5lclZpc2liaWxpdHkoKTtcblx0XHRcdH1cblxuXHRcdFx0ZGlzcGxheVVTQkRldmljZShkZXZpY2UpO1xuXHRcdFx0cmV0dXJuIGRldmljZTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5lcnJvcihcIkVycm9yIHJlcXVlc3RpbmcgVVNCIGRldmljZTpcIiwgZXJyb3IpO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRjb25zb2xlLmxvZyhcIldlYlVTQiBBUEkgaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5cdH1cblx0cmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogU2V0cyB1cCB0aGUgZXZlbnQgbGlzdGVuZXJzIGZvciBhbGwgYnV0dG9uc1xuICovXG5mdW5jdGlvbiBzZXR1cEJ1dHRvbkV2ZW50TGlzdGVuZXJzKCk6IHZvaWQge1xuXHQvLyBXaXJlIHVwIFVTQiBkZXZpY2UgcmVxdWVzdCBidXR0b25cblx0Y29uc3QgdXNiQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG4tcmVxdWVzdC11c2ItZGV2aWNlXCIpO1xuXHRpZiAodXNiQnV0dG9uKSB7XG5cdFx0dXNiQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHQvLyBDbGVhciB0aGUgVUkgYmVmb3JlIHNob3dpbmcgdGhlIGRldmljZSBwaWNrZXIgZGlhbG9nXG5cdFx0XHRcdGNsZWFyRGV2aWNlU2VsZWN0aW9uKCk7XG5cdFx0XHRcdGF3YWl0IHJlcXVlc3RVU0JEZXZpY2VzKCk7XG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKFwiRXJyb3IgcmVxdWVzdGluZyBVU0IgZGV2aWNlOlwiLCBlcnJvcik7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHQvLyBXaXJlIHVwIEhJRCBkZXZpY2UgcmVxdWVzdCBidXR0b25cblx0Y29uc3QgaGlkQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG4tcmVxdWVzdC1oaWQtZGV2aWNlXCIpO1xuXHRpZiAoaGlkQnV0dG9uKSB7XG5cdFx0aGlkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHQvLyBDbGVhciB0aGUgVUkgYmVmb3JlIHNob3dpbmcgdGhlIGRldmljZSBwaWNrZXIgZGlhbG9nXG5cdFx0XHRcdGNsZWFyRGV2aWNlU2VsZWN0aW9uKCk7XG5cdFx0XHRcdGF3YWl0IHJlcXVlc3RIaWREZXZpY2VzKCk7XG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKFwiRXJyb3IgcmVxdWVzdGluZyBISUQgZGV2aWNlczpcIiwgZXJyb3IpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0Ly8gV2lyZSB1cCBjbGVhciBkZXZpY2UgYnV0dG9uXG5cdGNvbnN0IGNsZWFyU2VsZWN0aW9uQnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG4tY2xlYXItZGV2aWNlXCIpO1xuXHRpZiAoY2xlYXJTZWxlY3Rpb25CdXR0b24pIHtcblx0XHRjbGVhclNlbGVjdGlvbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Ly8gSnVzdCBjbGVhciB0aGUgc2VsZWN0aW9uIHN0YXRlIGFuZCBVSVxuXHRcdFx0XHRjbGVhckRldmljZVNlbGVjdGlvbigpO1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcIkRldmljZSBzZWxlY3Rpb24gY2xlYXJlZFwiKTtcblx0XHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoXCJFcnJvciBjbGVhcmluZyBkZXZpY2Ugc2VsZWN0aW9uOlwiLCBlcnJvcik7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cblxuXHQvLyBXaXJlIHVwIGZpbiBsYXVuY2ggYnV0dG9uXG5cdGNvbnN0IGZpbkxhdW5jaEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYnRuLWZpbi1sYXVuY2hcIik7XG5cdGlmIChmaW5MYXVuY2hCdXR0b24pIHtcblx0XHRmaW5MYXVuY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdC8vIFN0b3JlIGRldmljZSBpbmZvXG5cdFx0XHRcdGNvbnN0IGRldmljZUluZm8gPSB7XG5cdFx0XHRcdFx0dHlwZTogc2VsZWN0ZWREZXZpY2UuZGV2aWNlVHlwZSxcblx0XHRcdFx0XHR2ZW5kb3JJZDogc2VsZWN0ZWREZXZpY2UuZGV2aWNlPy52ZW5kb3JJZCxcblx0XHRcdFx0XHRwcm9kdWN0SWQ6IHNlbGVjdGVkRGV2aWNlLmRldmljZT8ucHJvZHVjdElkLFxuXHRcdFx0XHRcdHByb2R1Y3ROYW1lOiBzZWxlY3RlZERldmljZS5kZXZpY2U/LnByb2R1Y3ROYW1lXG5cdFx0XHRcdH07XG5cblx0XHRcdFx0Ly8gUGFzcyB0aGUgZGV2aWNlIGluZm8gdG8gdGhlIHN0YXJ0ZXJcblx0XHRcdFx0Y29uc29sZS5sb2coXCJEZXZpY2UgaW5mbyBwYXNzZWQgdG8gc3RhcnRlcjpcIiwgZGV2aWNlSW5mbyk7XG5cblx0XHRcdFx0bGV0IHVybCA9XG5cdFx0XHRcdFx0Zmluc0xpbmsucmVwbGFjZShcIj9cIiwgXCJcIikgK1xuXHRcdFx0XHRcdGA/JCRkZXZpY2VUeXBlPSR7ZGV2aWNlSW5mby50eXBlfSYkJHZlbmRvcklkPSR7ZGV2aWNlSW5mby52ZW5kb3JJZH0mJCRwcm9kdWN0SWQ9JHtkZXZpY2VJbmZvLnByb2R1Y3RJZH1gO1xuXHRcdFx0XHR3aW5kb3cub3Blbih1cmwsIFwiX2JsYW5rXCIpO1xuXG5cdFx0XHRcdC8vIENsZWFyIHNlbGVjdGlvbiBzdGF0ZSBhbmQgVUlcblx0XHRcdFx0Y2xlYXJEZXZpY2VTZWxlY3Rpb24oKTtcblxuXHRcdFx0XHQvLyBZb3UgY291bGQgYWRkIGFkZGl0aW9uYWwgY29kZSBoZXJlIHRvIG5hdmlnYXRlIGF3YXkgb3IgY2xvc2UgdGhlIHdpbmRvd1xuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcihcIkVycm9yIGluIGZpbiBsYXVuY2ggcHJvY2VzczpcIiwgZXJyb3IpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG59XG5cbi8qKlxuICogRGlzcGxheXMgVVNCIGRldmljZSBpbmZvcm1hdGlvbiBpbiB0aGUgVUlcbiAqL1xuZnVuY3Rpb24gZGlzcGxheVVTQkRldmljZShkZXZpY2U6IGFueSk6IHZvaWQge1xuXHRpZiAoIWRldmljZSkgcmV0dXJuO1xuXG5cdGNvbnN0IGRldmljZUxpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImRldmljZS1saXN0XCIpO1xuXHRpZiAoZGV2aWNlTGlzdCkge1xuXHRcdC8vIENsZWFyIHByZXZpb3VzIGVudHJpZXNcblx0XHRkZXZpY2VMaXN0LmlubmVySFRNTCA9IFwiXCI7XG5cblx0XHQvLyBDcmVhdGUgYSBsaXN0IGl0ZW0gZm9yIHRoZSBkZXZpY2Vcblx0XHRjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblx0XHRsaXN0SXRlbS50ZXh0Q29udGVudCA9IGBVU0I6ICR7ZGV2aWNlLnByb2R1Y3ROYW1lIHx8IFwiVW5rbm93blwifSAtIFZlbmRvciBJRDogJHtcblx0XHRcdGRldmljZS52ZW5kb3JJZFxuXHRcdH0sIFByb2R1Y3QgSUQ6ICR7ZGV2aWNlLnByb2R1Y3RJZH1gO1xuXHRcdGRldmljZUxpc3QuYXBwZW5kQ2hpbGQobGlzdEl0ZW0pO1xuXHR9XG59XG5cbi8qKlxuICogQ2xlYXJzIHRoZSBzZWxlY3RlZCBkZXZpY2UgYW5kIHVwZGF0ZXMgdGhlIFVJXG4gKi9cbmZ1bmN0aW9uIGNsZWFyRGV2aWNlU2VsZWN0aW9uKCk6IHZvaWQge1xuXHQvLyBSZXNldCB0aGUgc2VsZWN0ZWQgZGV2aWNlXG5cdHNlbGVjdGVkRGV2aWNlID0ge1xuXHRcdGRldmljZVR5cGU6IG51bGwsXG5cdFx0ZGV2aWNlOiBudWxsXG5cdH07XG5cblx0Ly8gQ2xlYXIgdGhlIGRldmljZSBsaXN0IGluIHRoZSBVSVxuXHRjb25zdCBkZXZpY2VMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJkZXZpY2UtbGlzdFwiKTtcblx0aWYgKGRldmljZUxpc3QpIHtcblx0XHRkZXZpY2VMaXN0LmlubmVySFRNTCA9IFwiXCI7XG5cdH1cblxuXHQvLyBVcGRhdGUgdGhlIHZpc2liaWxpdHkgb2YgdGhlIGZpbi1sYXVuY2ggY29udGFpbmVyXG5cdHVwZGF0ZUZpbkxhdW5jaENvbnRhaW5lclZpc2liaWxpdHkoKTtcblxuXHRjb25zb2xlLmxvZyhcIkRldmljZSBzZWxlY3Rpb24gY2xlYXJlZFwiKTtcbn1cblxuLyoqXG4gKiBVcGRhdGVzIHRoZSB2aXNpYmlsaXR5IG9mIHRoZSBjb250YWluZXJzIGJhc2VkIG9uIGRldmljZSBzZWxlY3Rpb24gYW5kIGZpbnMgcGFyYW1ldGVyXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZUZpbkxhdW5jaENvbnRhaW5lclZpc2liaWxpdHkoKTogdm9pZCB7XG5cdGNvbnN0IGZpbkxhdW5jaENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmluLWxhdW5jaC1jb250YWluZXJcIik7XG5cdGNvbnN0IGRldmljZUNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGV2aWNlLWNvbnRhaW5lclwiKTtcblxuXHQvLyBDaGVjayBpZiB3ZSBoYXZlIGEgc2VsZWN0ZWQgZGV2aWNlXG5cdGNvbnN0IGhhc0RldmljZVNlbGVjdGVkID0gc2VsZWN0ZWREZXZpY2UuZGV2aWNlICE9PSBudWxsO1xuXG5cdC8vIFVwZGF0ZSBkZXZpY2UgY29udGFpbmVyIHZpc2liaWxpdHlcblx0aWYgKGRldmljZUNvbnRhaW5lcikge1xuXHRcdGRldmljZUNvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gaGFzRGV2aWNlU2VsZWN0ZWQgPyBcImJsb2NrXCIgOiBcIm5vbmVcIjtcblx0XHRjb25zb2xlLmxvZyhgRGV2aWNlIGNvbnRhaW5lciB2aXNpYmlsaXR5IHNldCB0byAke2hhc0RldmljZVNlbGVjdGVkID8gXCJ2aXNpYmxlXCIgOiBcImhpZGRlblwifWApO1xuXHR9XG5cblx0Ly8gVXBkYXRlIGZpbiBsYXVuY2ggY29udGFpbmVyIHZpc2liaWxpdHlcblx0aWYgKGZpbkxhdW5jaENvbnRhaW5lcikge1xuXHRcdC8vIFNob3cgdGhlIGNvbnRhaW5lciBvbmx5IGlmIHdlIGhhdmUgYm90aCBhIGZpbnMgcGFyYW1ldGVyIGFuZCBhIHNlbGVjdGVkIGRldmljZVxuXHRcdGNvbnN0IHNob3VsZFNob3cgPSBoYXNGaW5zUGFyYW1ldGVyICYmIGhhc0RldmljZVNlbGVjdGVkO1xuXG5cdFx0ZmluTGF1bmNoQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBzaG91bGRTaG93ID8gXCJibG9ja1wiIDogXCJub25lXCI7XG5cdFx0Y29uc29sZS5sb2coYEZpbiBsYXVuY2ggY29udGFpbmVyIHZpc2liaWxpdHkgc2V0IHRvICR7c2hvdWxkU2hvdyA/IFwidmlzaWJsZVwiIDogXCJoaWRkZW5cIn1gKTtcblx0fVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9