/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!******************************!*\
  !*** ./client/src/window.ts ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CONTAINER_ID: () => (/* binding */ CONTAINER_ID)
/* harmony export */ });
const CONTAINER_ID = "layout-container";
window.addEventListener("DOMContentLoaded", async () => {
    const me = fin.me;
    await setupTitleBar(me);
    await fin.Platform.Layout.init({ layoutManagerOverride: basicLayoutManagerOverride });
});
/**
 * Function that returns a class for the Layout.init to invoke.
 * @param Base base constructor
 * @returns LayoutManager child class
 */
function basicLayoutManagerOverride(Base) {
    /**
     * @class LayoutManagerBasic
     * This implementation is the fundamental
     */
    return class LayoutManagerBasic extends Base {
        constructor() {
            super(...arguments);
            this.layoutMapArray = [];
            this.layoutContainer = document.querySelector("#layout-container");
            /**
             * @function applyLayoutSnapshot create a layout once per layout in a snapshot.
             * @param snapshot layout snapshot
             * @returns nothing
             */
            this.applyLayoutSnapshot = async ({ layouts }) => {
                console.log("Applying Layout Snapshot", JSON.stringify(layouts, null, 4));
                this.layoutMapArray = Object.keys(layouts).map((k) => ({ layoutName: k, layout: layouts[k] }));
                if (this.layoutContainer !== undefined) {
                    for (const layoutItem of this.layoutMapArray) {
                        await fin.Platform.Layout.create({
                            container: this.layoutContainer,
                            layout: layoutItem.layout,
                            layoutName: layoutItem.layoutName
                        });
                    }
                }
            };
            /**
             * The showLayout hook is called when a hidden layout receives a focus event or a notification event.
             * @param layoutSnapshot layout snapshot item to show
             * @param layoutSnapshot.layoutName the name of the layout to show
             */
            // public async showLayout({ layoutName }: OpenFin.LayoutIdentity): Promise<void> {
            // 	if (layoutName) {
            // 		const { uuid, name } = fin.me.identity;
            // 		await this.showLayout({ layoutName, uuid, name });
            // 	}
            // }
        }
    };
}
/**
 * Setup window buttons
 * @param w the defaultWindow
 * @returns nothing.
 */
async function setupTitleBar(w) {
    const title = document.querySelector("#title");
    const minBtn = document.querySelector("#minimize-button");
    const maxBtn = document.querySelector("#expand-button");
    const closeBtn = document.querySelector("#close-button");
    if (title && minBtn && maxBtn && closeBtn) {
        title.innerHTML = fin.me.identity.uuid;
        minBtn.addEventListener("click", async () => minimizeWindow(w));
        maxBtn.addEventListener("click", async () => maxOrRestore(w));
        closeBtn.addEventListener("click", async () => closeWindow(w));
    }
}
/**
 * Maximize or restore the window.
 * @param w the defaultWindow
 * @returns Nothing.
 */
async function maxOrRestore(w) {
    if ((await w.getState()) === "normal") {
        return w.maximize();
    }
    return w.restore();
}
/**
 * Close the window.
 * @param w the defaultWindow
 * @returns Nothing.
 */
async function closeWindow(w) {
    return w.close();
}
/**
 * Minimize the window.
 * @param w the defaultWindow
 * @returns Nothing.
 */
