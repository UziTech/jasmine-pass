[![Actions Status](https://github.com/UziTech/jasmine-pass/workflows/CI/badge.svg)](https://github.com/UziTech/jasmine-pass/actions)

# Jasmine Pass

This will add a function `pass()` which is the opposite of `fail()`

## Install

```sh
npm install --save-dev jasmine-pass
```

## Using

```js
// In your spec helper
require("jasmine-pass")

// In your specs

describe("jasmine.pass", function () {
  it("will pass", function () {
    pass();
  });
});
```
