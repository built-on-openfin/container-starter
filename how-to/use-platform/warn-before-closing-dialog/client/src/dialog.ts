import { fin } from "@openfin/core";

document.addEventListener("DOMContentLoaded", async () => {
	const okay = document.querySelector("#okay");
	const cancel = document.querySelector("#cancel");

	if (okay) {
		okay.addEventListener("click", async () => {
			await handleClose(true);
		});
	}

	if (cancel) {
		cancel.addEventListener("click", async () => {
			await handleClose(false);
		});
	}

	populate();
});

/**
 * Populate the list of views the were prevented.
 * @param views The list of views.
 */
function populatePreventedViews(views: { name: string }[]): void {
	for (const view of views) {
		console.log("add view", view);
		const viewP = document.createElement("p");
		viewP.innerHTML = view.name;
		const v = document.querySelector("#views");
		if (v) {
			v.append(viewP);
		}
	}
}

/**
 * Populate the views.
 */
function populate(): void {
	const params = new URLSearchParams(window.location.search);
	const closeType = params.get("closeType");

	if (closeType === "view") {
		const p = document.createElement("p");
		p.innerHTML = "Are you sure you want to close this view? It may have unsaved changes.";
		const t = document.querySelector("#text");
		if (t) {
			t.append(p);
		}
	}

	if (closeType === "window") {
		const views = JSON.parse(params.get("views") ?? "").views;

		const p1 = document.createElement("p");
		p1.innerHTML = "Are you sure you want to close this window?";
		const t1 = document.querySelector("#text");
		if (t1) {
			t1.append(p1);
		}

		const p2 = document.createElement("p");
		p2.innerHTML = "The following views may have unsaved changes:";
		const t2 = document.querySelector("#text");
		if (t2) {
			t2.append(p2);
		}

		populatePreventedViews(views);
	}
}

/**
 * Handle the close event.
 * @param userDecision The decision the user made.
 */
async function handleClose(userDecision: boolean): Promise<void> {
	try {
		const client = await fin.InterApplicationBus.Channel.connect("userDecisionProvider");
		await client.dispatch("get-user-decision", userDecision);
		window.close();
	} catch (error) {
		console.log(error);
	}
}
