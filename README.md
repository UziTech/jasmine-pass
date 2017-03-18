[![Build Status](https://travis-ci.org/UziTech/jasmine-pass.png)](https://travis-ci.org/UziTech/jasmine-pass)
<!-- [![Windows Build Status](https://ci.appveyor.com/api/projects/status/30yaam69yeg2ka8i?svg=true)](https://ci.appveyor.com/project/UziTech/jasmine-pass) -->

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
