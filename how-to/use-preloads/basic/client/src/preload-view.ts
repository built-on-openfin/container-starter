if (window !== window.top) {
    console.log("We don't want to load execute when running in an iframe.");   
} else {
    function initViewPreload() {
        console.log("View preload loaded.");
    }
    if(document.readyState === "complete"){
        initViewPreload();
    } else {
        window.addEventListener('load', () => {
            initViewPreload();
        });
    }
}