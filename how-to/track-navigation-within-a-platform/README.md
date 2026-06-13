# Track Navigation Within a Platform

## Overview

This example demonstrates how to capture and track all view navigation events within a HERE Core Container platform. It provides everything you need to build your own address bar, navigation history, or URL tracking features -- without depending on HERE to provide these capabilities out of the box.

The project is split into three modules with clear responsibilities:

| File               | Role                                                        |
| ------------------ | ----------------------------------------------------------- |
| `provider.ts`      | Listens to platform events and persists navigation data     |
| `storage.ts`       | Abstracts all persistence (swap this to change the backend) |
| `url-navigator.ts` | A sample UI that consumes the stored data                   |

The **provider** is the most important file if you are looking to implement your own navigation tracking. The url-navigator is simply one example of what you can build on top of the data it captures.

## Architecture

```text
┌─────────────────────────────────────────────────────────────┐
│  Platform Provider (hidden window)                          │
│                                                             │
│  Listens to application-level propagated events:            │
│  • view-url-changed        → records URL visit             │
│  • view-page-title-updated → associates title with URL     │
│  • view-page-favicon-updated → associates favicon with URL │
│  • view-destroyed          → cleans up view tracking       │
│  • window-focused          → tracks last focused window    │
│  • window-closed           → cleans up focus stack         │
│                                                             │
│  Writes to storage: history, active views, focus stack      │
└──────────────────────────────┬──────────────────────────────┘
                               │
                        localStorage writes
                        (triggers "storage" event)
                               │
┌──────────────────────────────▼──────────────────────────────┐
│  URL Navigator (visible window)                             │
│                                                             │
│  Reads from storage (never writes history)                  │
│  Listens to "storage" events to react to changes            │
│  Provides: address bar, autocomplete, history panel,        │
│            "switch to tab", "open in last focused window"    │
└─────────────────────────────────────────────────────────────┘
```

## How the Provider Tracks Navigation

The provider uses **Application-level propagated events** -- a single set of listeners that captures events from all views across all windows in the platform. This is the simplest approach: no per-view setup, no cleanup when views close.

### Key Concept: The View-to-URL Map

When `view-page-title-updated` or `view-page-favicon-updated` fires, the event payload does not include the view's current URL. To associate a title or favicon with the correct history entry, the provider maintains an in-memory map (`viewUrlMap`) of each view's name to its last known URL:

```typescript
const viewUrlMap = new Map<string, string>();
```

This map is updated on every `view-url-changed` event and cleaned up on `view-destroyed`.

### Events Used

#### `view-url-changed`

Fires when any view navigates to a new URL. This includes traditional navigations **and** SPA in-page navigations (pushState/replaceState).

```typescript
app.on('view-url-changed', (event) => {
  viewUrlMap.set(event.viewIdentity.name, event.url);
  recordVisit(event.url); // persist to history
});
```

#### `view-page-title-updated`

Fires when a view's `document.title` changes. Used to enrich history entries with human-readable page titles.

```typescript
app.on('view-page-title-updated', (event) => {
  const url = viewUrlMap.get(event.viewIdentity.name);
  if (url && event.title) {
    updateHistoryTitle(url, event.title);
  }
});
```

#### `view-page-favicon-updated`

Fires when a page's favicon is discovered. Provides an array of favicon URLs (we use the first).

```typescript
app.on('view-page-favicon-updated', (event) => {
  const url = viewUrlMap.get(event.viewIdentity.name);
  if (url && event.favicons?.length > 0) {
    updateHistoryFavicon(url, event.favicons[0]);
  }
});
```

#### `view-destroyed`

Fires when a view is closed. Used to clean up the in-memory view map and persist the updated active views state.

```typescript
app.on('view-destroyed', (event) => {
  viewUrlMap.delete(event.viewIdentity.name);
});
```

#### `window-focused` and `window-closed`

