<template>
  <div v-if="backShow" class="mu-back-up" :style="propsStyle" @click="moveTop">
    <slot>
      <div class="mu-back-up-default">
        <icon value="keyboard_arrow_up"/>
      </div>
    </slot>
  </div>
</template>
<script>
import {backTop} from './assist.js'
import icon from '../icon'

export default {
  name: 'mu-back-top',
  data () {
    return {
      backShow: false
    }
  },
  components: {
    icon
  },
  props: {
    height: {
      type: Number,
      default: 200
    },
    bottom: {
      type: Number,
      default: 30
    },
    right: {
      type: Number,
      default: 30
    },
    durations: {
      type: Number,
      default: 500
    },
    callBack: {
      type: Function,
      default: () => {
      }
    }
  },
  computed: {
    propsStyle () {
      return {
        right: `${this.right}px`,
        bottom: `${this.bottom}px`
      }
    }
  },
  methods: {
    moveTop () {
      backTop(this.durations, this.callBack)
    },
    scrollListener () {
      this.backShow = document.getElementsByTagName('body')[0].scrollTop >= this.height
    }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollListener, false)
    window.addEventListener('resize', this.scrollListener, false)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll, false)
    window.removeEventListener('resize', this.handleScroll, false)
  }
}
</script>
<style lang="less" scoped>
.mu-back-up {
  position: fixed;
  z-index: 100;
  cursor: pointer;
  display: block;
  border-radius: 4px;

  &-default {
    background-color: rgba(126,87,194,.6);
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0,0,0,.2);
    transition: all .2s ease-in-out;
    display: block;
  }

  i {
    color: #fff;
    font-size: 24px;
    padding: 8px 12px;
  }
}
</style>
