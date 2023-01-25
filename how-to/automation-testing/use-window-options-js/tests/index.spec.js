/* eslint linebreak-style: ["error", "windows"] */

const {
	MouseButton,
	OpenFinHome,
	OpenFinProxy,
	OpenFinSystem,
	WebDriver,
	WebDriverKeys
} = require('@openfin/automation-helpers');
const { expect } = require('chai');
const { By } = require('selenium-webdriver');

let providerWindowUrl;

describe('Use Window Options', () => {
	it('The runtime is ready', async () => {
		console.log('Tests Started', globalThis.automation.globalVars?.startTime);

		const isReady = await OpenFinSystem.waitForReady(10000);
		expect(isReady).to.equal(true);
	});

	it('The title should be set', async () => {
		const title = await WebDriver.getTitle();
		expect(title).to.equal('Window Options Example');
	});

	it('The url should be set', async () => {
		providerWindowUrl = await WebDriver.getUrl();
		expect(providerWindowUrl).not.be.undefined;
	});

	it('The runtime version is formatted correctly', async () => {
		const fin = await OpenFinProxy.fin();
		const version = await fin.System.getVersion();
		let i;
		let countOfDots;
		countOfDots = 0;
		for (i = 0; i < version.length; i++) {
			if (version[i] === '.') {
				countOfDots++;
			}
		}
		expect(countOfDots).to.equal(3); // xx.xx.xx.xx
	});

	it('The runtime version should be set', async () => {
		const fin = await OpenFinProxy.fin();
		const app = await fin.Application.getCurrent();
		const manifest = await app.getManifest();
		const manifestVersion = manifest.runtime.version;
		const version = await fin.System.getVersion();
		expect(version).to.equal(manifestVersion);
	});

	it('The identity should be set', async () => {
		const fin = await OpenFinProxy.fin();
		expect(fin.me.identity.name).to.equal('use-window-options');
		expect(fin.me.identity.uuid).to.equal('use-window-options');
	});

	it('Can get a list of windows', async () => {
		const windows = await WebDriver.getWindows();
		expect(windows.length).to.greaterThan(0);
	});

	it('Can perform a conditional Node Webdriver specific test', async () => {
		if (globalThis.nodeWebDriver) {
			const elem = await globalThis.nodeWebDriver.findElement('xpath', "//*[@id='optionName']");
			expect(elem).to.exist;
		}
	});

	it('Can perform a conditional Selenium Webdriver specific test', async () => {
		if (globalThis.seleniumWebDriver) {
			const elem = await globalThis.seleniumWebDriver.findElement(By.xpath("//*[@id='optionName']"));
			expect(elem).to.exist;
		}
	});

	it('Can perform an actions test with keys and mouse', async () => {
		const elem = await WebDriver.findElementByPath("//*[@id='optionName']");
		expect(elem).to.exist;

		await WebDriver.actions([
			// Enter some text
			{ type: 'keyPress', key: 'tt' },
			{ type: 'pause', duration: 1000 },
			// Correct mistake
			{ type: 'keyPress', key: WebDriverKeys.Backspace },
			{ type: 'keyPress', key: 'h' },
			{ type: 'keyPress', key: 'i' },
			{ type: 'keyPress', key: 's' },
			{ type: 'pause', duration: 1000 },
			// Move to start of input
			{ type: 'mouseMove', origin: elem, x: 100 },
			{ type: 'mouseDown', button: MouseButton.Left },
			// Drag highlight the content
			{ type: 'mouseMove', origin: elem, x: 0 },
			{ type: 'mouseUp', button: MouseButton.Left },
			{ type: 'pause', duration: 1000 },
			// Delete the content
			{ type: 'keyPress', key: WebDriverKeys.Delete },
			{ type: 'pause', duration: 1000 }
		]);

		const content = await elem.getAttribute('value');
		expect(content).to.equal(null);
	});

	it('Can set/get/remove a property of an element', async () => {
		await OpenFinHome.show(10000);

		const elem = await WebDriver.findElementByPath("//*[@id='optionName']");
		expect(elem).to.exist;

		await elem.setProperty('data-prop', 'foo');
		const prop = await elem.getProperty('data-prop');
		expect(prop).to.equal('foo');
		await elem.removeProperty('data-prop');
		const prop2 = await elem.getProperty('data-prop');
		expect(prop2).to.equal(undefined);
	});

	it('Can set/get/remove an attribute of an element', async () => {
		const elem = await WebDriver.findElementByPath("//*[@id='optionName']");
		expect(elem).to.exist;

		await elem.setAttribute('disabled', 'true');
		const attr = await elem.getAttribute('disabled');
		expect(attr).to.equal('true');
		await elem.removeAttribute('disabled');
		const attr2 = await elem.getAttribute('disabled');
		expect(attr2).to.equal(null);
	});

	it('Can set/get/remove the style of an element', async () => {
		const elem = await WebDriver.findElementByPath("//*[@id='optionName']");
		expect(elem).to.exist;

		const style = await elem.getStyle();
		expect(style.fontSize).to.equal('12px');

		await elem.setStyle({
			fontSize: '50px'
		});

		const style2 = await elem.getStyle();
		expect(style2.fontSize).to.equal('50px');

		await elem.removeStyle(['fontSize']);

		const style3 = await elem.getStyle();
		expect(style3.fontSize).to.equal('12px');
	});

	it('Can exit the runtime', async () => {
		const found = await WebDriver.switchToWindow('url', providerWindowUrl);
		expect(found).to.equal(true);
		const fin = await OpenFinProxy.fin();
		await fin.System.exit();
	});
});
