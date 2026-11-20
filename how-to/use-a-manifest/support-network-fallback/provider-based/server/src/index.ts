/**
 * Starts the two route servers and the control panel.
 * This is the only file that joins the deployment code and the simulator.
 */
import { CONTROL_PORT, ROUTES, routeOrigin } from "../../shared/route-config";
import { createRouteServer } from "./deployment/create-route-server";
import { createControlPanel, launchDetails } from "./simulator/control-panel";
import { wrapWithFaults, type FaultedServer } from "./simulator/fault-layer";
import { createSimulatorState, healthSourcesFor } from "./simulator/state";

const state = createSimulatorState();

const servers: { [id: string]: FaultedServer } = {};
for (const route of Object.values(ROUTES)) {
	const deployment = createRouteServer(route, healthSourcesFor(state, route.id));
	servers[route.id] = wrapWithFaults(route.id, deployment, state);
	servers[route.id].listen(route.host, route.port);
}

const controlPanel = createControlPanel(state, (id) => servers[id].apply());
controlPanel.listen(CONTROL_PORT, "localhost");

console.log(`
Support network fallback (provider-based) - example only, not production code.

  Internal route   ${routeOrigin(ROUTES.internal)}   (stands in for https://${ROUTES.internal.displayHost})
  Public route     ${routeOrigin(ROUTES.public)}   (stands in for https://${ROUTES.public.displayHost}, serves the manifest and gateway)
  Control panel    http://localhost:${CONTROL_PORT}   (test tool only)

Launch (in another terminal):  npm run client
  Manifest   ${launchDetails().manifestUrl}
`);
