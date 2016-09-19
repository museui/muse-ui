<template>
  <div class="mu-avatar" :style="style">
    <div class="mu-avatar-inner">
      <icon v-if="icon" :value="icon"></icon>
      <img :src="src" v-if="src" />
      <slot></slot>
    </div>
  </div>
</template>

<script>
import icon from '../icon'
import {getColor} from '../utils'
export default {
  name: 'mu-avatar',
  props: {
    backgroundColor: {
      type: String,
      default: ''
    },
    color: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    src: {
      type: String,
      default: ''
    },
    size: {
      type: Number
    }
  },
  computed: {
    style () {
      return {
        width: this.size ? this.size + 'px' : '',
        height: this.size ? this.size + 'px' : '',
        color: getColor(this.color),
        'background-color': getColor(this.backgroundColor)
      }
    }
  },
  components: {
    icon
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-avatar{
  display: inline-block;
  vertical-align: middle;
  height: 40px;
  width: 40px;
  font-size: 20px;
  color: @canvasColor;
  background-color: darken(@canvasColor, 26%);
  text-align: center;
  border-radius: 50%;
  img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
    display: block;
  }
}
.mu-avatar-inner{
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
}
</style>
