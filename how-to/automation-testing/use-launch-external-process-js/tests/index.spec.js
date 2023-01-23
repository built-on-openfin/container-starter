/* eslint-disable linebreak-style */
/* eslint-disable prefer-template */
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

describe('Launch External Process', () => {
	it('The runtime is ready', async () => {
		console.log('Tests Started', globalThis.automation.globalVars?.startTime);

		const isReady = await OpenFinSystem.waitForReady(10000);
		expect(isReady).to.equal(true);
	});

	it('The title should be set', async () => {
		const title = await WebDriver.getTitle();
		expect(title).to.equal('OpenFin Template');
	});

	it('The url should be set', async () => {
		providerWindowUrl = await WebDriver.getUrl();
		expect(providerWindowUrl).not.be.undefined;
	});

	it('The runtime version should be set', async () => {
		const fin = await OpenFinProxy.fin();
		const version = await fin.System.getVersion();
		expect(version).to.equal('26.102.71.7');
	});

	it('The identity should be set', async () => {
		const fin = await OpenFinProxy.fin();
		expect(fin.me.identity.name).to.equal('launch-app-asset');
		expect(fin.me.identity.uuid).to.equal('launch-app-asset');
	});

	it('Can get a list of windows', async () => {
		const windows = await WebDriver.getWindows();
		expect(windows.length).to.greaterThan(0);
	});

	it('Can perform a conditional Node Webdriver specific test', async () => {
		if (globalThis.nodeWebDriver) {
			const elem = await globalThis.nodeWebDriver.findElement('xpath', "//*[@id='lep-button']");
			expect(elem).to.exist;
		}
	});

	it('Can perform a conditional Selenium Webdriver specific test', async () => {
		if (globalThis.seleniumWebDriver) {
			const elem = await globalThis.seleniumWebDriver.findElement(By.xpath("//*[@id='lep-button']"));
			expect(elem).to.exist;
		}
	});

	it('Can click button', async () => {
		const elem = await WebDriver.findElementByPath("//*[@id='lep-button']");
		expect(elem).to.exist;

		await WebDriver.actions([
            { type: 'mouseMove', origin: elem },
            { type: 'mouseClick', button: MouseButton.Left },
            { type: 'pause', duration: 2000 }
        ]);
	});

	it('Can exit the runtime', async () => {
		const found = await WebDriver.switchToWindow('url', providerWindowUrl);
		expect(found).to.equal(true);
		const fin = await OpenFinProxy.fin();
		await fin.System.exit();
	});
});
