/* eslint linebreak-style: ["error", "windows"] */

const { OpenFinProxy,
	OpenFinSystem,
	WebDriver } = require('@openfin/automation-helpers');
const { expect } = require('chai');

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

	it('The runtime version is formatted correctly', async () => {
		const fin = await OpenFinProxy.fin();
		const version = await fin.System.getVersion();
		let i;
		let countOfDots;
		countOfDots = 0;
		for(i = 0; i < version.length; i++) {
			if(version[i] === ".") {
				countOfDots++;
			}
		}
		expect(countOfDots).to.equal(3); // xx.xx.xx.xx
	});

	it('The runtime version should be set', async () => {
		const fin = await OpenFinProxy.fin();
		const app = await fin.Application.getCurrent();
		const manifest = await app.getManifest()
		const manifestVersion = manifest.runtime.version;
		const version = await fin.System.getVersion();
		expect(version).to.equal(manifestVersion);
	});

	it('The identity should be set', async () => {
		const fin = await OpenFinProxy.fin();
		expect(fin.me.identity.name).to.equal('how-to-open-windows');
		expect(fin.me.identity.uuid).to.equal('how-to-open-windows');
	});

	it('Can get a list of windows', async () => {
		const windows = await WebDriver.getWindows();
		expect(windows.length).to.greaterThan(0);
	});

	it('Can exit the runtime', async () => {
		const found = await WebDriver.switchToWindow('url', providerWindowUrl);
		expect(found).to.equal(true);
		const fin = await OpenFinProxy.fin();
		await fin.System.exit();
	});
});
