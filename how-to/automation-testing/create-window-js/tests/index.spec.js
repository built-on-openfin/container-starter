/* eslint-disable linebreak-style */
/* eslint-disable no-multiple-empty-lines */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
const {
	MouseButton,
	OpenFinHome,
	OpenFinNotifications,
	OpenFinProxy,
	OpenFinSystem,
	WebDriver,
	WebDriverKeys
} = require('@openfin/automation-helpers');
const { NativeDriver, NativeDriverKeys } = require('@openfin/automation-native');
const { expect } = require('chai');
const { By } = require('selenium-webdriver');

let providerWindowUrl;

describe('Create a Window', () => {
	it('The runtime is ready', async () => {
		console.log('Tests Started', globalThis.automation.globalVars?.startTime);

		const isReady = await OpenFinSystem.waitForReady(10000);
		expect(isReady).to.equal(true);
	});

	it('The title should be set', async () => {
		const title = await WebDriver.getTitle();
		expect(title).to.equal('Standard Frame Provider');
	});

	it('The url should be set', async () => {
		providerWindowUrl = await WebDriver.getUrl();
		expect(providerWindowUrl).not.be.undefined;
	});

	it('The runtime version should be set', async () => {
		const fin = await OpenFinProxy.fin();
		const version = await fin.System.getVersion();
		expect(version).to.equal('26.102.70.16');
	});

	it('The identity should be set', async () => {
		const fin = await OpenFinProxy.fin();
		expect(fin.me.identity.name).to.equal('how-to-open-windows');
		expect(fin.me.identity.uuid).to.equal('how-to-open-windows');
	});

	it('Can get a list of windows', async () => {
		const windows = await WebDriver.getWindows();
		expect(windows.length).to.greaterThan(0);
        console.log(windows);
	});




    it('Can exit the runtime', async () => {
		const found = await WebDriver.switchToWindow('url', providerWindowUrl);
		expect(found).to.equal(true);
		const fin = await OpenFinProxy.fin();
		await fin.System.exit();
	});
});
