document.addEventListener("DOMContentLoaded", () => {
	const lepOptions: OpenFin.ExternalProcessRequestType = {
		alias: "of-dotnet-example",
		listener: (result) => {
			console.log("result", result);
			if (result.exitCode === 1) {
				console.log("Successfully exited DotNetCore.exe");
			}
		}
	};
	const lepBtn = document.querySelector("#lep-button");
	if (lepBtn) {
		lepBtn.addEventListener("click", async () => {
			try {
				const data = await fin.System.launchExternalProcess(lepOptions);
				console.log("successfully launched DotNetCore.exe:", data);
			} catch (err) {
				console.error(err);
			}
		});
	}
});
