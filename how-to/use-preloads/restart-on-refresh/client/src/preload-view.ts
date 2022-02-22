if (window !== window.top) {
    console.log("We don't want to load execute when running in an iframe.");   
} else {
    async function initViewPreload() {
        console.log("View preload loaded.");
        const navigationEntries = performance.getEntriesByType("navigation");
        if (navigationEntries.length > 0 && navigationEntries[0]["type"] === "reload") {
            console.log("Navigation Entries from Performance API Indicate that this page has been reloaded.");
            console.log("This example is a use case that was was asked for. Can I restart and navigate to the orginally loaded url in a view when a user reloads the page?");
            let fin = window["fin"];
            if(fin !== undefined) {
                let viewOptions = await fin.me.getOptions();
                console.log("View Options:", viewOptions);
                if(location.href !== viewOptions.url) {
                    console.log("Current url: " + location.href + " does not match the defined view url: " + viewOptions.url + " navigating to the original url on refresh.");
                    location.href = viewOptions.url;
                } else {
                    console.log("Reload was detected on the originally loaded url. Performing no actions.");
                }
            } else {
                console.error("This is a preload script so should only ever be loaded into an OpenFin container");
            }
        } else {
            console.log("First load of: " + location.href);
        }
    }
    if(document.readyState === "complete"){
        initViewPreload();
    } else {
        window.addEventListener('load', () => {
            initViewPreload();
        });
    }
}