async function minimizeWindow(w) {
    return w.minimize();
}

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0FBQyxJQUFJLENBQUM7UUFFdkMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxLQUFLLElBQUksRUFBRSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2hFLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUUsS0FBSyxJQUFJLEVBQUUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM5RCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLEtBQUssSUFBSSxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEUsQ0FBQztBQUNGLENBQUM7QUFFRDs7OztHQUlHO0FBQ0gsS0FBSyxVQUFVLFlBQVksQ0FBQyxDQUFpQjtJQUM1QyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxRQUFRLEVBQUUsQ0FBQztRQUN2QyxPQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsT0FBTyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7QUFDcEIsQ0FBQztBQUVEOzs7O0dBSUc7QUFDSCxLQUFLLFVBQVUsV0FBVyxDQUFDLENBQWlCO0lBQzNDLE9BQU8sQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ2xCLENBQUM7QUFFRDs7OztHQUlHO0FBQ0gsS0FBSyxVQUFVLGNBQWMsQ0FBQyxDQUFpQjtJQUM5QyxPQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUNyQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdXNlLWxheW91dHMtYmFzaWMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdXNlLWxheW91dHMtYmFzaWMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3VzZS1sYXlvdXRzLWJhc2ljL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdXNlLWxheW91dHMtYmFzaWMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly91c2UtbGF5b3V0cy1iYXNpYy8uL2NsaWVudC9zcmMvd2luZG93LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHR5cGUgT3BlbkZpbiBmcm9tIFwiQG9wZW5maW4vY29yZVwiO1xuaW1wb3J0IHR5cGUgeyBMYXlvdXRNYW5hZ2VyLCBMYXlvdXRNYW5hZ2VyQ29uc3RydWN0b3IsIExheW91dE1hbmFnZXJJdGVtIH0gZnJvbSBcIi4vc2hhcGVzXCI7XG5cbmV4cG9ydCBjb25zdCBDT05UQUlORVJfSUQgPSBcImxheW91dC1jb250YWluZXJcIjtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBhc3luYyAoKSA9PiB7XG5cdGNvbnN0IG1lID0gZmluLm1lIGFzIE9wZW5GaW4uV2luZG93O1xuXHRhd2FpdCBzZXR1cFRpdGxlQmFyKG1lKTtcblx0YXdhaXQgZmluLlBsYXRmb3JtLkxheW91dC5pbml0KHsgbGF5b3V0TWFuYWdlck92ZXJyaWRlOiBiYXNpY0xheW91dE1hbmFnZXJPdmVycmlkZSB9KTtcbn0pO1xuXG4vKipcbiAqIEZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIGNsYXNzIGZvciB0aGUgTGF5b3V0LmluaXQgdG8gaW52b2tlLlxuICogQHBhcmFtIEJhc2UgYmFzZSBjb25zdHJ1Y3RvclxuICogQHJldHVybnMgTGF5b3V0TWFuYWdlciBjaGlsZCBjbGFzc1xuICovXG5mdW5jdGlvbiBiYXNpY0xheW91dE1hbmFnZXJPdmVycmlkZShCYXNlOiBMYXlvdXRNYW5hZ2VyQ29uc3RydWN0b3IpOiBMYXlvdXRNYW5hZ2VyQ29uc3RydWN0b3Ige1xuXHQvKipcblx0ICogQGNsYXNzIExheW91dE1hbmFnZXJCYXNpY1xuXHQgKiBUaGlzIGltcGxlbWVudGF0aW9uIGlzIHRoZSBmdW5kYW1lbnRhbFxuXHQgKi9cblx0cmV0dXJuIGNsYXNzIExheW91dE1hbmFnZXJCYXNpYyBleHRlbmRzIEJhc2UgaW1wbGVtZW50cyBMYXlvdXRNYW5hZ2VyIHtcblx0XHRwdWJsaWMgbGF5b3V0TWFwQXJyYXk6IExheW91dE1hbmFnZXJJdGVtW10gPSBbXTtcblxuXHRcdHB1YmxpYyBsYXlvdXRDb250YWluZXI6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNsYXlvdXQtY29udGFpbmVyXCIpIGFzIEhUTUxFbGVtZW50O1xuXHRcdC8qKlxuXHRcdCAqIEBmdW5jdGlvbiBhcHBseUxheW91dFNuYXBzaG90IGNyZWF0ZSBhIGxheW91dCBvbmNlIHBlciBsYXlvdXQgaW4gYSBzbmFwc2hvdC5cblx0XHQgKiBAcGFyYW0gc25hcHNob3QgbGF5b3V0IHNuYXBzaG90XG5cdFx0ICogQHJldHVybnMgbm90aGluZ1xuXHRcdCAqL1xuXG5cdFx0cHVibGljIGFwcGx5TGF5b3V0U25hcHNob3QgPSBhc3luYyAoeyBsYXlvdXRzIH06IE9wZW5GaW4uTGF5b3V0U25hcHNob3QpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0XHRcdGNvbnNvbGUubG9nKFwiQXBwbHlpbmcgTGF5b3V0IFNuYXBzaG90XCIsIEpTT04uc3RyaW5naWZ5KGxheW91dHMsIG51bGwsIDQpKTtcblx0XHRcdHRoaXMubGF5b3V0TWFwQXJyYXkgPSBPYmplY3Qua2V5cyhsYXlvdXRzKS5tYXAoKGspID0+ICh7IGxheW91dE5hbWU6IGssIGxheW91dDogbGF5b3V0c1trXSB9KSk7XG5cdFx0XHRpZiAodGhpcy5sYXlvdXRDb250YWluZXIgIT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRmb3IgKGNvbnN0IGxheW91dEl0ZW0gb2YgdGhpcy5sYXlvdXRNYXBBcnJheSkge1xuXHRcdFx0XHRcdGF3YWl0IGZpbi5QbGF0Zm9ybS5MYXlvdXQuY3JlYXRlKHtcblx0XHRcdFx0XHRcdFx0Y29udGFpbmVyOiB0aGlzLmxheW91dENvbnRhaW5lcixcblx0XHRcdFx0XHRcdFx0bGF5b3V0OiBsYXlvdXRJdGVtLmxheW91dCxcblx0XHRcdFx0XHRcdFx0bGF5b3V0TmFtZTogbGF5b3V0SXRlbS5sYXlvdXROYW1lXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cblx0LyoqXG5cdCAqIFRoZSBzaG93TGF5b3V0IGhvb2sgaXMgY2FsbGVkIHdoZW4gYSBoaWRkZW4gbGF5b3V0IHJlY2VpdmVzIGEgZm9jdXMgZXZlbnQgb3IgYSBub3RpZmljYXRpb24gZXZlbnQuXG5cdCAqIEBwYXJhbSBsYXlvdXRTbmFwc2hvdCBsYXlvdXQgc25hcHNob3QgaXRlbSB0byBzaG93XG5cdCAqIEBwYXJhbSBsYXlvdXRTbmFwc2hvdC5sYXlvdXROYW1lIHRoZSBuYW1lIG9mIHRoZSBsYXlvdXQgdG8gc2hvd1xuXHQgKi9cblx0Ly8gcHVibGljIGFzeW5jIHNob3dMYXlvdXQoeyBsYXlvdXROYW1lIH06IE9wZW5GaW4uTGF5b3V0SWRlbnRpdHkpOiBQcm9taXNlPHZvaWQ+IHtcblx0Ly8gXHRpZiAobGF5b3V0TmFtZSkge1xuXHQvLyBcdFx0Y29uc3QgeyB1dWlkLCBuYW1lIH0gPSBmaW4ubWUuaWRlbnRpdHk7XG5cdC8vIFx0XHRhd2FpdCB0aGlzLnNob3dMYXlvdXQoeyBsYXlvdXROYW1lLCB1dWlkLCBuYW1lIH0pO1xuXHQvLyBcdH1cblx0Ly8gfVxufTtcbn1cblxuLyoqXG4gKiBTZXR1cCB3aW5kb3cgYnV0dG9uc1xuICogQHBhcmFtIHcgdGhlIGRlZmF1bHRXaW5kb3dcbiAqIEByZXR1cm5zIG5vdGhpbmcuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHNldHVwVGl0bGVCYXIodzogT3BlbkZpbi5XaW5kb3cpOiBQcm9taXNlPHZvaWQ+IHtcblx0Y29uc3QgdGl0bGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RpdGxlXCIpO1xuXHRjb25zdCBtaW5CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI21pbmltaXplLWJ1dHRvblwiKTtcblx0Y29uc3QgbWF4QnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNleHBhbmQtYnV0dG9uXCIpO1xuXHRjb25zdCBjbG9zZUJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjY2xvc2UtYnV0dG9uXCIpO1xuXHRpZiAodGl0bGUgJiYgbWluQnRuICYmIG1heEJ0biAmJiBjbG9zZUJ0bikge1xuXHRcdHRpdGxlLmlubmVySFRNTCA9IGZpbi5tZS5pZGVudGl0eS51dWlkO1xuXG5cdFx0bWluQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiBtaW5pbWl6ZVdpbmRvdyh3KSk7XG5cdFx0bWF4QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiBtYXhPclJlc3RvcmUodykpO1xuXHRcdGNsb3NlQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiBjbG9zZVdpbmRvdyh3KSk7XG5cdH1cbn1cblxuLyoqXG4gKiBNYXhpbWl6ZSBvciByZXN0b3JlIHRoZSB3aW5kb3cuXG4gKiBAcGFyYW0gdyB0aGUgZGVmYXVsdFdpbmRvd1xuICogQHJldHVybnMgTm90aGluZy5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gbWF4T3JSZXN0b3JlKHc6IE9wZW5GaW4uV2luZG93KTogUHJvbWlzZTx2b2lkPiB7XG5cdGlmICgoYXdhaXQgdy5nZXRTdGF0ZSgpKSA9PT0gXCJub3JtYWxcIikge1xuXHRcdHJldHVybiB3Lm1heGltaXplKCk7XG5cdH1cblxuXHRyZXR1cm4gdy5yZXN0b3JlKCk7XG59XG5cbi8qKlxuICogQ2xvc2UgdGhlIHdpbmRvdy5cbiAqIEBwYXJhbSB3IHRoZSBkZWZhdWx0V2luZG93XG4gKiBAcmV0dXJucyBOb3RoaW5nLlxuICovXG5hc3luYyBmdW5jdGlvbiBjbG9zZVdpbmRvdyh3OiBPcGVuRmluLldpbmRvdyk6IFByb21pc2U8dm9pZD4ge1xuXHRyZXR1cm4gdy5jbG9zZSgpO1xufVxuXG4vKipcbiAqIE1pbmltaXplIHRoZSB3aW5kb3cuXG4gKiBAcGFyYW0gdyB0aGUgZGVmYXVsdFdpbmRvd1xuICogQHJldHVybnMgTm90aGluZy5cbiAqL1xuYXN5bmMgZnVuY3Rpb24gbWluaW1pemVXaW5kb3codzogT3BlbkZpbi5XaW5kb3cpOiBQcm9taXNlPHZvaWQ+IHtcblx0cmV0dXJuIHcubWluaW1pemUoKTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==