# Interact with the OpenFin Excel Adaptor

## How it Works

The excel.ts looks for a running version of Excel and will let you select an active workbook and worksheet. Then the application will monitor changes to the cells in Excel and display all of them. If at any point the application sees one of the known instruments it will broadcast it as an FDC3 instrument.

The secondary fdc3monitor.ts will monitor for the FDC3 instrument messages.

---

## Get Started

Follow the instructions below to get up and running.

### Set up the project

1. Install dependencies. Note that these examples assume you are in the sub-directory for the example.

```bash
npm install
```

2. Build the project.

```bash
npm run build
```

3. Start the test server in a new window.

```bash
npm run start
```

4. Start the Platform application.

```bash
npm run client
```

### What you will see

A window that contains two views, the Excel integration and the FDC monitor.

![Excel Integration](integration-excel.gif)

---

### A note about this example

This is an example of how to use OpenFin APIs to configure OpenFin Container. Its purpose is to provide an example and suggestions. **DO NOT** assume that it contains production-ready code. Please use this as a guide and provide feedback. Thanks!
