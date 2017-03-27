<template>
<div class="content-wrapper">
  <h2 class="demo-head-title">UI Color Palette</h2>
  <p v-html="$t('color')"></p>
  <div class="demo-colors-wrapper">
    <mu-row>
      <mu-col v-for="color in mainColors" :key="color" width="50" desktop="25" tablet="33" class="demo-color-group">
        <div class="demo-color" :style="getColorInfo(color, '500').style">
          <span class="demo-color-title">{{color}}</span>
          <div class="demo-color-container">
            <span>{{getColorInfo(color, '500').key}}</span>
            <span>{{getColorInfo(color, '500').value}}</span>
          </div>
        </div>
        <div class="demo-color" v-for="palette, index in palettes" :key="index" v-if="hasColor(color, palette)"  :style="getColorInfo(color, palette).style">
          <div class="demo-color-container">
            <span>{{getColorInfo(color, palette).key}}</span>
            <span>{{getColorInfo(color, palette).value}}</span>
          </div>
        </div>
      </mu-col>
    </mu-row>
  </div>
</div>
</template>

<script>
const mainColors = [
  'Red', 'Pink', 'Purple', 'Deep Purple', 'Indigo', 'Blue', 'Light Blue',
  'Cyan', 'Teal', 'Green', 'Light Green', 'Lime', 'Yellow', 'Amber', 'Orange',
  'Deep Orange', 'Brown', 'Blue Grey', 'Grey'
]
const palettes = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', 'A100', 'A200', 'A400', 'A700']
import * as colors from 'muse-ui/utils/colors'
import zh from './zh'
import en from './en'
import {getContrastRatio} from './colorManipulator'
export default {
  data () {
    return {
      mainColors,
      palettes
    }
  },
  methods: {
    hasColor (color, palette) {
      const cssColor = color.replace(' ', '').replace(color.charAt(0), color.charAt(0).toLowerCase())
      const key = cssColor + palette
      const bgColor = colors[key]
      return !!bgColor
    },
    getColorInfo (color, palette) {
      const cssColor = color.replace(' ', '').replace(color.charAt(0), color.charAt(0).toLowerCase())
      const key = cssColor + palette
      const bgColor = colors[key]
      let fgColor = colors.fullBlack
      const contrastRatio = getContrastRatio(bgColor, fgColor)
      if (contrastRatio < 7) fgColor = colors.fullWhite
      return {
        key,
        value: bgColor,
        style: {
          'background-color': bgColor,
          'color': fgColor
        }
      }
    }
  },
  locales: {
    zh,
    en
  }
}
</script>

<style lang="css">
.demo-head-title {
  font-size: 24px;
  font-weight: 400;
  line-height: 32px;
  margin-bottom: 12px;
}
.demo-color-group{
  padding-top: 16px;
  padding-bottom: 16px;
}

.demo-color {
  padding: 15px;
}

.demo-color-container {
  display: flex;
  justify-content: space-between;
}

.demo-color-title{
  display: block;
  margin-bottom: 60px;
}
</style>
