/* eslint-disable linebreak-style */
import * as Notifications from "@openfin/workspace/notifications";

const NOTIFICATION_SOUND_URL = "http://localhost:5050/assets/notification.mp3";

// Keep track of notifications we are updating
const updatableNotifications: {
	[id: string]: Notifications.TemplateMarkdown & { customData: { count: number } };
} = {};
let updatableNotificationTimer: number | undefined;

let loggingElement: HTMLElement | null;
let codeElement: HTMLTextAreaElement | null;

let connected: boolean = false;
let connectedVersion: string | null;
let statusIntervalId: number | undefined;
let lastConnectionStatus: boolean | undefined;


document.addEventListener("DOMContentLoaded", async () => {
	try {
		await initDom();
        await initializeNotifications();
	} catch (error) {
		console.error(error);
	}
});

/**
 * Initializes the DOM elements and sets up event listeners for UI controls.
 */
async function initDom(): Promise<void> {
	loggingElement = document.querySelector("#logging");
	codeElement = document.querySelector("#code");
	const loggingContainer: HTMLDivElement | null = document.querySelector("#logging-container");
	const codeContainer: HTMLDivElement | null = document.querySelector("#code-container");

	if (!codeElement || !loggingElement || !loggingContainer || !codeContainer) {
		return;
	}

	loggingAddEntry(`Library Version: ${Notifications.VERSION}`);

	const btnLoggingClear = document.querySelector("#btnLoggingClear");
	if (btnLoggingClear) {
		btnLoggingClear.addEventListener("click", () => {
			if (loggingElement) {
				loggingElement.textContent = "";
			}
		});
	}

	const btnCodeCopy = document.querySelector("#btnCodeCopy");
	if (btnCodeCopy) {
		btnCodeCopy.addEventListener("click", async () => {
			if (codeElement) {
				await fin.Clipboard.writeText({ data: codeElement.value });
			}
		});
	}

	const btnCodeNotification = document.querySelector("#btnCodeNotification");
	if (btnCodeNotification) {
		btnCodeNotification.addEventListener("click", async () => {
			try {
				if (codeElement) {
					const notificationOptions: Notifications.NotificationOptions = JSON.parse(codeElement.value);
					notificationOptions.id = randomUUID();
					codeShowExample(notificationOptions);
					await Notifications.create(notificationOptions);
				}
			} catch {}
		});
	}

	codeElement.addEventListener("input", () => {
		if (codeElement) {
			try {
				JSON.parse(codeElement.value);
				codeElement.classList.remove("error");
			} catch {
				codeElement.classList.add("error");
			}
		}
	});

	codeContainer.style.display = "none";

    if (loggingContainer) {
        loggingContainer.style.display = "flex";
    }

	const btnViewLogging = document.querySelector("#btnViewLogging");
	if (btnViewLogging) {
		btnViewLogging.addEventListener("click", () => {
			loggingContainer.style.display = "flex";
			codeContainer.style.display = "none";
		});
	}

	const btnViewCode = document.querySelector("#btnViewCode");
	if (btnViewCode) {
		btnViewCode.addEventListener("click", () => {
			loggingContainer.style.display = "none";
			codeContainer.style.display = "flex";
		});
	}

	const btnNotificationSimple = document.querySelector("#btnNotificationSimple");
	if (btnNotificationSimple) {
		btnNotificationSimple.addEventListener("click", async () => showSimpleNotification());
	}

	const btnNotificationBodyDismiss = document.querySelector("#btnNotificationBodyDismiss");
	if (btnNotificationBodyDismiss) {
		btnNotificationBodyDismiss.addEventListener("click", async () => showSimpleNotificationBodyDismiss());
	}

	const btnNotificationBodyDismissAction = document.querySelector("#btnNotificationBodyDismissAction");
	if (btnNotificationBodyDismissAction) {
		btnNotificationBodyDismissAction.addEventListener("click", async () =>
			showSimpleNotificationBodyDismissAction()
		);
	}

	const btnNotificationActionable = document.querySelector("#btnNotificationActionable");
	if (btnNotificationActionable) {
		btnNotificationActionable.addEventListener("click", async () => showActionableNotification());
	}

	const btnNotificationForm = document.querySelector("#btnNotificationForm");
	if (btnNotificationForm) {
		btnNotificationForm.addEventListener("click", async () => showFormNotification());
	}

	const btnNotificationFormAdvanced = document.querySelector("#btnNotificationFormAdvanced");
	if (btnNotificationFormAdvanced) {
		btnNotificationFormAdvanced.addEventListener("click", async () => showFormAdvancedNotification());
	}

	const btnNotificationUpdatable = document.querySelector("#btnNotificationUpdatable");
	if (btnNotificationUpdatable) {
		btnNotificationUpdatable.addEventListener("click", async () => showUpdatableNotification());
	}

	const btnNotificationCustom = document.querySelector("#btnNotificationCustom");
	if (btnNotificationCustom) {
		btnNotificationCustom.addEventListener("click", async () => showCustomNotification());
	}

	const btnNotificationWithSound = document.querySelector("#btnNotificationWithSound");
	if (btnNotificationWithSound) {
		btnNotificationWithSound.addEventListener("click", async () =>
			showSoundNotification(NOTIFICATION_SOUND_URL)
		);
	}

	const btnNotificationCenterUserSettings = document.querySelector("#btnNotificationCenterUserSettings");
	if (btnNotificationCenterUserSettings) {
		btnNotificationCenterUserSettings.addEventListener("click", async () =>
			getNotificationCenterUserSettings()
		);
	}

	const btnNotificationWithIndicator = document.querySelector("#btnNotificationWithIndicator");
	if (btnNotificationWithIndicator) {
		btnNotificationWithIndicator.addEventListener("click", async () => showIndicatorNotification());
	}

	const btnNotificationWithCustomIndicator = document.querySelector("#btnNotificationWithCustomIndicator");
	if (btnNotificationWithCustomIndicator) {
		btnNotificationWithCustomIndicator.addEventListener("click", async () =>
			showCustomIndicatorNotification()
		);
	}

	const btnNotificationsCenterShow = document.querySelector<HTMLButtonElement>("#btnNotificationsCenterShow");
	if (btnNotificationsCenterShow) {
		btnNotificationsCenterShow.addEventListener("click", async () => {
			try {
				btnNotificationsCenterShow.disabled = true;
				await Notifications.show();
			} catch (err) {
				loggingAddEntry(`${err}`);
			} finally {
				btnNotificationsCenterShow.disabled = false;
			}
		});
	}

	const btnNotificationsCenterHide = document.querySelector<HTMLButtonElement>("#btnNotificationsCenterHide");
	if (btnNotificationsCenterHide) {
		btnNotificationsCenterHide.addEventListener("click", async () => {
			try {
				btnNotificationsCenterHide.disabled = true;
				await Notifications.hide();
			} catch (err) {
				loggingAddEntry(`${err}`);
			} finally {
				btnNotificationsCenterHide.disabled = false;
			}
		});
	}

	const btnNotificationStudioOpen = document.querySelector<HTMLButtonElement>("#btnNotificationStudioOpen");
	if (btnNotificationStudioOpen) {
		btnNotificationStudioOpen.addEventListener("click", async () => {
			try {
				btnNotificationStudioOpen.disabled = true;
				await fin.Application.startFromManifest("https://cdn.openfin.co/studio/notification/app.json");
			} finally {
				btnNotificationStudioOpen.disabled = false;
			}
		});
	}
}

