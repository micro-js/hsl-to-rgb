
# hsl-to-rgb

[![Build status][travis-image]][travis-url]
[![Git tag][git-image]][git-url]
[![NPM version][npm-image]][npm-url]
[![Code style][standard-image]][standard-url]

Convert HSL colors to RGB

## Installation

    $ npm install @f/hsl-to-rgb

## Usage

```js
var hslToRgb = require('@f/hsl-to-rgb')

hslToRgb(214, 1, .50) // [0, 110, 255]
```

## API

### hslToRgb(hue, saturation, lightness)

- `hue` - Hue, expressed as an integer between 0 and 360.
- `saturation` - Saturation, expressed as a floating point between 0 and 1.
- `lightness` - Lightness, expressed as a floating point between 0 and 1.

**Returns:** An array containing `[red, green, blue]` values that correspond to the HSL color you specified.

## License

MIT

[travis-image]: https://img.shields.io/travis/micro-js/hsl-to-rgb.svg?style=flat-square
[travis-url]: https://travis-ci.org/micro-js/hsl-to-rgb
[git-image]: https://img.shields.io/github/tag/micro-js/hsl-to-rgb.svg
[git-url]: https://github.com/micro-js/hsl-to-rgb
[standard-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat
[standard-url]: https://github.com/feross/standard
[npm-image]: https://img.shields.io/npm/v/@f/hsl-to-rgb.svg?style=flat-square
[npm-url]: https://npmjs.org/package/@f/hsl-to-rgb
