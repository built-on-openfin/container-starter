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
    const search = location.search;
    // Extract the 'fins' parameter from the querystring
    const urlParams = new URLSearchParams(search);
    const finsParam = urlParams.get("fins");
    // Set up event listeners for USB and HID buttons
    setupButtonEventListeners();
    if (finsParam !== null) {
        console.log("Fins parameter value:", finsParam);
        if (finsParam.includes("fin://") || finsParam.includes("fins://")) {
            hasFinsParameter = true;
            finsLink = decodeURIComponent(finsParam);
            console.log("Fins protocol URL detected:", finsLink);
        }
    }
    // Initially hide the fin-launch-container
    updateFinLaunchContainerVisibility();
}
/**
 * Requests HID devices and stores the selected device.
 * @returns An array of selected HID devices.
 */
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
 * Displays HID device information in the UI.
 * @param devices the devices to list.
 */
function displayHIDDevices(devices) {
    if (!devices || devices.length === 0) {
        return;
    }
    const deviceList = document.querySelector("#device-list");
    if (deviceList) {
        // Clear previous entries
        deviceList.innerHTML = "";
        // Create list items for each device
        for (const [index, device] of devices.entries()) {
            const listItem = document.createElement("li");
            // Highlight the first device which is stored as the selected device
            if (index === 0) {
                listItem.textContent = `HID (Selected): ${device.productName || "Unknown"} - Vendor ID: ${device.vendorId}, Product ID: ${device.productId}`;
                listItem.style.fontWeight = "bold";
            }
            else {
                listItem.textContent = `HID: ${device.productName || "Unknown"} - Vendor ID: ${device.vendorId}, Product ID: ${device.productId}`;
            }
            deviceList.append(listItem);
        }
    }
}
/**
 * Requests USB devices and stores the selected device.
 * @returns The selected USB device or null if none was selected.
 */
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
                    device
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
 * Sets up the event listeners for all buttons.
 */