/**
 * Initializes the notifications by registering and logging the count.
 */
async function initializeNotifications(): Promise<void> {
	await Notifications.register();
    await initializeListeners();
	console.log("Number of notifications:", await Notifications.getNotificationsCount());
}


/**
 * Initialize the listeners for the events from the notification center.
 */
async function initializeListeners(): Promise<void> {
	// Listen for new notifications being created
	await Notifications.addEventListener("notification-created", (event) => {
		loggingAddEntry(`Created: ${event.notification.id}`);
	});

	await Notifications.addEventListener("notification-closed", (event) => {
		loggingAddEntry(`Closed: ${event.notification.id}`);

		if (updatableNotifications[event.notification.id]) {
			delete updatableNotifications[event.notification.id];
			if (Object.keys(updatableNotifications).length === 0) {
				window.clearInterval(updatableNotificationTimer);
				updatableNotificationTimer = undefined;
			}
		}
	});

	await Notifications.addEventListener("notification-action", async (event) => {
		if (event?.result?.actionId === "open-web-site") {
			await fin.System.openUrlWithBrowser(event?.result?.url as string);
		} else if (event?.result?.BODY_CLICK === "dismiss_event") {
			if (event.notification?.customData?.action) {
				loggingAddEntry(
					`\tData: ${
						event?.notification?.customData ? JSON.stringify(event.notification.customData) : "None"
					}`
				);
			} else {
				loggingAddEntry("\tNo action");
			}
			loggingAddEntry("\tBody click dismiss");
		} else {
			loggingAddEntry(
				`\tData: ${event?.result?.customData ? JSON.stringify(event.result.customData) : "None"}`
			);
			loggingAddEntry(`\tTask: ${event?.result?.task ?? "None"}`);
			loggingAddEntry(`Action: ${event.notification.id}`);
		}

		console.log(event);
	});

	await Notifications.addEventListener("notification-toast-dismissed", (event) => {
		loggingAddEntry(`Toast Dismissed: ${event.notification.id}`);
	});

	await Notifications.addEventListener("notification-form-submitted", (event) => {
		loggingAddEntry(`\tData: ${event?.form ? JSON.stringify(event.form) : "None"}`);
		loggingAddEntry(`Form: ${event.notification.id}`);
		console.log(event);
	});

	await Notifications.addEventListener("notifications-count-changed", (event) => {
		showNotificationCount(event.count);
	});

	await Notifications.addEventListener("notification-sound-toggled", (event) => {
		loggingAddEntry(`Sound Enabled: ${event.notificationSoundEnabled}`);
	});

	addConnectionChangedEventListener((status) => {
		if (status.connected !== connected) {
			connected = status.connected;
			connectedVersion = status.version;
			updateConnectedState();
		}
	});
}

