import type OpenFin from "@openfin/core";

const BASE_URL = "http://localhost:5050";

document.addEventListener("DOMContentLoaded", async () => {
	const container = document.querySelector<HTMLElement>("#layout-container");
	const bootstrapContainer = document.querySelector<HTMLElement>("#layout-bootstrap");
	if (!container || !bootstrapContainer) {
		throw new Error("A required layout container is missing.");
	}

	const layout: OpenFin.LayoutOptions = {
		settings: {
			tabOverflowBehavior: "scroll"
		},
		content: [
			{
				type: "stack",
				content: [
					createView("branded-view", "Explicit icon", `${BASE_URL}/images/branded-tab.svg`),
					createView("no-icon-view", "Hidden icon", "hide"),
					createView("inherited-icon-view", "Inherited icon", "unset")
				]
			}
		]
	};

	await fin.Platform.Layout.init({ container: bootstrapContainer });
	await fin.Platform.Layout.create({
		container,
		layoutName: "custom-tab-header-layout",
		layout,
		renderCustomTabControls: (tabElement, context) => {
			const bookmarkButton = createControl("Bookmark view", "★");
			const detailsButton = createControl("Show view identity", "ⓘ");

			let bookmarked = false;
			/** Toggle the example's local bookmarked state. */
			function onBookmark(): void {
				bookmarked = !bookmarked;
				bookmarkButton.ariaPressed = String(bookmarked);
				showStatus(`${context.viewIdentity.name} is ${bookmarked ? "bookmarked" : "not bookmarked"}.`);
			}
			/** Display the identity supplied by the tab callback context. */
			function onDetails(): void {
				showStatus(`Selected view: ${context.viewIdentity.uuid}/${context.viewIdentity.name}`);
			}

			bookmarkButton.addEventListener("click", onBookmark);
			detailsButton.addEventListener("click", onDetails);

			if (context.faviconElement) {
				context.faviconElement.after(bookmarkButton);
			} else {
				context.titleElement.before(bookmarkButton);
			}

			if (context.closeElement) {
				context.closeElement.before(detailsButton);
			} else {
				context.titleElement.after(detailsButton);
			}

			return function cleanup(): void {
				bookmarkButton.removeEventListener("click", onBookmark);
				detailsButton.removeEventListener("click", onDetails);
				bookmarkButton.remove();
				detailsButton.remove();
			};
		}
	});

	const tabCount = container.querySelectorAll(".lm_tab").length;
	const controlCount = container.querySelectorAll(".lm_tab_custom_control").length;
	showStatus(`Ready: ${tabCount} tabs and ${controlCount} custom controls.`);
	console.info(`Custom tab header example ready with ${tabCount} tabs and ${controlCount} controls.`);
});

/**
 * Create a view component for the example layout.
 * @param name The unique view name.
 * @param title The tab title.
 * @param icon The per-view tab icon setting.
 * @returns A layout component.
 */
function createView(name: string, title: string, icon: OpenFin.ViewTabIcon): OpenFin.LayoutComponent {
	return {
		type: "component",
		componentName: "view",
		title,
		componentState: {
			name,
			url: `${BASE_URL}/html/sample-view.html?name=${encodeURIComponent(title)}`,
			icon
		}
	};
}

/**
 * Create a tab control enrolled in Core tab accessibility.
 * @param label The accessible label and tooltip.
 * @param text The visible control glyph.
 * @returns The control button.
 */
function createControl(label: string, text: string): HTMLButtonElement {
	const button = document.createElement("button");
	button.type = "button";
	button.className = "lm_tab_custom_control custom-tab-control";
	button.ariaLabel = label;
	button.title = label;
	button.textContent = text;
	return button;
}

/**
 * Announce the result of a tab control action.
 * @param message The message to display.
 */
function showStatus(message: string): void {
	const status = document.querySelector<HTMLElement>("#status");
	if (status) {
		status.textContent = message;
	}
}
