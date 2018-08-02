# `handlebars-helper-inlineSVG` :bear:

[![npm version](https://badge.fury.io/js/%40justeat%2Ff-handlebars-helper-inlineSVG.svg)](https://badge.fury.io/js/%40justeat%2Ff-handlebars-helper-inlineSVG)
[![Build Status](https://travis-ci.org/justeat/f-handlebars-helper-inlineSVG.svg)](https://travis-ci.org/justeat/f-handlebars-helper-inlineSVG)
[![Coverage Status](https://coveralls.io/repos/github/justeat/f-handlebars-helper-inlineSVG/badge.svg)](https://coveralls.io/github/justeat/f-handlebars-helper-inlineSVG)
[![Dependency Status](https://gemnasium.com/badges/github.com/justeat/f-handlebars-helper-inlineSVG.svg)](https://gemnasium.com/github.com/justeat/f-handlebars-helper-inlineSVG)

Handlebars helper to inline SVGs

------

## Usage

First, add `handlebars-helper-inlineSVG` as a project dependency using Yarn (or NPM).

```bash
yarn add gulp handlebars-helper-inlineSVG
```

Then register this module as a handlebars helper:

```js
import Handlebars from 'handlebars'; // assumes you have handlebars installed as a project dependency
Handlebars.registerHelper('inlineSVG', inlineSVG);
````

Then you can inline SVG files from either your local filepaths or from installed packages.

For example to load in a file called `test.svg` which is in a folder called `img` in your project you would include the following in your handlebars template:

```
{{inlineSVG "img/test.svg"}}
```

## Load SVG from a module

To inline an SVG from a module you have installed, you simply need to prefix the module name to the filepath within that module that the SVG is located in:

```
{{inlineSVG "@justeat/f-icons/src/img/icons/arrows/chevron.svg"}}
```


## Custom Attributes

You can also pass attributes to the root element in your SVG, like so:

```
{{inlineSVG "img/test.svg" class="myClass" width="100" height="100" }}
```

## Tests

JavaScript tests are located in the `test` directory at the root of the project.