/**
 * Generates a random UUID string.
 * @returns A randomly generated UUID.
 */
function randomUUID(): string {
	if ("randomUUID" in window.crypto) {
        // If the browser supports window.crypto.randomUUID, use it
		// eslint-disable-next-line no-restricted-syntax
		return window.crypto.randomUUID();
	}
	// Polyfill the window.crypto.randomUUID if we are running in a non secure context that doesn't have it
	// we are still using window.crypto.getRandomValues which is always available
	// https://stackoverflow.com/a/2117523/2800218
	/**
	 * Get random hex value.
	 * @param c The number to base the random value on.
	 * @returns The random value.
	 */
	function getRandomHex(c: string): string {
		// eslint-disable-next-line no-bitwise
		const rnd = window.crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (Number(c) / 4));
		return (
			// eslint-disable-next-line no-bitwise
			(Number(c) ^ rnd).toString(16)
		);
	}
	return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, getRandomHex);
}

/**
 * Add a new entry in to the logging window.
 * @param entry The entry to add.
 */
function loggingAddEntry(entry: string): void {
	if (loggingElement) {
		loggingElement.textContent = `${entry}\n\n${loggingElement.textContent}`;
	}
}

/**
 * Update the code example with the notification.
 * @param notificationOptions The options to show in the code example.
 */
function codeShowExample(notificationOptions: NotificationOptions): void {
	if (codeElement) {
		codeElement.value = JSON.stringify(notificationOptions, undefined, "  ");
	}
}

/**
 * Update the connected state on the view.
 */
function updateConnectedState(): void {
	loggingAddEntry(`Is Connected: ${connected}`);
	if (connected) {
		loggingAddEntry(`Connected Version: ${connectedVersion}`);
	}

	const buttons = document.querySelectorAll("button");
	for (const button of buttons) {
		button.disabled = !connected;
	}
}

/**
 * Update the notification count on the view.
 * @param count The new count to display.
 */
