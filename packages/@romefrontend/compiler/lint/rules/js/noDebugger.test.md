# `harness.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romefrontend/compiler/lint/rules/harness.test.ts --update-snapshots` to update.

## `js/noDebugger`

### `0`

```

 lint/js/noDebugger/reject/1/file.ts:1 lint/js/noDebugger  FIXABLE  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ This is an unexpected use of the debugger statement.

    debugger;
    ^^^^^^^^^

  ℹ Recommended fix

  - debugger;

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `0: formatted`

```


```

### `1`

```
✔ No known problems!

```

### `1: formatted`

```
const test = {debugger: 1};
test.debugger;

```
