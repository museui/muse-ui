<template>
<touch-ripple class="mu-tab-link" :center-ripple="false" :class="{'mu-tab-active': show}" @click.native="tabClick()">
  <slot>
    <icon :value="icon"></icon>
    <div class="mu-tab-text">{{title}}</div>
  </slot>
</touch-ripple>
</template>

<script>
import touchRipple from '../internal/touchRipple'
import icon from '../icon'
export default {
  name: 'mu-tab-item',
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      index: -1,
      show: false
    }
  },
  computed: {
    show () {
      return (this.$parent.active === this.index)
    }
  },
  methods: {
    tabClick () {
      this.$emit('tab-click', this.index)
    }
  },
  created () {
    this.$parent.renderData.push({
      title: this.title,
      active: false
    })
  },
  mounted () {
    let children = this.$parent.$children
    for (let i = 0; i < children.length; i++) {
      if (children[i].$el === this.$el) {
        this.index = i
        break
      }
    }
  },
  components: {
    'touch-ripple': touchRipple,
    icon
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-tab-link{
  mini-height: 48px;
  padding-top: 12px;
  padding-bottom: 12px;
  font-size: 14px;
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
  margin-top: 10px;
}
</style>