function showNotificationCount(count: number): void {
	const btnNotificationsCenterShow = document.querySelector("#btnNotificationsCenterShow");
	if (btnNotificationsCenterShow) {
		btnNotificationsCenterShow.textContent = `Show [${count}]`;
	}
}


/**
 * Display a very basic simple notification.
 */
async function showSimpleNotification(): Promise<void> {
	const notification: Notifications.NotificationOptions = {
		title: "Simple Notification",
		body: "This is a simple notification",
		toast: "transient",
		category: "default",
		template: "markdown",
		id: randomUUID(),
		soundOptions: {
			mode: "silent"
		}
	};

	codeShowExample(notification);
	await Notifications.create(notification);
}

/**
 * Show a notification which can be dismissed by clicking on the body.
 */
async function showSimpleNotificationBodyDismiss(): Promise<void> {
	const notification: Notifications.NotificationOptions = {
		title: "Simple Notification",
		body: "This is a simple notification that be dismissed by clicking the body",
		toast: "transient",
		category: "default",
		template: "markdown",
		id: randomUUID(),
		onSelect: { BODY_CLICK: Notifications.ActionBodyClickType.DISMISS_EVENT }
	};

	codeShowExample(notification);
	await Notifications.create(notification);
}

/**
 * Show a notification which can be dismissed by clicking on the body and then trigger a custom action.
 */
async function showSimpleNotificationBodyDismissAction(): Promise<void> {
	const notification: Notifications.NotificationOptions = {
		title: "Simple Notification",
		body: "This is a simple notification that be dismissed by clicking the body and trigger custom action",
		toast: "transient",
		category: "default",
		template: "markdown",
		id: randomUUID(),
		onSelect: { BODY_CLICK: Notifications.ActionBodyClickType.DISMISS_EVENT },
		customData: {
			action: "custom-action",
			data: {
				message: "Body click custom action"
			}
		}
	};

	codeShowExample(notification);
	await Notifications.create(notification);
}

/**
 * Show a notification which has action buttons, the events returned will
 * be handled the the notification-action listener.
 */
async function showActionableNotification(): Promise<void> {
	const notification: Notifications.NotificationOptions = {
		title: "Actionable Notification",
		body: "This is a notification that has an action",
		toast: "transient",
		category: "default",
		template: "markdown",
		id: randomUUID(),
		buttons: [
			{
				title: "Acknowledged",
				type: "button",
				cta: true,
				onClick: {
					task: "acknowledge-task",
					customData: {
						message: "This is the response data"
					}
				}
			},
			{
				title: "Cancel",
				type: "button"
			}
		]
	};

	codeShowExample(notification);
	await Notifications.create(notification);
}

/**
 * Show a notification which has form fields, the data from the form will
 * be returned to the notification-form-submitted listener.
 */
async function showFormNotification(): Promise<void> {
	const notification: Notifications.NotificationOptions = {
		title: "Form Notification",
		body: "This is a notification that has form data",
		toast: "transient",
		category: "default",
		template: "markdown",
		id: randomUUID(),
		form: [
			{
				key: "amount",
				label: "Amount",
				type: "number",
				widget: {
					type: "Number",
					max: 100,
					min: 1
				},
				validation: {
					min: {
						arg: 1,
						invalidMessage: "Must be at least 1"
					},
					max: {
						arg: 100,
						invalidMessage: "Cannot be more than 100"
					},
					required: {
						arg: true
					}
				}
			}
		],
		buttons: [
			{
				title: "Save",
				type: "button",
				cta: true,
				submit: true
			},
			{
				title: "Cancel",
				type: "button"
			}
		]
	};

	codeShowExample(notification);
	await Notifications.create(notification);
}

/**
 * Show a notification which has form fields, the data from the form will
 * be returned to the notification-form-submitted listener.
 */
