/* eslint-disable camelcase */
import type OpenFin_2 from "@openfin/core";

fin.Platform.init({}).catch((error) => console.error(error));
const appName = "Test App";
const app = fin.Application.getCurrentSync();
const jumpListConfig: OpenFin_2.JumpListCategory[] = [ // array of JumpList categories
			{
				// has no name and no type so `type` is assumed to be "tasks"
                name: "",
				items: [ // array of JumpList items
					{
						type: "task",
						title: `Launch ${appName}`,
						description: `Runs ${appName} with the default configuration`,
						deepLink: "fins://localhost:5050/common/views/platform/of-info/index.html",
						iconPath: "http://localhost:5050/common/images/icon-blue.png",
						iconIndex: 0
					},
					{ type: "separator" },
					{
						type: "task",
						title: `Restore ${appName}`,
						description: "Restore to last configuration",
						deepLink: "fins://localhost:5050/common/views/platform/of-info/index.html$$use-last-configuration=true",
						iconPath: "http://localhost:5050/common/images/icon-blue.png",
						iconIndex: 0
					}
				]
			},
			{
				name: "Tools",
				items: [ // array of JumpList items
					{
						type: "task",
						title: "Tool A",
						description: "Runs Tool A",
						deepLink: "fins://path.to/tool-a/manifest.json",
						iconPath: "http://localhost:5050/common/images/icon-blue.png",
						iconIndex: 0
					},
					{
						type: "task",
						title: "Tool B",
						description: "Runs Tool B",
						deepLink: "fins://path.to/tool-b/manifest.json",
						iconPath: "http://localhost:5050/common/images/icon-blue.png",
						iconIndex: 0
					}
				]
			}
		];
console.log(`[PROVIDER] In Provider File: ${JSON.stringify(app.getInfo())}`);
app.setJumpList(jumpListConfig)
	.then(() => console.log("JumpList applied"))
	.catch((e) => console.log(`JumpList failed to apply: ${e.toString()}`));

/**
 * Handles the launch event from the Jumplist.
 */
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
async function handleUseLastConfiguration(): Promise<void> {
	// this handler is called when the app is being launched
	await app.on("run-requested", (event) => {
		if(event.userAppConfigArgs["use-last-configuration"]) {
			// your logic here
			console.log("[HANDLER] In Run-Requested Event.");
		}
	});
}
