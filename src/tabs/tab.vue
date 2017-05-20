<template>
<abstract-button class="mu-tab-link" :href="href" :to="to" :tag="tag" :activeClass="activeClass"
  :event="event" :exact="exact" :append="append" :replace="replace" :disabled="disabled"
  :center-ripple="false" :class="{'mu-tab-active': active}" @click="tabClick">
  <slot>
    <icon :value="icon" :class="iconClass"/>
  </slot>
  <div class="mu-tab-text" :class="textClass" v-if="title">{{title}}</div>
</abstract-button>
</template>

<script>
import abstractButton from '../internal/abstractButton'
import routerMixin from '../internal/routerMixin'
import icon from '../icon'
import {isNotNull, convertClass} from '../utils'
export default {
  name: 'mu-tab',
  mixins: [routerMixin],
  props: {
    icon: {
      type: String,
      default: ''
    },
    iconClass: {
      type: [String, Object, Array]
    },
    title: {
      type: String,
      default: ''
    },
    titleClass: {
      type: [String, Object, Array]
    },
    href: {
      type: String
    },
    disabled: {
      type: Boolean
    },
    value: {}
  },
  computed: {
    active () {
      return isNotNull(this.value) && this.$parent.value === this.value
    },
    textClass () {
      const {icon, titleClass} = this
      let classNames = []
      if (icon) classNames.push('has-icon')
      return classNames.concat(convertClass(titleClass))
    }
  },
  methods: {
    tabClick (e) {
      if (this.$parent.handleTabClick) this.$parent.handleTabClick(this.value, this)
      this.$emit('click', e)
    }
  },
  watch: {
    active (val, oldVal) {
      if (val === oldVal) return
      if (val) this.$emit('active')
    }
  },
  components: {
    'abstract-button': abstractButton,
    icon
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-tab-link{
  min-height: 48px;
  padding-top: 12px;
  padding-bottom: 12px;
  font-size: 14px;
  background: none;
  appearance: none;
  text-decoration: none;
  border: none;
  outline: none;
  flex: 1;
  color: inherit;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  line-height: normal;
  align-items: center;
  color: fade(@alternateTextColor, 70%);
  transition: all .45s @easeInOutFunction;
  cursor: pointer;
}
.mu-tab-active{
  color: @alternateTextColor;
}
.mu-tab-text{
  &.has-icon {
    margin-top: 8px;
  }
}
</style>