async function showFormAdvancedNotification(): Promise<void> {
	const notification: Notifications.NotificationOptions = {
		title: "Form Advanced Notification",
		body: "This is a notification that has form data",
		toast: "transient",
		category: "default",
		template: "markdown",
		id: randomUUID(),
		form: [
			{
				type: "string",
				key: "book",
				label: "Book",
				helperText: "This is used to look up for book",
				widget: {
					type: "Text",
					placeholder: "Book name"
				},
				validation: {
					min: {
						arg: 7,
						invalidMessage: "Must be at least 7 chars long"
					},
					max: {
						arg: 9,
						invalidMessage: "Must be at most 9 chars long"
					},
					required: {
						arg: true
					}
				},
				value: "1234554"
			},
			{
				type: "time",
				key: "what_time",
				label: "Chose time?",
				helperText: "Some time choosing helper text",
				value: {
					hour: 12
				},
				validation: {
					required: {
						arg: true
					}
				},
				widget: {
					type: "Time"
				}
			},
			{
				type: "date",
				key: "date_pickup",
				label: "When to pick up?",
				helperText: "Some date choosing helper text",
				validation: {
					required: {
						arg: true
					}
				},
				widget: {
					type: "Date"
				}
			},
			{
				type: "string",
				key: "book2",
				label: "Book Type",
				helperText: "This is used to look up for book",
				validation: {
					required: {
						arg: true
					}
				},
				widget: {
					type: "Dropdown",
					options: [
						{
							value: "book1",
							label: "Book 1"
						},
						{
							value: "book2",
							label: "Book 2"
						},
						{
							value: "book3",
							label: "Book 3"
						}
					]
				}
			},
			{
				type: "radioGroup",
				key: "radioGroupDemo",
				label: "Chose one",
				helperText: "Some radio choosing helper text",
				value: "option_1",
				validation: {
					required: {
						arg: true
					}
				},
				widget: {
					type: "RadioGroup",
					group: [
						{
							label: "Option 1",
							value: "option_1"
						},
						{
							label: "Option 2",
							value: "option_2"
						},
						{
							label: "Option 3",
							value: "option_3"
						}
					]
				}
			},
			{
				type: "checkboxGroup",
				key: "checkboxGroupDemo",
				label: "Chose Multiple",
				helperText: "Some checkbox choosing helper text",
				value: ["option_1", "option_2"],
				validation: {
					required: {
						arg: true
					}
				},
				widget: {
					type: "CheckboxGroup",
					group: [
						{
							label: "Option 1",
							value: "option_1"
						},
						{
							label: "Option 2",
							value: "option_2"
						},
						{
							label: "Option 3",
							value: "option_3"
						}
					]
				}
			},
			{
				type: "string",
				key: "description",
				label: "Description",
				value: "very long text....",
				helperText: "This is used to look up for book",
				widget: {
					type: "Text",
					multiline: true,
					placeholder: "Write description",
					rows: 5
				}
			},
			{
				type: "number",
				key: "age",
				label: "Age",
				helperText: "This is used to look up for book",
				widget: {
					type: "Number",
					placeholder: "Enter age",
					min: 1,
					max: 8
				},
				validation: {
					min: {
						arg: 0
					},
					max: {
						arg: 9
					},
					required: {
						arg: true
					}
				}
			}
		],
		buttons: [
			{
				title: "Save",
				type: "button",
				cta: true,
				submit: true
			},
			{
				title: "Cancel",
				type: "button"
			}
		]
	};

	codeShowExample(notification);
	await Notifications.create(notification);
}

/**
 * Show a notification that can be updated.
 */
async function showUpdatableNotification(): Promise<void> {
	const id = randomUUID();
	const notification: Notifications.NotificationOptions & { customData: { count: number } } = {
		title: "Updatable Notification",
		body: "This is an updatable notification",
		toast: "transient",
		category: "default",
		template: "markdown",
		customData: {
			count: 0
		},
		id
	};

	if (Object.keys(updatableNotifications).length === 0) {
		updatableNotificationTimer = window.setInterval(async () => {
			for (const notificationId in updatableNotifications) {
				updatableNotifications[notificationId].customData.count++;
				const notificationUpdate: Notifications.UpdatableNotificationOptions = {
					template: "markdown",
					body: `This is an updatable notification ${updatableNotifications[notificationId].customData.count}`,
					id: notificationId
				};

				await Notifications.update(notificationUpdate);
			}
		}, 1000);
	}

	codeShowExample(notification);
	await Notifications.create(notification);

	updatableNotifications[id] = notification;
}