Used to maintain a stack of recently focused windows. This enables "open in last focused window" functionality without querying child windows at runtime.

### Alternative: Per-View Tracking

If you need finer control (e.g. only tracking certain views, or attaching additional metadata), you can override `createView` in your platform init and attach listeners to individual views:

```typescript
await fin.Platform.init({
  overrideCallback: async (PlatformProvider) => {
    class MyProvider extends PlatformProvider {
      async createView(viewOptions, identity) {
        const view = await super.createView(viewOptions, identity);
        view.on('url-changed', (event) => {
          /* ... */
        });
        view.on('destroyed', () => {
          /* remove listener */
        });
        return view;
      }
    }
    return new MyProvider();
  }
});
```

The application-level approach used in this example is simpler and sufficient for most use cases.

## The Storage Module

`storage.ts` centralises all persistence behind a simple API. Both the provider and the navigator import from this single module. The default implementation uses `localStorage`, but you could replace it with IndexedDB, a REST API, a shared worker, or any other backend without modifying the provider or navigator logic.

### Data Stored

| Key                  | Persistence        | Description                                                           |
| -------------------- | ------------------ | --------------------------------------------------------------------- |
| Navigation History   | Survives restarts  | URL, title, favicon, timestamp, visit count (capped at 500 entries)   |
| Active Views         | Survives restarts  | Map of view name → current URL (for "switch to tab" features)         |
| Focused Window Stack | Cleared on startup | Stack of up to 5 recently focused windows (for "open in last window") |

### Cross-Window Communication

The navigator window reacts to provider writes via the browser's native `storage` event, which fires on all same-origin windows when `localStorage` is modified. This means:

- The provider writes data and doesn't need to know about consumers
- Any number of UI windows can reactively consume the same data
- No OpenFin-specific IPC is needed between windows for this purpose

## The URL Navigator UI (Sample Consumer)

The `url-navigator.ts` demonstrates what you can build with the tracked data:

- **Omnibox-style address bar** -- resolves input as a URL or falls back to a Google search
- **Autocomplete suggestions** -- filtered by URL and title, ranked by visit count, with highlighted matches
- **History panel** -- full browsable history with timestamps, visit counts, favicons, and delete controls
- **Switch to tab** -- detects if a URL is already open in an active view and offers to focus it
- **Open in last focused window** -- adds a new view to the most recently focused window rather than creating a new one
- **Dynamic window resizing** -- the window grows/shrinks to fit autocomplete results and the history panel

This is provided as a reference implementation. You can build your own UI, integrate with an existing toolbar, or use the storage data in any way that fits your application.

## Get Started

Follow the instructions below to get up and running.

### Set up the project

1. Install dependencies and do the initial build. Note that these examples assume you are in the sub-directory for the example.

```shell
npm run setup
```

2. Build the project.

```shell
npm run build
```

3. Start the test server in a new window.

```shell
npm run start
```

4. Start the Platform application.

```shell
npm run client
```

### What you will see

1. The url-navigator window with a Chrome-like address bar.
2. Enter a URL (e.g. `bbc.co.uk`) and press Enter to open it in a new platform window.
3. Navigate around the opened site -- the provider captures every URL change, page title, and favicon.
4. Return to the navigator and start typing -- autocomplete suggestions appear from your history.
5. Click "History" to see the full browsing history with visit counts and timestamps.

## Project Structure

```text
client/src/
├── provider.ts       # Platform event tracking (the core logic)
├── storage.ts        # Persistence abstraction (swappable backend)
└── url-navigator.ts  # Sample UI consuming the tracked data

public/html/
├── provider.html     # Hidden platform provider page
└── url-navigator.html # Visible UI page
```

## A note about this example

This is an example of how to use HERE APIs to configure HERE Core Container. Its purpose is to provide an example and suggestions. **DO NOT** assume that it contains production-ready code. Please use this as a guide and provide feedback. Thanks!
