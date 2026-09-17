/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/*!********************************!*\
  !*** ./client/src/provider.ts ***!
  \********************************/

const BASE_URL = "https://built-on-openfin.github.io/container-starter/v45/use-platform-customize-view-tab-headers";
document.addEventListener("DOMContentLoaded", async () => {
    try {
        await fin.Platform.init();
        const platform = fin.Platform.getCurrentSync();
        await platform.createWindow({
            name: "custom-tab-header-window",
            url: `${BASE_URL}/html/platform-window.html`,
            autoShow: true,
            defaultCentered: true,
            defaultWidth: 900,
            defaultHeight: 600,
            frame: true,
            layout: {
                content: []
            },
            experimental: {
                layoutEngine: "v2",
                showFavicons: true,
                defaultFaviconUrl: `${BASE_URL}/images/default-tab.svg`
            }
        });
    }
    catch (error) {
        console.error("Unable to launch the custom tab header example.", error);
    }
});

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdmlkZXIuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE1BQU0sUUFBUSxHQUFHLHVCQUF1QixDQUFDO0FBRXpDLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxLQUFLLElBQUksRUFBRTtJQUN4RCxJQUFJLENBQUM7UUFDSixNQUFNLEdBQUcsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDMUIsTUFBTSxRQUFRLEdBQUcsR0FBRyxDQUFDLFFBQVEsQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUUvQyxNQUFNLFFBQVEsQ0FBQyxZQUFZLENBQUM7WUFDM0IsSUFBSSxFQUFFLDBCQUEwQjtZQUNoQyxHQUFHLEVBQUUsR0FBRyxRQUFRLDRCQUE0QjtZQUM1QyxRQUFRLEVBQUUsSUFBSTtZQUNkLGVBQWUsRUFBRSxJQUFJO1lBQ3JCLFlBQVksRUFBRSxHQUFHO1lBQ2pCLGFBQWEsRUFBRSxHQUFHO1lBQ2xCLEtBQUssRUFBRSxJQUFJO1lBQ1gsTUFBTSxFQUFFO2dCQUNQLE9BQU8sRUFBRSxFQUFFO2FBQ1g7WUFDRCxZQUFZLEVBQUU7Z0JBQ2IsWUFBWSxFQUFFLElBQUk7Z0JBQ2xCLFlBQVksRUFBRSxJQUFJO2dCQUNsQixpQkFBaUIsRUFBRSxHQUFHLFFBQVEseUJBQXlCO2FBQ3ZEO1NBQ0QsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUFDLE9BQU8sS0FBSyxFQUFFLENBQUM7UUFDaEIsT0FBTyxDQUFDLEtBQUssQ0FBQyxpREFBaUQsRUFBRSxLQUFLLENBQUMsQ0FBQztJQUN6RSxDQUFDO0FBQ0YsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jdXN0b21pemUtdmlldy10YWItaGVhZGVycy8uL2NsaWVudC9zcmMvcHJvdmlkZXIudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQkFTRV9VUkwgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6NTA1MFwiO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBhc3luYyAoKSA9PiB7XG5cdHRyeSB7XG5cdFx0YXdhaXQgZmluLlBsYXRmb3JtLmluaXQoKTtcblx0XHRjb25zdCBwbGF0Zm9ybSA9IGZpbi5QbGF0Zm9ybS5nZXRDdXJyZW50U3luYygpO1xuXG5cdFx0YXdhaXQgcGxhdGZvcm0uY3JlYXRlV2luZG93KHtcblx0XHRcdG5hbWU6IFwiY3VzdG9tLXRhYi1oZWFkZXItd2luZG93XCIsXG5cdFx0XHR1cmw6IGAke0JBU0VfVVJMfS9odG1sL3BsYXRmb3JtLXdpbmRvdy5odG1sYCxcblx0XHRcdGF1dG9TaG93OiB0cnVlLFxuXHRcdFx0ZGVmYXVsdENlbnRlcmVkOiB0cnVlLFxuXHRcdFx0ZGVmYXVsdFdpZHRoOiA5MDAsXG5cdFx0XHRkZWZhdWx0SGVpZ2h0OiA2MDAsXG5cdFx0XHRmcmFtZTogdHJ1ZSxcblx0XHRcdGxheW91dDoge1xuXHRcdFx0XHRjb250ZW50OiBbXVxuXHRcdFx0fSxcblx0XHRcdGV4cGVyaW1lbnRhbDoge1xuXHRcdFx0XHRsYXlvdXRFbmdpbmU6IFwidjJcIixcblx0XHRcdFx0c2hvd0Zhdmljb25zOiB0cnVlLFxuXHRcdFx0XHRkZWZhdWx0RmF2aWNvblVybDogYCR7QkFTRV9VUkx9L2ltYWdlcy9kZWZhdWx0LXRhYi5zdmdgXG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5lcnJvcihcIlVuYWJsZSB0byBsYXVuY2ggdGhlIGN1c3RvbSB0YWIgaGVhZGVyIGV4YW1wbGUuXCIsIGVycm9yKTtcblx0fVxufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=