/**
 * Show a notification with custom content.
 */
async function showCustomNotification(): Promise<void> {
	const notification: Notifications.NotificationOptions = {
		title: "Custom Notification",
		toast: "transient",
		category: "default",
		template: "custom",
		id: randomUUID(),
		templateOptions: {
			body: {
				compositions: [
					{
						minTemplateAPIVersion: "1",
						layout: {
							type: "container",
							style: {
								display: "flex",
								flexDirection: "column",
								gap: "10px"
							},
							children: [
								{
									type: "text",
									dataKey: "subTitle",
									style: {
										fontSize: "12px",
										fontWeight: "bold"
									}
								},
								{
									type: "container",
									style: {
										display: "flex",
										flexDirection: "column",
										marginBottom: "10px"
									},
									children: [
										{
											type: "text",
											dataKey: "firstValueTitle",
											style: {
												fontSize: "12px"
											}
										},
										{
											type: "text",
											dataKey: "firstValue",
											style: {
												fontSize: "14px",
												color: "red"
											}
										}
									]
								},
								{
									type: "container",
									style: {
										display: "flex",
										flexDirection: "column",
										marginBottom: "10px"
									},
									children: [
										{
											type: "text",
											dataKey: "secondValueTitle",
											style: {
												fontSize: "12px"
											}
										},
										{
											type: "text",
											dataKey: "secondValue",
											style: {
												fontSize: "14px",
												color: "blue"
											}
										}
									]
								},
								{
									type: "image",
									dataKey: "exampleImageUrl",
									style: {
										height: "100px"
									}
								},
								{
									type: "actionableText",
									dataKey: "actionableUrlTitle",
									tooltipKey: "actionableUrlTooltip",
									onClick: {
										actionId: "open-web-site",
										url: "https://openfin.co"
									}
								},
								{
									type: "container",
									style: {
										display: "grid",
										flexDirection: "row",
										gridTemplateColumns: "1fr 1fr 1fr",
										marginBottom: "10px",
										overflow: "auto"
									},
									children: [
										{
											type: "text",
											dataKey: "c0",
											style: {
												fontSize: "10px",
												marginBottom: "10px",
												padding: "3px",
												whiteSpace: "nowrap",
												fontWeight: "bold",
												backgroundColor: "green"
											}
										},
										{
											type: "text",
											dataKey: "c1",
											style: {
												fontSize: "10px",
												marginBottom: "10px",
												padding: "3px",
												whiteSpace: "nowrap",
												fontWeight: "bold",
												backgroundColor: "yellow"
											}
										},
										{
											type: "text",
											dataKey: "c2",
											style: {
												fontSize: "10px",
												marginBottom: "10px",
												padding: "3px",
												whiteSpace: "nowrap",
												fontWeight: "bold",
												backgroundColor: "blue"
											}
										},
										{
											type: "text",
											dataKey: "d00",
											style: {
												fontSize: "10px",
												padding: "3px",
												whiteSpace: "nowrap"
											}
										},
										{
											type: "text",
											dataKey: "d01",
											style: {
												fontSize: "10px",
												padding: "3px",
												whiteSpace: "nowrap"
											}
										},
										{
											type: "text",
											dataKey: "d02",
											style: {
												fontSize: "10px",
												padding: "3px",
												whiteSpace: "nowrap"
											}
										},
										{
											type: "text",
											dataKey: "d10",
											style: {
												fontSize: "10px",
												padding: "3px",
												whiteSpace: "nowrap"
											}
										},
										{
											type: "text",
											dataKey: "d11",
											style: {
												fontSize: "10px",
												padding: "3px",
												whiteSpace: "nowrap"
											}
										},
										{
											type: "text",
											dataKey: "d12",
											style: {
												fontSize: "10px",
												padding: "3px",
												whiteSpace: "nowrap"
											}
										}
									]
								}
							]
						}
					}
				]
			}
		},
		templateData: {
			subTitle: "Sub Title 🚀",
			firstValueTitle: "First Value",
			firstValue: "100",
			secondValueTitle: "Second Value",
			secondValue: "200",
			c0: "Col 1",
			c1: "Col 2",
			c2: "Col 3",
			d00: "50",
			d01: "150",
			d02: "250",
			d10: "550",
			d11: "650",
			d12: "750",
			exampleImageUrl: "http://localhost:5050/images/example.png",
			actionableUrlTitle: "OpenFin Website",
			actionableUrlTooltip: "http://www.openfin.co"
		}
	};

	codeShowExample(notification);
	await Notifications.create(notification);
}

