import { fin } from "@openfin/core";
import { InteropClientContext, InteropContextHandler } from "./shapes";

const setInstrumentContext = async () => {
	const tickerInputElement: HTMLInputElement = document.querySelector("#ticker-input");
	const tickerValue: string = tickerInputElement.value;
	if (tickerValue) {
		await fin.me.interop.setContext({ type: "instrument", id: { ticker: tickerValue } });
	}
};

const setCountryContext = async () => {
	const isoAlpha3InputElement: HTMLInputElement = document.querySelector("#country-input");
	const isoAlpha3Value: string = isoAlpha3InputElement.value;
	if (isoAlpha3Value) {
		await fin.me.interop.setContext({ type: "country", id: { "ISO-3": isoAlpha3Value } });
	}
};

const handleInstrumentChange = ({ id }: InteropClientContext) => {
	document.querySelector("#ticker").textContent = id.ticker;
};
const handleCountryChange = ({ id }: InteropClientContext) => {
	document.querySelector("#country").textContent = id["ISO-3"];
};

const handleInteropChange: InteropContextHandler = (context: InteropClientContext) => {
	const { type } = context;
	switch (type) {
		case "instrument":
			handleInstrumentChange(context);
			break;

		case "country":
			handleCountryChange(context);
			break;

		default:
			break;
	}
};

fin.me.interop.addContextHandler(handleInteropChange).catch((error) => console.error(error));

window.addEventListener("DOMContentLoaded", () => {
	const submitTicker: HTMLButtonElement = document.querySelector("#ticker-submit");
	submitTicker.addEventListener("click", setInstrumentContext);

	const submitCountry: HTMLButtonElement = document.querySelector("#country-submit");
	submitCountry.addEventListener("click", setCountryContext);
});
