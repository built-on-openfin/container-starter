import OpenFin, { fin } from "@openfin/core";
import { PlatformContextGroups } from "./shapes";

export const CONTAINER_ID = "layout-container";
const openfinWindow: OpenFin.Window = fin.Window.getCurrentSync();
const openfinApplication: OpenFin.Application = fin.Application.getCurrentSync();

let lastFocusedView: OpenFin.Identity;

openfinApplication
	.on("view-focused", (viewEvent): void => {
		lastFocusedView = viewEvent.viewIdentity;
	})
	.catch((error) => console.error(error));

const changeContextGroup = async (event: Event): Promise<void> => {
	const selectedColorElement: HTMLElement = event.currentTarget as HTMLElement;
	const color: string = selectedColorElement.dataset.title;
	await fin.me.interop.joinContextGroup(color, lastFocusedView);
	document
		.querySelector(`#tab-${lastFocusedView.name}`)
		.classList.remove(
			"red-channel",
			"green-channel",
			"pink-channel",
			"orange-channel",
			"purple-channel",
			"yellow-channel"
		);
	document.querySelector(`#tab-${lastFocusedView.name}`).classList.add(`${color}-channel`);
};

const addContextGroupButtons = async (): Promise<void> => {
	const contextGroups: PlatformContextGroups = await fin.me.interop.getContextGroups();
	const windowFrameStyleSheet: CSSStyleSheet = document.styleSheets[0];
	const buttonsWrapper: HTMLElement = document.querySelector("#buttons-wrapper");
	for (const {
		displayMetadata: { name, color }
	} of contextGroups) {
		windowFrameStyleSheet.insertRule(`.${name}-channel { border-left: 2px solid ${color} !important;}`);
		windowFrameStyleSheet.insertRule(`#${name}-button:after { background-color: ${color}}`);
		const newButton: HTMLElement = document.createElement("div");
		newButton.classList.add("button");
		newButton.classList.add("channel-button");
		newButton.id = `${name}-button`;
		newButton.dataset.title = name;
		newButton.addEventListener("click", changeContextGroup);
		buttonsWrapper.prepend(newButton);
	}
};

const maxOrRestore = async (): Promise<void> => {
	if ((await openfinWindow.getState()) === "normal") {
		return openfinWindow.maximize();
	}

	return openfinWindow.restore();
};

const closeWindow = async (): Promise<void> => openfinWindow.close();

const minimizeWindow = async (): Promise<void> => openfinWindow.minimize();

const setupTitleBar = async (): Promise<void> => {
	const title: HTMLElement = document.querySelector("#title");
	const minBtn: HTMLElement = document.querySelector("#minimize-button");
	const maxBtn: HTMLElement = document.querySelector("#expand-button");
	const closeBtn: HTMLElement = document.querySelector("#close-button");

	title.innerHTML = fin.me.identity.uuid;

	minBtn.addEventListener("click", minimizeWindow);
	maxBtn.addEventListener("click", maxOrRestore);
	closeBtn.addEventListener("click", closeWindow);

	await addContextGroupButtons();
};

window.addEventListener("DOMContentLoaded", async () => {
	await fin.Platform.Layout.init({ containerId: CONTAINER_ID });
	await setupTitleBar();
});
