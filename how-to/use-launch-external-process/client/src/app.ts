document.addEventListener("DOMContentLoaded", () => {
    /**
     * @key alias: <string> the name supplied to the appAsset in the app.json file.
     * @key target: <string> the relative path to the executable from the appAssets [alias]/[version].
     * @key arguments: <string> a string of acceptable arguments for the given executable.
     * @key listener: <function> listener, @param result: <object> = {topic: string, uuid: string, exitCode: number}.
     * @returns Promise<Object>: object containing the uuid of the launched executable { uuid: string }.
    */

    const lepOptions: OpenFin.ExternalProcessRequestType = {
        alias: "of-dotnet-example",
        listener: (result) => {
            console.log("result", result);
            if (result.exitCode === 1) {
                console.log("Process Explorer");
            }
        }
    };

    fin.System.launchExternalProcess(lepOptions)
        .then((data) => console.log("successfully launched DotNetCore.exe:", data))
        .catch(console.error);
});
