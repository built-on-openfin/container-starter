/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
/*!*****************************!*\
  !*** ./client/src/popup.ts ***!
  \*****************************/

const me = fin.me;
document.addEventListener("DOMContentLoaded", init);
async function init() {
    await createGroupButtons();
}
async function createGroupButtons() {
    const { customData: contextGroups } = await me.getOptions();
    for (const group of contextGroups) {
        const groupBtn = document.createElement("button");
        groupBtn.style.background = group.displayMetadata.color;
        groupBtn.style.border = "none";
        groupBtn.style.borderRadius = "50%";
        groupBtn.style.width = "20px";
        groupBtn.style.height = "20px";
        groupBtn.style.marginRight = "1rem";
        console.log(group);
        groupBtn.addEventListener("click", async () => {
            await me.dispatchPopupResult(group);
        });
        document.body.append(groupBtn);
    }
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9wdXAuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxNQUFNLEVBQUUsR0FBRyxHQUFHLENBQUMsRUFBb0IsQ0FBQztBQUVwQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFFcEQsS0FBSyxVQUFVLElBQUk7SUFDbEIsTUFBTSxrQkFBa0IsRUFBRSxDQUFDO0FBQzVCLENBQUM7QUFFRCxLQUFLLFVBQVUsa0JBQWtCO0lBQ2hDLE1BQU0sRUFBRSxVQUFVLEVBQUUsYUFBYSxFQUFFLEdBQUcsTUFBTSxFQUFFLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDNUQsS0FBSyxNQUFNLEtBQUssSUFBSSxhQUFhLEVBQUU7UUFDbEMsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNsRCxRQUFRLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQztRQUN4RCxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDL0IsUUFBUSxDQUFDLEtBQUssQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO1FBQ3BDLFFBQVEsQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLE1BQU0sQ0FBQztRQUM5QixRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDL0IsUUFBUSxDQUFDLEtBQUssQ0FBQyxXQUFXLEdBQUcsTUFBTSxDQUFDO1FBQ3BDLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbkIsUUFBUSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxLQUFLLElBQUksRUFBRTtZQUM3QyxNQUFNLEVBQUUsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNyQyxDQUFDLENBQUMsQ0FBQztRQUNILFFBQVEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQy9CO0FBQ0YsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3VzZS1wb3B1cC13aW5kb3ctbXVsdGlwbGUtcmVzdWx0cy8uL2NsaWVudC9zcmMvcG9wdXAudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgbWUgPSBmaW4ubWUgYXMgT3BlbkZpbi5XaW5kb3c7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGluaXQpO1xuXG5hc3luYyBmdW5jdGlvbiBpbml0KCk6IFByb21pc2U8dm9pZD4ge1xuXHRhd2FpdCBjcmVhdGVHcm91cEJ1dHRvbnMoKTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlR3JvdXBCdXR0b25zKCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCB7IGN1c3RvbURhdGE6IGNvbnRleHRHcm91cHMgfSA9IGF3YWl0IG1lLmdldE9wdGlvbnMoKTtcblx0Zm9yIChjb25zdCBncm91cCBvZiBjb250ZXh0R3JvdXBzKSB7XG5cdFx0Y29uc3QgZ3JvdXBCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuXHRcdGdyb3VwQnRuLnN0eWxlLmJhY2tncm91bmQgPSBncm91cC5kaXNwbGF5TWV0YWRhdGEuY29sb3I7XG5cdFx0Z3JvdXBCdG4uc3R5bGUuYm9yZGVyID0gXCJub25lXCI7XG5cdFx0Z3JvdXBCdG4uc3R5bGUuYm9yZGVyUmFkaXVzID0gXCI1MCVcIjtcblx0XHRncm91cEJ0bi5zdHlsZS53aWR0aCA9IFwiMjBweFwiO1xuXHRcdGdyb3VwQnRuLnN0eWxlLmhlaWdodCA9IFwiMjBweFwiO1xuXHRcdGdyb3VwQnRuLnN0eWxlLm1hcmdpblJpZ2h0ID0gXCIxcmVtXCI7XG5cdFx0Y29uc29sZS5sb2coZ3JvdXApO1xuXHRcdGdyb3VwQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG5cdFx0XHRhd2FpdCBtZS5kaXNwYXRjaFBvcHVwUmVzdWx0KGdyb3VwKTtcblx0XHR9KTtcblx0XHRkb2N1bWVudC5ib2R5LmFwcGVuZChncm91cEJ0bik7XG5cdH1cbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==