function setupButtonEventListeners() {
    // Wire up USB device request button
    const usbButton = document.querySelector("#btn-request-usb-device");
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
    const hidButton = document.querySelector("#btn-request-hid-device");
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
    const clearSelectionButton = document.querySelector("#btn-clear-device");
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
    const finLaunchButton = document.querySelector("#btn-fin-launch");
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
                const url = `${finsLink.replace("?", "")}?$$deviceType=${deviceInfo.type}&$$vendorId=${deviceInfo.vendorId}&$$productId=${deviceInfo.productId}`;
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
 * Displays USB device information in the UI.
 * @param device The device to list.
 */
function displayUSBDevice(device) {
    if (!device) {
        return;
    }
    const deviceList = document.querySelector("#device-list");
    if (deviceList) {
        // Clear previous entries
        deviceList.innerHTML = "";
        // Create a list item for the device
        const listItem = document.createElement("li");
        listItem.textContent = `USB: ${device.productName ?? "Unknown"} - Vendor ID: ${device.vendorId}, Product ID: ${device.productId}`;
        deviceList.append(listItem);
    }
}
/**
 * Clears the selected device and updates the UI.
 */
function clearDeviceSelection() {
    // Reset the selected device
    selectedDevice = {
        deviceType: null,
        device: null
    };
    // Clear the device list in the UI
    const deviceList = document.querySelector("#device-list");
    if (deviceList) {
        deviceList.innerHTML = "";
    }
    // Update the visibility of the fin-launch container
    updateFinLaunchContainerVisibility();
    console.log("Device selection cleared");
}
/**
 * Updates the visibility of the containers based on device selection and fins parameter.
 */
function updateFinLaunchContainerVisibility() {
    const finLaunchContainer = document.querySelector("#fin-launch-container");
    const deviceContainer = document.querySelector("#device-container");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDO0lBRXpELHFDQUFxQztJQUNyQyxJQUFJLGVBQWUsRUFBRSxDQUFDO1FBQ3JCLGVBQWUsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLGlCQUFpQixDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztRQUNyRSxPQUFPLENBQUMsR0FBRyxDQUFDLHNDQUFzQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0lBQy9GLENBQUM7SUFFRCx5Q0FBeUM7SUFDekMsSUFBSSxrQkFBa0IsRUFBRSxDQUFDO1FBQ3hCLGlGQUFpRjtRQUNqRixNQUFNLFVBQVUsR0FBRyxnQkFBZ0IsSUFBSSxpQkFBaUIsQ0FBQztRQUV6RCxrQkFBa0IsQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7UUFDakUsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQ0FBMEMsVUFBVSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUM7SUFDNUYsQ0FBQztBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kZXRlY3QtdXNiLWRldmljZXMvLi9jbGllbnQvc3JjL2RldmljZS1pZGVudGlmaWVyLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFN0b3JlIHRoZSBzZWxlY3RlZCBkZXZpY2UgYW5kIGl0cyB0eXBlXG4vKipcbiAqIEEgdHlwZSB0byBkZXNjcmliZSB0aGUgZGV2aWNlIHNlbGVjdGlvbi5cbiAqL1xuaW50ZXJmYWNlIERldmljZVNlbGVjdGlvbiB7XG5cdC8qKlxuXHQgKlxuXHQgKi9cblx0ZGV2aWNlVHlwZTogXCJISURcIiB8IFwiVVNCXCIgfCBudWxsO1xuXHQvKipcblx0ICpcblx0ICovXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG5cdGRldmljZTogYW55O1xufVxuXG4vLyBHbG9iYWwgdmFyaWFibGUgdG8gc3RvcmUgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBkZXZpY2VcbmxldCBzZWxlY3RlZERldmljZTogRGV2aWNlU2VsZWN0aW9uID0ge1xuXHRkZXZpY2VUeXBlOiBudWxsLFxuXHRkZXZpY2U6IG51bGxcbn07XG5cbi8vIEdsb2JhbCB2YXJpYWJsZSB0byBzdG9yZSBpZiBmaW5zIHBhcmFtZXRlciB3YXMgcGFzc2VkXG5sZXQgaGFzRmluc1BhcmFtZXRlciA9IGZhbHNlO1xuXG5sZXQgZmluc0xpbmsgPSBcIlwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBhc3luYyAoKSA9PiB7XG5cdHRyeSB7XG5cdFx0YXdhaXQgaW5pdERvbSgpO1xuXHR9IGNhdGNoIChlcnJvcikge1xuXHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXHR9XG59KTtcblxuLyoqXG4gKiBJbml0aWFsaXplcyB0aGUgY29udHJvbHMgYXZhaWxhYmxlIG9uIHRoZSBkZXRlY3Rpb24gcGFnZS5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gaW5pdERvbSgpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3Qgc2VhcmNoID0gbG9jYXRpb24uc2VhcmNoO1xuXHQvLyBFeHRyYWN0IHRoZSAnZmlucycgcGFyYW1ldGVyIGZyb20gdGhlIHF1ZXJ5c3RyaW5nXG5cdGNvbnN0IHVybFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoc2VhcmNoKTtcblx0Y29uc3QgZmluc1BhcmFtID0gdXJsUGFyYW1zLmdldChcImZpbnNcIik7XG5cblx0Ly8gU2V0IHVwIGV2ZW50IGxpc3RlbmVycyBmb3IgVVNCIGFuZCBISUQgYnV0dG9uc1xuXHRzZXR1cEJ1dHRvbkV2ZW50TGlzdGVuZXJzKCk7XG5cblx0aWYgKGZpbnNQYXJhbSAhPT0gbnVsbCkge1xuXHRcdGNvbnNvbGUubG9nKFwiRmlucyBwYXJhbWV0ZXIgdmFsdWU6XCIsIGZpbnNQYXJhbSk7XG5cdFx0aWYgKGZpbnNQYXJhbS5pbmNsdWRlcyhcImZpbjovL1wiKSB8fCBmaW5zUGFyYW0uaW5jbHVkZXMoXCJmaW5zOi8vXCIpKSB7XG5cdFx0XHRoYXNGaW5zUGFyYW1ldGVyID0gdHJ1ZTtcblx0XHRcdGZpbnNMaW5rID0gZGVjb2RlVVJJQ29tcG9uZW50KGZpbnNQYXJhbSk7XG5cdFx0XHRjb25zb2xlLmxvZyhcIkZpbnMgcHJvdG9jb2wgVVJMIGRldGVjdGVkOlwiLCBmaW5zTGluayk7XG5cdFx0fVxuXHR9XG5cblx0Ly8gSW5pdGlhbGx5IGhpZGUgdGhlIGZpbi1sYXVuY2gtY29udGFpbmVyXG5cdHVwZGF0ZUZpbkxhdW5jaENvbnRhaW5lclZpc2liaWxpdHkoKTtcbn1cblxuLyoqXG4gKiBSZXF1ZXN0cyBISUQgZGV2aWNlcyBhbmQgc3RvcmVzIHRoZSBzZWxlY3RlZCBkZXZpY2UuXG4gKiBAcmV0dXJucyBBbiBhcnJheSBvZiBzZWxlY3RlZCBISUQgZGV2aWNlcy5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gcmVxdWVzdEhpZERldmljZXMoKTogUHJvbWlzZTxISUREZXZpY2VbXT4ge1xuXHQvLyBDbGVhciB0aGUgY3VycmVudCBzZWxlY3Rpb25cblx0Y2xlYXJEZXZpY2VTZWxlY3Rpb24oKTtcblxuXHRpZiAoXCJoaWRcIiBpbiBuYXZpZ2F0b3IpIHtcblx0XHR0cnkge1xuXHRcdFx0Y29uc3QgZGV2aWNlcyA9IGF3YWl0IG5hdmlnYXRvci5oaWQucmVxdWVzdERldmljZSh7IGZpbHRlcnM6IFtdIH0pO1xuXHRcdFx0Y29uc29sZS5sb2coXCJTZWxlY3RlZCBISUQgZGV2aWNlczpcIiwgZGV2aWNlcyk7XG5cblx0XHRcdC8vIFN0b3JlIHRoZSBmaXJzdCBISUQgZGV2aWNlIGlmIGF2YWlsYWJsZVxuXHRcdFx0aWYgKGRldmljZXMgJiYgZGV2aWNlcy5sZW5ndGggPiAwKSB7XG5cdFx0XHRcdHNlbGVjdGVkRGV2aWNlID0ge1xuXHRcdFx0XHRcdGRldmljZVR5cGU6IFwiSElEXCIsXG5cdFx0XHRcdFx0ZGV2aWNlOiBkZXZpY2VzWzBdIC8vIFN0b3JlIHRoZSBmaXJzdCBkZXZpY2Ugb3IgaGFuZGxlIG11bHRpcGxlIGFzIG5lZWRlZFxuXHRcdFx0XHR9O1xuXHRcdFx0XHRjb25zb2xlLmxvZyhcIlN0b3JlZCBzZWxlY3RlZCBISUQgZGV2aWNlOlwiLCBzZWxlY3RlZERldmljZSk7XG5cblx0XHRcdFx0Ly8gVXBkYXRlIHZpc2liaWxpdHkgb2YgZmluLWxhdW5jaC1jb250YWluZXJcblx0XHRcdFx0dXBkYXRlRmluTGF1bmNoQ29udGFpbmVyVmlzaWJpbGl0eSgpO1xuXHRcdFx0fVxuXG5cdFx0XHRkaXNwbGF5SElERGV2aWNlcyhkZXZpY2VzKTtcblx0XHRcdHJldHVybiBkZXZpY2VzO1xuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKFwiRXJyb3IgcmVxdWVzdGluZyBISUQgZGV2aWNlczpcIiwgZXJyb3IpO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRjb25zb2xlLmxvZyhcIldlYkhJRCBBUEkgaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5cdH1cblx0cmV0dXJuIFtdO1xufVxuXG4vKipcbiAqIERpc3BsYXlzIEhJRCBkZXZpY2UgaW5mb3JtYXRpb24gaW4gdGhlIFVJLlxuICogQHBhcmFtIGRldmljZXMgdGhlIGRldmljZXMgdG8gbGlzdC5cbiAqL1xuZnVuY3Rpb24gZGlzcGxheUhJRERldmljZXMoZGV2aWNlczogSElERGV2aWNlW10pOiB2b2lkIHtcblx0aWYgKCFkZXZpY2VzIHx8IGRldmljZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Y29uc3QgZGV2aWNlTGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZGV2aWNlLWxpc3RcIik7XG5cdGlmIChkZXZpY2VMaXN0KSB7XG5cdFx0Ly8gQ2xlYXIgcHJldmlvdXMgZW50cmllc1xuXHRcdGRldmljZUxpc3QuaW5uZXJIVE1MID0gXCJcIjtcblxuXHRcdC8vIENyZWF0ZSBsaXN0IGl0ZW1zIGZvciBlYWNoIGRldmljZVxuXHRcdGZvciAoY29uc3QgW2luZGV4LCBkZXZpY2VdIG9mIGRldmljZXMuZW50cmllcygpKSB7XG5cdFx0XHRjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblxuXHRcdFx0Ly8gSGlnaGxpZ2h0IHRoZSBmaXJzdCBkZXZpY2Ugd2hpY2ggaXMgc3RvcmVkIGFzIHRoZSBzZWxlY3RlZCBkZXZpY2Vcblx0XHRcdGlmIChpbmRleCA9PT0gMCkge1xuXHRcdFx0XHRsaXN0SXRlbS50ZXh0Q29udGVudCA9IGBISUQgKFNlbGVjdGVkKTogJHtkZXZpY2UucHJvZHVjdE5hbWUgfHwgXCJVbmtub3duXCJ9IC0gVmVuZG9yIElEOiAke1xuXHRcdFx0XHRcdGRldmljZS52ZW5kb3JJZFxuXHRcdFx0XHR9LCBQcm9kdWN0IElEOiAke2RldmljZS5wcm9kdWN0SWR9YDtcblx0XHRcdFx0bGlzdEl0ZW0uc3R5bGUuZm9udFdlaWdodCA9IFwiYm9sZFwiO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bGlzdEl0ZW0udGV4dENvbnRlbnQgPSBgSElEOiAke2RldmljZS5wcm9kdWN0TmFtZSB8fCBcIlVua25vd25cIn0gLSBWZW5kb3IgSUQ6ICR7XG5cdFx0XHRcdFx0ZGV2aWNlLnZlbmRvcklkXG5cdFx0XHRcdH0sIFByb2R1Y3QgSUQ6ICR7ZGV2aWNlLnByb2R1Y3RJZH1gO1xuXHRcdFx0fVxuXG5cdFx0XHRkZXZpY2VMaXN0LmFwcGVuZChsaXN0SXRlbSk7XG5cdFx0fVxuXHR9XG59XG5cbi8qKlxuICogUmVxdWVzdHMgVVNCIGRldmljZXMgYW5kIHN0b3JlcyB0aGUgc2VsZWN0ZWQgZGV2aWNlLlxuICogQHJldHVybnMgVGhlIHNlbGVjdGVkIFVTQiBkZXZpY2Ugb3IgbnVsbCBpZiBub25lIHdhcyBzZWxlY3RlZC5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gcmVxdWVzdFVTQkRldmljZXMoKTogUHJvbWlzZTxVU0JEZXZpY2UgfCBudWxsPiB7XG5cdC8vIENsZWFyIHRoZSBjdXJyZW50IHNlbGVjdGlvblxuXHRjbGVhckRldmljZVNlbGVjdGlvbigpO1xuXG5cdGlmIChcInVzYlwiIGluIG5hdmlnYXRvcikge1xuXHRcdHRyeSB7XG5cdFx0XHRjb25zdCBkZXZpY2UgPSBhd2FpdCBuYXZpZ2F0b3IudXNiLnJlcXVlc3REZXZpY2UoeyBmaWx0ZXJzOiBbXSB9KTtcblx0XHRcdGNvbnNvbGUubG9nKFwiU2VsZWN0ZWQgVVNCIGRldmljZTpcIiwgZGV2aWNlKTtcblxuXHRcdFx0Ly8gU3RvcmUgdGhlIFVTQiBkZXZpY2Vcblx0XHRcdGlmIChkZXZpY2UpIHtcblx0XHRcdFx0c2VsZWN0ZWREZXZpY2UgPSB7XG5cdFx0XHRcdFx0ZGV2aWNlVHlwZTogXCJVU0JcIixcblx0XHRcdFx0XHRkZXZpY2Vcblx0XHRcdFx0fTtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJTdG9yZWQgc2VsZWN0ZWQgVVNCIGRldmljZTpcIiwgc2VsZWN0ZWREZXZpY2UpO1xuXG5cdFx0XHRcdC8vIFVwZGF0ZSB2aXNpYmlsaXR5IG9mIGZpbi1sYXVuY2gtY29udGFpbmVyXG5cdFx0XHRcdHVwZGF0ZUZpbkxhdW5jaENvbnRhaW5lclZpc2liaWxpdHkoKTtcblx0XHRcdH1cblxuXHRcdFx0ZGlzcGxheVVTQkRldmljZShkZXZpY2UpO1xuXHRcdFx0cmV0dXJuIGRldmljZTtcblx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0Y29uc29sZS5lcnJvcihcIkVycm9yIHJlcXVlc3RpbmcgVVNCIGRldmljZTpcIiwgZXJyb3IpO1xuXHRcdH1cblx0fSBlbHNlIHtcblx0XHRjb25zb2xlLmxvZyhcIldlYlVTQiBBUEkgaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5cdH1cblx0cmV0dXJuIG51bGw7XG59XG5cbi8qKlxuICogU2V0cyB1cCB0aGUgZXZlbnQgbGlzdGVuZXJzIGZvciBhbGwgYnV0dG9ucy5cbiAqL1xuZnVuY3Rpb24gc2V0dXBCdXR0b25FdmVudExpc3RlbmVycygpOiB2b2lkIHtcblx0Ly8gV2lyZSB1cCBVU0IgZGV2aWNlIHJlcXVlc3QgYnV0dG9uXG5cdGNvbnN0IHVzYkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLXJlcXVlc3QtdXNiLWRldmljZVwiKTtcblx0aWYgKHVzYkJ1dHRvbikge1xuXHRcdHVzYkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Ly8gQ2xlYXIgdGhlIFVJIGJlZm9yZSBzaG93aW5nIHRoZSBkZXZpY2UgcGlja2VyIGRpYWxvZ1xuXHRcdFx0XHRjbGVhckRldmljZVNlbGVjdGlvbigpO1xuXHRcdFx0XHRhd2FpdCByZXF1ZXN0VVNCRGV2aWNlcygpO1xuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcihcIkVycm9yIHJlcXVlc3RpbmcgVVNCIGRldmljZTpcIiwgZXJyb3IpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0Ly8gV2lyZSB1cCBISUQgZGV2aWNlIHJlcXVlc3QgYnV0dG9uXG5cdGNvbnN0IGhpZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLXJlcXVlc3QtaGlkLWRldmljZVwiKTtcblx0aWYgKGhpZEJ1dHRvbikge1xuXHRcdGhpZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Ly8gQ2xlYXIgdGhlIFVJIGJlZm9yZSBzaG93aW5nIHRoZSBkZXZpY2UgcGlja2VyIGRpYWxvZ1xuXHRcdFx0XHRjbGVhckRldmljZVNlbGVjdGlvbigpO1xuXHRcdFx0XHRhd2FpdCByZXF1ZXN0SGlkRGV2aWNlcygpO1xuXHRcdFx0fSBjYXRjaCAoZXJyb3IpIHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcihcIkVycm9yIHJlcXVlc3RpbmcgSElEIGRldmljZXM6XCIsIGVycm9yKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdC8vIFdpcmUgdXAgY2xlYXIgZGV2aWNlIGJ1dHRvblxuXHRjb25zdCBjbGVhclNlbGVjdGlvbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLWNsZWFyLWRldmljZVwiKTtcblx0aWYgKGNsZWFyU2VsZWN0aW9uQnV0dG9uKSB7XG5cdFx0Y2xlYXJTZWxlY3Rpb25CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdC8vIEp1c3QgY2xlYXIgdGhlIHNlbGVjdGlvbiBzdGF0ZSBhbmQgVUlcblx0XHRcdFx0Y2xlYXJEZXZpY2VTZWxlY3Rpb24oKTtcblx0XHRcdFx0Y29uc29sZS5sb2coXCJEZXZpY2Ugc2VsZWN0aW9uIGNsZWFyZWRcIik7XG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKFwiRXJyb3IgY2xlYXJpbmcgZGV2aWNlIHNlbGVjdGlvbjpcIiwgZXJyb3IpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0Ly8gV2lyZSB1cCBmaW4gbGF1bmNoIGJ1dHRvblxuXHRjb25zdCBmaW5MYXVuY2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2J0bi1maW4tbGF1bmNoXCIpO1xuXHRpZiAoZmluTGF1bmNoQnV0dG9uKSB7XG5cdFx0ZmluTGF1bmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHQvLyBTdG9yZSBkZXZpY2UgaW5mb1xuXHRcdFx0XHRjb25zdCBkZXZpY2VJbmZvID0ge1xuXHRcdFx0XHRcdHR5cGU6IHNlbGVjdGVkRGV2aWNlLmRldmljZVR5cGUsXG5cdFx0XHRcdFx0dmVuZG9ySWQ6IHNlbGVjdGVkRGV2aWNlLmRldmljZT8udmVuZG9ySWQsXG5cdFx0XHRcdFx0cHJvZHVjdElkOiBzZWxlY3RlZERldmljZS5kZXZpY2U/LnByb2R1Y3RJZCxcblx0XHRcdFx0XHRwcm9kdWN0TmFtZTogc2VsZWN0ZWREZXZpY2UuZGV2aWNlPy5wcm9kdWN0TmFtZVxuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdC8vIFBhc3MgdGhlIGRldmljZSBpbmZvIHRvIHRoZSBzdGFydGVyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwiRGV2aWNlIGluZm8gcGFzc2VkIHRvIHN0YXJ0ZXI6XCIsIGRldmljZUluZm8pO1xuXG5cdFx0XHRcdGNvbnN0IHVybCA9IGAke2ZpbnNMaW5rLnJlcGxhY2UoXCI/XCIsIFwiXCIpfT8kJGRldmljZVR5cGU9JHtkZXZpY2VJbmZvLnR5cGV9JiQkdmVuZG9ySWQ9JHtkZXZpY2VJbmZvLnZlbmRvcklkfSYkJHByb2R1Y3RJZD0ke2RldmljZUluZm8ucHJvZHVjdElkfWA7XG5cdFx0XHRcdHdpbmRvdy5vcGVuKHVybCwgXCJfYmxhbmtcIik7XG5cblx0XHRcdFx0Ly8gQ2xlYXIgc2VsZWN0aW9uIHN0YXRlIGFuZCBVSVxuXHRcdFx0XHRjbGVhckRldmljZVNlbGVjdGlvbigpO1xuXG5cdFx0XHRcdC8vIFlvdSBjb3VsZCBhZGQgYWRkaXRpb25hbCBjb2RlIGhlcmUgdG8gbmF2aWdhdGUgYXdheSBvciBjbG9zZSB0aGUgd2luZG93XG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRjb25zb2xlLmVycm9yKFwiRXJyb3IgaW4gZmluIGxhdW5jaCBwcm9jZXNzOlwiLCBlcnJvcik7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbn1cblxuLyoqXG4gKiBEaXNwbGF5cyBVU0IgZGV2aWNlIGluZm9ybWF0aW9uIGluIHRoZSBVSS5cbiAqIEBwYXJhbSBkZXZpY2UgVGhlIGRldmljZSB0byBsaXN0LlxuICovXG5mdW5jdGlvbiBkaXNwbGF5VVNCRGV2aWNlKGRldmljZTogVVNCRGV2aWNlIHwgbnVsbCk6IHZvaWQge1xuXHRpZiAoIWRldmljZSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IGRldmljZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RldmljZS1saXN0XCIpO1xuXHRpZiAoZGV2aWNlTGlzdCkge1xuXHRcdC8vIENsZWFyIHByZXZpb3VzIGVudHJpZXNcblx0XHRkZXZpY2VMaXN0LmlubmVySFRNTCA9IFwiXCI7XG5cblx0XHQvLyBDcmVhdGUgYSBsaXN0IGl0ZW0gZm9yIHRoZSBkZXZpY2Vcblx0XHRjb25zdCBsaXN0SXRlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcblx0XHRsaXN0SXRlbS50ZXh0Q29udGVudCA9IGBVU0I6ICR7ZGV2aWNlLnByb2R1Y3ROYW1lID8/IFwiVW5rbm93blwifSAtIFZlbmRvciBJRDogJHtcblx0XHRcdGRldmljZS52ZW5kb3JJZFxuXHRcdH0sIFByb2R1Y3QgSUQ6ICR7ZGV2aWNlLnByb2R1Y3RJZH1gO1xuXHRcdGRldmljZUxpc3QuYXBwZW5kKGxpc3RJdGVtKTtcblx0fVxufVxuXG4vKipcbiAqIENsZWFycyB0aGUgc2VsZWN0ZWQgZGV2aWNlIGFuZCB1cGRhdGVzIHRoZSBVSS5cbiAqL1xuZnVuY3Rpb24gY2xlYXJEZXZpY2VTZWxlY3Rpb24oKTogdm9pZCB7XG5cdC8vIFJlc2V0IHRoZSBzZWxlY3RlZCBkZXZpY2Vcblx0c2VsZWN0ZWREZXZpY2UgPSB7XG5cdFx0ZGV2aWNlVHlwZTogbnVsbCxcblx0XHRkZXZpY2U6IG51bGxcblx0fTtcblxuXHQvLyBDbGVhciB0aGUgZGV2aWNlIGxpc3QgaW4gdGhlIFVJXG5cdGNvbnN0IGRldmljZUxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RldmljZS1saXN0XCIpO1xuXHRpZiAoZGV2aWNlTGlzdCkge1xuXHRcdGRldmljZUxpc3QuaW5uZXJIVE1MID0gXCJcIjtcblx0fVxuXG5cdC8vIFVwZGF0ZSB0aGUgdmlzaWJpbGl0eSBvZiB0aGUgZmluLWxhdW5jaCBjb250YWluZXJcblx0dXBkYXRlRmluTGF1bmNoQ29udGFpbmVyVmlzaWJpbGl0eSgpO1xuXG5cdGNvbnNvbGUubG9nKFwiRGV2aWNlIHNlbGVjdGlvbiBjbGVhcmVkXCIpO1xufVxuXG4vKipcbiAqIFVwZGF0ZXMgdGhlIHZpc2liaWxpdHkgb2YgdGhlIGNvbnRhaW5lcnMgYmFzZWQgb24gZGV2aWNlIHNlbGVjdGlvbiBhbmQgZmlucyBwYXJhbWV0ZXIuXG4gKi9cbmZ1bmN0aW9uIHVwZGF0ZUZpbkxhdW5jaENvbnRhaW5lclZpc2liaWxpdHkoKTogdm9pZCB7XG5cdGNvbnN0IGZpbkxhdW5jaENvbnRhaW5lcjogSFRNTEVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmaW4tbGF1bmNoLWNvbnRhaW5lclwiKTtcblx0Y29uc3QgZGV2aWNlQ29udGFpbmVyOiBIVE1MRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2RldmljZS1jb250YWluZXJcIik7XG5cblx0Ly8gQ2hlY2sgaWYgd2UgaGF2ZSBhIHNlbGVjdGVkIGRldmljZVxuXHRjb25zdCBoYXNEZXZpY2VTZWxlY3RlZCA9IHNlbGVjdGVkRGV2aWNlLmRldmljZSAhPT0gbnVsbDtcblxuXHQvLyBVcGRhdGUgZGV2aWNlIGNvbnRhaW5lciB2aXNpYmlsaXR5XG5cdGlmIChkZXZpY2VDb250YWluZXIpIHtcblx0XHRkZXZpY2VDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IGhhc0RldmljZVNlbGVjdGVkID8gXCJibG9ja1wiIDogXCJub25lXCI7XG5cdFx0Y29uc29sZS5sb2coYERldmljZSBjb250YWluZXIgdmlzaWJpbGl0eSBzZXQgdG8gJHtoYXNEZXZpY2VTZWxlY3RlZCA/IFwidmlzaWJsZVwiIDogXCJoaWRkZW5cIn1gKTtcblx0fVxuXG5cdC8vIFVwZGF0ZSBmaW4gbGF1bmNoIGNvbnRhaW5lciB2aXNpYmlsaXR5XG5cdGlmIChmaW5MYXVuY2hDb250YWluZXIpIHtcblx0XHQvLyBTaG93IHRoZSBjb250YWluZXIgb25seSBpZiB3ZSBoYXZlIGJvdGggYSBmaW5zIHBhcmFtZXRlciBhbmQgYSBzZWxlY3RlZCBkZXZpY2Vcblx0XHRjb25zdCBzaG91bGRTaG93ID0gaGFzRmluc1BhcmFtZXRlciAmJiBoYXNEZXZpY2VTZWxlY3RlZDtcblxuXHRcdGZpbkxhdW5jaENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gc2hvdWxkU2hvdyA/IFwiYmxvY2tcIiA6IFwibm9uZVwiO1xuXHRcdGNvbnNvbGUubG9nKGBGaW4gbGF1bmNoIGNvbnRhaW5lciB2aXNpYmlsaXR5IHNldCB0byAke3Nob3VsZFNob3cgPyBcInZpc2libGVcIiA6IFwiaGlkZGVuXCJ9YCk7XG5cdH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==