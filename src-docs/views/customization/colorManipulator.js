/**
 * material-ui https://github.com/callemall/material-ui
 * colorMainpulator.js
 */

/**
 * Converts a color from CSS hex format to CSS rgb format.
 *
 *  @param {string} color - Hex color, i.e. #nnn or #nnnnnn
 *  @returns {string} A CSS rgb color string
 */
export function convertHexToRGB (color) {
  if (color.length === 4) {
    let extendedColor = '#'
    for (let i = 1; i < color.length; i++) {
      extendedColor += color.charAt(i) + color.charAt(i)
    }
    color = extendedColor
  }

  const values = {
    r: parseInt(color.substr(1, 2), 16),
    g: parseInt(color.substr(3, 2), 16),
    b: parseInt(color.substr(5, 2), 16)
  }

  return `rgb(${values.r}, ${values.g}, ${values.b})`
}

/**
 * Returns an object with the type and values of a color.
 *
 * Note: Does not support rgb % values.
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {{type: string, values: number[]}} A MUI color object
 */
export function decomposeColor (color) {
  if (color.charAt(0) === '#') {
    return decomposeColor(convertHexToRGB(color))
  }

  const marker = color.indexOf('(')
  const type = color.substring(0, marker)
  let values = color.substring(marker + 1, color.length - 1).split(',')
  values = values.map((value) => parseFloat(value))

  return {type: type, values: values}
}

/**
 * Calculates the contrast ratio between two colors.
 *
 * Formula: http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef
 *
 * @param {string} foreground - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @param {string} background - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} A contrast ratio value in the range 0 - 21 with 2 digit precision.
 */
export function getContrastRatio (foreground, background) {
  const lumA = getLuminance(foreground)
  const lumB = getLuminance(background)
  const contrastRatio = (Math.max(lumA, lumB) + 0.05) / (Math.min(lumA, lumB) + 0.05)

  return Number(contrastRatio.toFixed(2)) // Truncate at two digits
}

/**
 * The relative brightness of any point in a color space,
 * normalized to 0 for darkest black and 1 for lightest white.
 *
 * Formula: https://www.w3.org/WAI/GL/wiki/Relative_luminance
 *
 * @param {string} color - CSS color, i.e. one of: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla()
 * @returns {number} The relative brightness of the color in the range 0 - 1
 */
export function getLuminance (color) {
  color = decomposeColor(color)

  if (color.type.indexOf('rgb') > -1) {
    const rgb = color.values.map((val) => {
      val /= 255 // normalized
      return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4)
    })
    return Number((0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]).toFixed(3)) // Truncate at 3 digits
  } else if (color.type.indexOf('hsl') > -1) {
    return color.values[2] / 100
  }
}
