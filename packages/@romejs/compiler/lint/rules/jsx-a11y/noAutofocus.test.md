# `noAutofocus.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/compiler/lint/rules/jsx-a11y/noAutofocus.test.ts --update-snapshots` to update.

## `disallow the autoFocus prop`

### `0`

```

 unknown:1 lint/jsx-a11y/noAutofocus ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ The autoFocus prop should not be used, as it can reduce usability and accessibility for users.

    <input autoFocus />
    ^^^^^^^^^^^^^^^^^^^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `0: formatted`

```
<input autoFocus />;

```

### `1`

```

 unknown:1 lint/jsx-a11y/noAutofocus ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ The autoFocus prop should not be used, as it can reduce usability and accessibility for users.

    <input autoFocus="true" />
    ^^^^^^^^^^^^^^^^^^^^^^^^^^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `1: formatted`

```
<input autoFocus='true' />;

```

### `2`

```

 unknown:1 lint/jsx-a11y/noAutofocus ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ The autoFocus prop should not be used, as it can reduce usability and accessibility for users.

    <input autoFocus="false" />
    ^^^^^^^^^^^^^^^^^^^^^^^^^^^

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

✖ Found 1 problem

```

### `2: formatted`

```
<input autoFocus='false' />;

```

### `3`

```
✔ No known problems!

```

### `3: formatted`

```
<input />;

```

### `4`

```
✔ No known problems!

```

### `4: formatted`

```
<input autoFocus={undefined} />;

```