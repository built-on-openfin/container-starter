
    async function initApp() {
        let container = document.getElementById("context-container");
        let fin = window["fin"];
        if(fin !== undefined) {
            let viewOptions = await fin.me.getOptions();
            container.innerText = JSON.stringify(viewOptions.customData); 
        }
    }
    if(document.readyState === "complete"){
        initApp();
    } else {
        window.addEventListener('load', () => {
            initApp();
        });
    }
