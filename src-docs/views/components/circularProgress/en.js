import description from './README_EN.md'

export default {
  description,
  props: {
    mode: 'progress indicator mode, if you set it as `indeterminate`, the value, min, max are all invalid, on the contrary, the `daterminate` mode should use the value to control the progress show',
    value: '`value` of the progress indicator',
    max: 'Max value',
    min: 'Min value',
    size: 'the size of circle',
    strokeWidth: 'the stroke width of circle',
    color: 'the color of circle'
  }
}
