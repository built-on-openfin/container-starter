## Automation Test Examples

There are some example tests written which use the `@openfin/automation-cli` and `@openfin/automation-helpers`, they are written to execute against the container starter `how-to/create-window, how-to/use-launch-external-process and how-to/use-window-options` e.g.

To run the tests against a local version of the example serving its manifest on `http://localhost:5050` you can run:

```shell
cd create-window-js
npm install
npm run test-local-mocha
```