if (window !== window.top) {
    console.log("We don't want to load execute when running in an iframe.");   
} else {
    function initPlatformPreload() {
        console.log("Platform preload loaded.");
    }
    if(document.readyState === "complete"){
        initPlatformPreload();
    } else {
        window.addEventListener('load', () => {
            initPlatformPreload();
        });
    }
}