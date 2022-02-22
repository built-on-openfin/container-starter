if (window !== window.top) {
    console.log("We don't want to load execute when running in an iframe.");   
} else {
    function initWindowPreload() {
        console.log("Window preload loaded.");
    }
    if(document.readyState === "complete"){
        initWindowPreload();
    } else {
        window.addEventListener('load', () => {
            initWindowPreload();
        });
    }
}