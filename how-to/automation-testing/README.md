## Automation Test Examples

There are some example tests written which use the `@openfin/automation-cli` and `@openfin/automation-helpers`, they are written to execute against the container starter `how-to/create-window, how-to/use-launch-external-process and how-to/use-window-options` e.g.

Example test scenario.

To run the create-window sample application:

open a terminal window
cd container-starter\how-to\create-window
npm start
Application will be running on port 5050
`http://localhost:5050`

Run the tests the following way:
open a terminal window
cd container-starter\how-to\automation\create-window-js
npm install
npm run test-local-mocha
