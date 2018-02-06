<template>
<div class="mu-auto-complete" :class="{'fullWidth': fullWidth}">
  <text-field @focus="handleFocus" v-model="searchText" @input="handleInput"
    @keydown.native="handleKeyDown" ref="textField"
    @blur="handleBlur" :value="searchText" :disabled="disabled" :inputClass="inputClass"
    :label="label" :labelFloat="labelFloat" :labelClass="labelClass" :labelFocusClass="labelFocusClass"
    :hintText="hintText" :hintTextClass="hintTextClass" :helpText="helpText" :helpTextClass="helpTextClass"
    :errorText="errorText" :errorColor="errorColor" :icon="icon" :iconClass="iconClass" :fullWidth="fullWidth"
    :underlineShow="underlineShow" :underlineClass="underlineClass" :underlineFocusClass="underlineFocusClass"/>
  <popover :overlay="false" :autoPosition="false" :scroller="scroller" :open="open && list.length > 0"  @close="handleClose" :trigger="anchorEl" :anchorOrigin="anchorOrigin" :targetOrigin="targetOrigin">
    <mu-menu v-if="open" :maxHeight="maxHeight" :style="{'width': (menuWidth && menuWidth > inputWidth ? menuWidth : inputWidth) + 'px'}" :disableAutoFocus="focusTextField"
      @mousedown.native="handleMouseDown" initiallyKeyboardFocused :autoWidth="false" ref="menu" @itemClick="handleItemClick" class="mu-auto-complete-menu">
      <menu-item class="mu-auto-complete-menu-item" v-for="(item, index) in list" :key="'auto_' + index"  @mousedown.native="handleMouseDown" :disableFocusRipple="disableFocusRipple" afterText
      :leftIcon="item.leftIcon" :leftIconColor="item.leftIconColor" :rightIconColor="item.rightIconColor" :rightIcon="item.rightIcon" :value="item.value" :title="item.text"/>
    </mu-menu>
  </popover>
</div>

</template>

