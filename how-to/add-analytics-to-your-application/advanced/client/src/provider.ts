import { AppMonitor } from "./monitor";
import { init } from './platform';

window.addEventListener('DOMContentLoaded', async () => {
  console.info("Starting Kibana Log Monitor");
  const appMonitor = new AppMonitor(10000);
  appMonitor.startMonitoring();

  await init();
});