/**
 * Show a notification and play a sound with it.
 * @param notificationSoundUrl The url of the sounds file to play.
 */
async function showSoundNotification(notificationSoundUrl: string): Promise<void> {
	// we disable the sound if it is enabled at the Notification Center level
	const notification: Notifications.NotificationOptions = {
		title: "Sound Notification",
		body: "This is a notification with sound 🔉",
		toast: "transient",
		category: "default",
		template: "markdown",
		soundOptions: { mode: "silent" },
		id: randomUUID()
	};

	codeShowExample(notification);
	await Notifications.create(notification);
	await playNotification(notificationSoundUrl);
}

/**
 * Get the user settings for the notification center.
 */
async function getNotificationCenterUserSettings(): Promise<void> {
	const status = await Notifications.getUserSettingStatus(Notifications.UserSettings.SOUND_ENABLED);
	loggingAddEntry(`Sound Enabled: ${status}`);
}

/**
 * Display a notification that has an indicator bar on the left.
 */
async function showIndicatorNotification(): Promise<void> {
	const notification: Notifications.NotificationOptions = {
		title: "Indicator Notification",
		toast: "transient",
		indicator: {
			text: "Limit"
		},
		category: "default",
		template: "custom",
		id: randomUUID(),
		templateOptions: {
			body: {
				compositions: [
					{
						minTemplateAPIVersion: "1",
						layout: {
							type: "container",
							style: {
								display: "flex",
								flexDirection: "column",
								gap: "10px"
							},
							children: [
								{
									type: "text",
									dataKey: "content"
								}
							]
						}
					}
				]
			},
			indicator: {
				align: "left",
				color: Notifications.IndicatorColor.RED
			}
		},
		templateData: {
			content: "This is a custom notification with a red indicator showing to the left of the toast"
		}
	};

	codeShowExample(notification);
	await Notifications.create(notification);
}

/**
 * Display a notification that has an custom indicator bar color theme.
 */
async function showCustomIndicatorNotification(): Promise<void> {
	const notification: Notifications.NotificationOptions = {
		title: "Custom Indicator Notification",
		toast: "transient",
		category: "default",
		template: "custom",
		id: randomUUID(),
		templateOptions: {
			body: {
				compositions: [
					{
						minTemplateAPIVersion: "1",
						layout: {
							type: "container",
							style: {
								display: "flex",
								flexDirection: "column",
								gap: "10px"
							},
							children: [
								{
									type: "text",
									dataKey: "content"
								}
							]
						}
					}
				]
			},
			indicator: {
				align: "right"
			}
		},
		indicator: {
			color: "custom-indicator",
			fallback: Notifications.IndicatorColor.RED,
			text: "ALERT!!!"
		},
		templateData: {
			content: "This is a custom notification with custom indicator styling"
		}
	};

	codeShowExample(notification);
	await Notifications.create(notification);
}

/**
 * Play a sound.
 * @param notificationSoundUrl The url of the notification to play.
 */
async function playNotification(notificationSoundUrl: string): Promise<void> {
	const audio = new Audio(notificationSoundUrl);
	await audio.play();
}

/**
 * Add a listener which checks for the connection changed event.
 * @param callback The callback to call when the connection state changes.
 */
function addConnectionChangedEventListener(
	callback: (status: Notifications.provider.ProviderStatus) => void
): void {
	if (statusIntervalId === undefined) {
		statusIntervalId = window.setInterval(async () => {
			const status = await Notifications.provider.getStatus();
			if (status.connected !== lastConnectionStatus) {
				lastConnectionStatus = status.connected;
				callback(status);
			}
		}, 1000);
	}
}