<script>
import popover from '../popover'
import textField from '../textField'
import {menu, menuItem} from '../menu'
import * as filters from './filters'
import keycode from 'keycode'
export default {
  name: 'mu-auto-complete',
  props: {
    anchorOrigin: {
      type: Object,
      default () {
        return {
          vertical: 'bottom',
          horizontal: 'left'
        }
      }
    },
    targetOrigin: {
      type: Object,
      default () {
        return {
          vertical: 'top',
          horizontal: 'left'
        }
      }
    },
    scroller: {},
    dataSource: {
      type: Array,
      default () {
        return []
      }
    },
    dataSourceConfig: {
      type: Object,
      default () {
        return {
          text: 'text',
          value: 'value'
        }
      }
    },
    disableFocusRipple: {
      type: Boolean,
      default: true
    },
    filter: {
      type: [String, Function],
      default: 'caseSensitiveFilter'
    },
    maxSearchResults: {
      type: Number
    },
    openOnFocus: {
      type: Boolean,
      default: false
    },
    menuCloseDelay: {
      type: Number,
      default: 300
    },
    label: {
      type: String
    },
    labelFloat: {
      type: Boolean,
      default: false
    },
    labelClass: {
      type: [String, Array, Object]
    },
    labelFocusClass: {
      type: [String, Array, Object]
    },
    disabled: {
      type: Boolean,
      default: false
    },
    hintText: {
      type: String
    },
    hintTextClass: {
      type: [String, Array, Object]
    },
    helpText: {
      type: String
    },
    helpTextClass: {
      type: [String, Array, Object]
    },
    errorText: {
      type: String
    },
    errorColor: {
      type: String
    },
    icon: {
      type: String
    },
    iconClass: {
      type: [String, Array, Object]
    },
    inputClass: {
      type: [String, Array, Object]
    },
    fullWidth: {
      type: Boolean,
      default: false
    },
    menuWidth: {
      type: Number
    },
    maxHeight: {
      type: Number
    },
    underlineShow: {
      type: Boolean,
      default: true
    },
    underlineClass: {
      type: [String, Array, Object]
    },
    underlineFocusClass: {
      type: [String, Array, Object]
    },
    value: {
      type: String
    },
    // 是否开启匹配字高亮模式
    matchHighlight: {
      type: Boolean,
      default: false
    },
    // 自定义高亮颜色, 默认为红色
    matchHighlightColor: {
      type: String,
      default: 'red'
    }
  },
  data () {
    return {
      anchorEl: null,
      focusTextField: true,
      open: false,
      searchText: this.value,
      inputWidth: null
    }
  },
  computed: {
    list () {
      // 判断是否开启高亮模式，来选择不同的过滤器
      const filter = typeof this.filter === 'string' ? (this.matchHighlight ? filters[this.filter + 'Highlight'] : filters[this.filter]) : this.filter
      const {dataSourceConfig, maxSearchResults, searchText} = this
      if (!filter) {
        console.warn('not found filter:' + this.filter)
        return
      }
      const list = []
      this.dataSource.every((item, index) => {
        switch (typeof item) {
          case 'string':
            if (this.matchHighlight) {
              // 目前高亮只支持三种模式，大小写敏感，大小写不敏感，和模糊匹配
              if (this.filter === 'caseSensitiveFilter' || this.filter === 'caseInsensitiveFilter') {
                let pos = filter(searchText || '', item)
                if (pos !== -1) {
                  let pre = item.substr(0, pos)
                  let mid = item.substr(pos, searchText.length)
                  let post = item.substring(pos + searchText.length)
                  list.push({
                    text: pre + `<span style="color:${this.matchHighlightColor}">${mid}</span>` + post,
                    value: item,
                    index: index
                  })
                }
              } else if (this.filter === 'fuzzyFilter') {
                const matchIndexList = filter(searchText, item)
                if (matchIndexList.length === searchText.length) {
                  let pos = 0
                  let ret = ''
                  matchIndexList.forEach((value) => {
                    ret += item.substring(pos, value)
                    ret += `<span style="color:${this.matchHighlightColor}">${item[value]}</span>`
                    pos = value + 1
                  })
                  ret += item.substring(pos)
                  list.push({
                    text: ret,
                    value: ret,
                    index: index
                  })
                }
              } else {
                list.push({
                  text: item,
                  value: item,
                  index: index
                })
              }
            } else {
              if (filter(searchText || '', item)) {
                list.push({
                  text: item,
                  value: item,
                  index: index
                })
              }
            }
            break
          case 'object':
            if (item && typeof item[dataSourceConfig.text] === 'string') {
              const itemText = item[dataSourceConfig.text]
              if (!filter(searchText || '', itemText, item)) break
              const itemValue = item[dataSourceConfig.value]
              list.push({
                ...item,
                text: itemText,
                value: itemValue,
                index: index
              })
            }
        }
        return !(maxSearchResults && maxSearchResults > 0 && list.length === maxSearchResults)
      })
      return list
    }
  },
  methods: {
    handleFocus (event) {
      if (!this.open && this.openOnFocus) {
        this.open = true
      }
      this.focusTextField = true
      this.$emit('focus', event)
    },
    handleBlur (event) {
      if (this.focusTextField && !this.timerTouchTapCloseId) {
        this.close()
      }
      this.$emit('blur', event)
    },
    handleClose (reson) {
      if (!this.focusTextField || reson === 'overflow') {
        this.close()
      }
    },
    handleMouseDown (event) {
      event.preventDefault()
    },
    handleItemClick (child) {
      const {list, dataSource, setSearchText} = this
      const childIndex = this.$refs.menu.$children.indexOf(child)
      const index = list[childIndex].index
      const chosenRequest = dataSource[index]
      const searchText = this.chosenRequestText(chosenRequest)
      this.timerTouchTapCloseId = setTimeout(() => {
        this.timerTouchTapCloseId = null
        setSearchText(searchText)
        this.close()
        this.$emit('select', chosenRequest, index)
        this.$emit('change', searchText)
      }, this.menuCloseDelay)
    },
    chosenRequestText (chosenRequest) {
      if (typeof chosenRequest === 'string') {
        return chosenRequest
      } else {
        return chosenRequest[this.dataSourceConfig.text]
      }
    },
    handleInput () {
      if (!this.notInput) {
        this.open = true
      } else {
        this.notInput = false
      }
    },
    blur () {
      this.$refs.textField.$el.blur()
    },
    focus () {
      this.$refs.textField.focus()
    },
    close () {
      this.open = false
    },
    handleKeyDown (event) {
      this.$emit('keydown', event)
      switch (keycode(event)) {
        case 'enter':
          if (!this.open) return
          const searchText = this.searchText
          this.$emit('change', searchText, -1)
          this.close()
          break
        case 'esc':
          this.close()
          break
        case 'down':
          event.preventDefault()
          this.open = true
          this.focusTextField = false
          break
        default:
          break
      }
    },
    setSearchText (val) {
      this.notInput = true
      this.searchText = val
    },
    setInputWidth () {
      if (!this.$el) return
      this.inputWidth = this.$el.offsetWidth
    }
  },
  mounted () {
    this.anchorEl = this.$refs.textField.$el
    this.setInputWidth()
  },
  updated () {
    this.setInputWidth()
  },
  watch: {
    value (val) {
      if (val !== this.searchText) this.setSearchText(val)
    },
    searchText (val) {
      this.$emit('input', val)
    }
  },
  components: {
    popover,
    'text-field': textField,
    'mu-menu': menu,
    'menu-item': menuItem
  }
}
</script>

<style lang="less">
.mu-auto-complete{
  display: inline-block;
  position: relative;
  width: 256px;
  &.fullWidth {
    width: 100%;
  }
}
.mu-auto-complete-menu-item{
  width: 100%;
  overflow: hidden;
}
</style>
