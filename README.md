[![Build Status](https://travis-ci.org/UziTech/jasmine-pass.png)](https://travis-ci.org/UziTech/jasmine-pass)
[![Windows Build Status](https://ci.appveyor.com/api/projects/status/wm617q5u0v139ruw?svg=true)](https://ci.appveyor.com/project/UziTech/jasmine-pass)

# Jasmine Pass

[![Greenkeeper badge](https://badges.greenkeeper.io/UziTech/jasmine-pass.svg)](https://greenkeeper.io/)

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
