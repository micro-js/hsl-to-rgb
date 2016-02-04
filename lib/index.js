/**
 * Expose hslToRgb
 */

module.exports = hslToRgb

/**
 * hslToRgb
 *
 * Adapted from: http://axonflux.com/handy-rgb-to-hsl-and-rgb-to-hsv-color-model-c
 */

function hslToRgb (h, s, l) {
  // Achromatic
  if (s === 0) return [l, l, l]
  h /= 360

  var q = l < 0.5 ? l * (1 + s) : l + s - l * s
  var p = 2 * l - q

  return [
    Math.round(hueToRgb(p, q, h + 1/3) * 255),
    Math.round(hueToRgb(p, q, h) * 255),
    Math.round(hueToRgb(p, q, h - 1/3) * 255)
  ]
}

/**
 * Helpers
 */

function hueToRgb (p, q, t) {
  if (t < 0) t += 1
  if (t > 1) t -= 1
  if (t < 1/6) return p + (q - p) * 6 * t
  if (t < 1/2) return q
  if (t < 2/3) return p + (q - p) * (2/3 - t) * 6

  return p
}
