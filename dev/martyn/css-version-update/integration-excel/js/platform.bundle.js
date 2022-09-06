/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!********************************!*\
  !*** ./client/src/provider.ts ***!
  \********************************/
async function init() {
    console.log("Platform Init");
}
window.addEventListener("DOMContentLoaded", async () => {
    const platform = fin.Platform.getCurrentSync();
    await platform.once("platform-api-ready", async () => init());
});
fin.Platform.init({
    overrideCallback: async (Provider) => {
        class Override extends Provider {
        }
        return new Override();
    }
}).catch(() => { });

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxhdGZvcm0uYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsS0FBSyxVQUFVLElBQUk7SUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUM5QixDQUFDO0FBRUQsTUFBTSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLEtBQUssSUFBSSxFQUFFO0lBQ3RELE1BQU0sUUFBUSxHQUFxQixHQUFHLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ2pFLE1BQU0sUUFBUSxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxLQUFLLElBQUksRUFBRSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFDL0QsQ0FBQyxDQUFDLENBQUM7QUFFSCxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztJQUNqQixnQkFBZ0IsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEVBQUU7UUFDcEMsTUFBTSxRQUFTLFNBQVEsUUFBUTtTQUFHO1FBQ2xDLE9BQU8sSUFBSSxRQUFRLEVBQUUsQ0FBQztJQUN2QixDQUFDO0NBQ0QsQ0FBQyxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRSxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2ludGVncmF0aW9uLWV4Y2VsLy4vY2xpZW50L3NyYy9wcm92aWRlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJhc3luYyBmdW5jdGlvbiBpbml0KCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zb2xlLmxvZyhcIlBsYXRmb3JtIEluaXRcIik7XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBhc3luYyAoKSA9PiB7XG5cdGNvbnN0IHBsYXRmb3JtOiBPcGVuRmluLlBsYXRmb3JtID0gZmluLlBsYXRmb3JtLmdldEN1cnJlbnRTeW5jKCk7XG5cdGF3YWl0IHBsYXRmb3JtLm9uY2UoXCJwbGF0Zm9ybS1hcGktcmVhZHlcIiwgYXN5bmMgKCkgPT4gaW5pdCgpKTtcbn0pO1xuXG5maW4uUGxhdGZvcm0uaW5pdCh7XG5cdG92ZXJyaWRlQ2FsbGJhY2s6IGFzeW5jIChQcm92aWRlcikgPT4ge1xuXHRcdGNsYXNzIE92ZXJyaWRlIGV4dGVuZHMgUHJvdmlkZXIge31cblx0XHRyZXR1cm4gbmV3IE92ZXJyaWRlKCk7XG5cdH1cbn0pLmNhdGNoKCgpID0+IHt9KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==