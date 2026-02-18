# Domain Permissions and Clipboard

## How it Works

This example uses the **Clipboard API** to show how **domain settings** override window/view permissions. The manifest sets **window/view permissions to false** for both views in the snapshot. Domain settings define a **default** (Clipboard blocked) and a **match rule** that allows Clipboard only for `*://localhost:5050/html/clipboard-allowed.html*`. In theory the domain match rule overrides the lower-level (view) permission for the allowed URL, so one tab gets clipboard access and the other does not.

**Important:** The HERE Core docs say that when a domain is matched, the matched rule is **deep-merged with the default** to produce the effective settings. If you omit `domainSettings.default`, then "domain-specific rules must be applied not only at the application level, but also at the window and view level" — so the runtime may not override view-level permissions when there is no default. This example therefore includes a **default** (block) so that the match rule can override it for the allowed URL. If the allowed tab still shows denied, the runtime may not be applying domain rules over view-level in this version; the snapshot view permissions remain false for both to demonstrate the intended override behavior.

## Get Started

Follow the instructions below to run the example.

### Set up the project

1. Install dependencies and build. Run from this example's directory:

```shell
npm run setup
```

2. Start the test server in a new terminal:

```shell
npm run start
```

3. Start the Platform application (from this directory):

```shell
npm run client
```

### What you will see

The platform opens with a single window containing **two views** (tabs):

- **Clipboard Allowed** — Loads `clipboard-allowed.html`. This URL matches the domain rule, so clipboard access is **granted** by the rule (overriding the view-level false). You will see:

  - Resolved permission: `Clipboard.readText: granted`, `Clipboard.writeText: granted`
  - Domain rule: matched (this URL is allowed clipboard access)
  - Copy and Paste buttons work

- **Clipboard Blocked** — Loads `clipboard-blocked.html`. This URL does not match the rule, so the **domain default** (block) applies. You will see:
  - Resolved permission: `Clipboard.readText: denied`, `Clipboard.writeText: denied`
  - Domain rule: default (no match — clipboard blocked by domain default)
  - Copy and Paste buttons fail with a permission error

This demonstrates **domain-based permission control** overriding window/view permissions.

## Manifest layout

- **Platform `permissions`**: Declares that the app uses the Clipboard API (`readText`, `writeText`).
- **`domainSettings.default`**: Sets Clipboard to **blocked** for all domains by default (under `api.permissions`). When default is present, the docs say WindowOptions.permissions and ViewOptions.permissions are ignored, so domain settings take precedence.
- **`domainSettings.rules`**: One rule that **allows** Clipboard only for URLs matching `*://localhost:5050/html/clipboard-allowed.html*`. The matched rule is deep-merged with the default; the rule overrides the default for the matching URL.
- **Snapshot `componentState.permissions`**: Both views have Clipboard set to **false** at the view level. The intent is to show that the domain match rule overrides this for the allowed URL.

## Documentation

- [Domain-based permissions](https://resources.here.io/docs/core/develop/security/domain-permissions/) — How `default` and `rules` work; why a default is required for domain rules to override window/view.
- [API security](https://resources.here.io/docs/core/develop/security/api-security/) — How to declare and control secured APIs (including Clipboard) in the manifest.
