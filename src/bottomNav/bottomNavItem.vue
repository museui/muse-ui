<template>
  <abstract-button class="mu-buttom-item" :class="{'mu-bottom-item-active': show}" :center-ripple="false" wrapperClass="mu-buttom-item-wrapper" @click.native="handlerClick">
    <icon :value="icon" class="mu-bottom-item-icon"></icon>
    <span class="mu-bottom-item-text">{{title}}</span>
  </abstract-button>
</template>

<script>
import abstractButton from '../internal/abstractButton'
import icon from '../icon'
export default {
  name: 'mu-bottom-nav-item',
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
    handlerClick () {
      this.$emit('click', this.index)
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
    'abstract-button': abstractButton,
    icon
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-buttom-item {
  flex: 1;
  min-width: 80px;
  max-width: 168px;
  position: relative;
  height: 100%;
  color: fade(@textColor, 54%);
  padding: 0;
  background: none;
  appearance: none;
  border: none;
  outline: none;
}
.mu-buttom-item-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.mu-bottom-item-active {
  color: @primary1Color;
  .mu-bottom-item-text{
    font-size: 14px;
  }
}

.mu-bottom-item-text{
  font-size: 12px;
  transition: color 0.3s, font-size 0.3s;
}
.mu-bottom-item-icon {
  transition: all 450ms @easeOutFunction 0ms;
}
</style>
