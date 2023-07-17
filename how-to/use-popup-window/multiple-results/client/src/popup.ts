const me = fin.me as OpenFin.Window;

document.addEventListener("DOMContentLoaded", initDom);

/**
 * Initialize the DOM elements.
 */
async function initDom(): Promise<void> {
	await createGroupButtons();
}

/**
 * Create the group buttons.
 */
async function createGroupButtons(): Promise<void> {
	const { customData: contextGroups } = await me.getOptions();
	for (const group of contextGroups) {
		const groupBtn = document.createElement("button");
		groupBtn.style.background = group.displayMetadata.color;
		groupBtn.style.border = "none";
		groupBtn.style.borderRadius = "50%";
		groupBtn.style.width = "20px";
		groupBtn.style.height = "20px";
		groupBtn.style.marginRight = "1rem";
		console.log(group);
		groupBtn.addEventListener("click", async () => {
			await me.dispatchPopupResult(group);
		});
		document.body.append(groupBtn);
	}
}
