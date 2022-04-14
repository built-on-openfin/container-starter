import { fin } from "openfin-adapter/src/mock";
import { AppMonitor } from "./monitor";
import { init } from './platform';

window.addEventListener('DOMContentLoaded', async () => {
  await init();
  (fin.me as OpenFin.Window).showDeveloperTools()
  console.info("Starting Kibana Log Monitor");
  const appMonitor = new AppMonitor(1000);
  appMonitor.startMonitoring();
});