/**
 * Imports
 */

var hslToRgb = require('..')
var test = require('tape')

/**
 * Tests
 */

test('should work', function (t) {
  t.deepEqual(hslToRgb(214, 1, .5), [0, 110, 255])
  t.end()
})
