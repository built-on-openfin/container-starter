# How to customize view tab headers

This example uses the experimental Core `renderCustomTabControls` callback to add
interactive controls to view tab headers. It also demonstrates the per-view
`icon` option with an explicit URL, `hide`, and `unset`.

## Requirements

- `@openfin/core` and `@openfin/node-adapter` 45.101.1
- OpenFin Runtime 45.150.101.1
- Layout engine `v2`
- Layout setting `tabOverflowBehavior: "scroll"`

The callback and GL2 support are experimental in this release.

## Run the example

From this directory:

```shell
npm run setup
npm run start
```

In another terminal:

```shell
npm run client
```

Use the example's `npm run start` command rather than a generic static server.
It also serves the layout-engine modules bundled with the installed Runtime,
which `fin.Platform.Layout` loads on demand.

The window opens three tabs, each loading the same page so that only the `icon`
option differs:

- **Explicit icon** supplies a URL and always shows that purple star, ignoring
  the page favicon.
- **Hidden icon** uses `icon: "hide"` and shows nothing, even though the window
  enables favicons.
- **Inherited icon** uses `icon: "unset"` and shows the page's own green
  favicon. Without a page favicon it would fall back to the window's
  `defaultFaviconUrl`, and without that to no icon at all.

Each tab has a bookmark control after its favicon and an info control before its
close button. Click a control, or focus the active tab and use the arrow keys
and Enter/Space, to update the status text above the layout.

## How it works

The custom platform window calls `fin.Platform.Layout.create` and supplies
`renderCustomTabControls`. Core calls the callback after constructing each tab
and provides:

- `tabElement`: the `.lm_tab` element.
- `viewIdentity`: the identity of the view represented by the tab.
- `titleElement`: the title anchor.
- `faviconElement`: the favicon anchor when available.
- `closeElement`: the close anchor when the view can be closed.

The example inserts each button as a direct child of `tabElement` with the
`lm_tab_custom_control` class. This enrolls it in Core's tab-chrome keyboard
navigation, prevents button clicks from activating or closing the tab, and
applies the default custom-control sizing. Dragging still follows normal tab
drag behavior.

The callback returns a cleanup function that removes event listeners and DOM
nodes when Core destroys the tab. Callback functions and custom DOM are not
saved in snapshots; Core invokes the callback again when tabs are recreated.

See the
[CreateLayoutOptions API](https://developer.openfin.co/docs/javascript/45.150.101.1/interfaces/OpenFin.CreateLayoutOptions.html)
and
[CustomTabControlsContext API](https://developer.openfin.co/docs/javascript/45.150.101.1/interfaces/OpenFin.CustomTabControlsContext.html)
for the complete experimental contract.
