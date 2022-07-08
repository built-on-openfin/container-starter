import { fin } from '@openfin/core';
import { InteropClientContext, InteropContextHandler } from './shapes';
const setInstrumentContext = () => {
    const tickerInputElement: HTMLInputElement = document.querySelector('#ticker-input');
    const tickerValue: string = tickerInputElement.value;
    if(tickerValue) {
        fin.me.interop.setContext({ type: 'instrument', id: { ticker: tickerValue } });
    }
}

const setCountryContext = () => {
    const isoAlpha3InputElement: HTMLInputElement = document.querySelector('#country-input');
    const isoAlpha3Value: string = isoAlpha3InputElement.value;
    if(isoAlpha3Value) {
        fin.me.interop.setContext({ type: 'country', id: { 'ISO-3': isoAlpha3Value } });
    }
}

const handleInstrumentChange = ({ id }: InteropClientContext) => {
    document.getElementById('ticker').innerText = id.ticker
}
const handleCountryChange = ({ id }: InteropClientContext) => {
    document.getElementById('country').innerText = id['ISO-3']
}

const handleInteropChange: InteropContextHandler = (context: InteropClientContext) => {
    const { type } = context;
    console.log("HANDLING INTEROP CHANGE")
    switch (type) {
        case 'instrument':
            handleInstrumentChange(context);
            break;

        case 'country':
            handleCountryChange(context);
            break;

        default:
            break;
    }
}

fin.me.interop.addContextHandler(handleInteropChange);

window.addEventListener('DOMContentLoaded', () => {
    console.log('DOM CONTENT LOADED')
    const submitTicker: HTMLButtonElement = document.querySelector('#ticker-submit');
    submitTicker.onclick = setInstrumentContext;

    const submitCountry: HTMLButtonElement = document.querySelector('#country-submit');
    submitCountry.onclick = setCountryContext;
});