<template>
<div class="mu-infinite-scroll">
  <circular v-show="loading" :size="24"></circular>
  <span v-show="loading" class="mu-infinite-scroll-text">{{loadingText}}</span>
</div>
</template>

<script>
import circular from '../internal/circular'
export default {
  name: 'mu-infinite-scroll',
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    loadingText: {
      type: String,
      default: '正在加载。。。'
    }
  },
  methods: {
    onscroll () {
      if (this.loading) return
      const scroller = this.$parent.$el
      let h = scroller.scrollHeight - scroller.scrollTop - 5
      let sh = scroller.offsetHeight
      if (h <= sh) {
        this.$emit('load')
      }
    }
  },
  mounted () {
    this.handlerScroll = () => {
      this.onscroll()
    }
    this.$parent.$el.addEventListener('scroll', this.handlerScroll, false)
  },
  beforeDestory () {
    this.$parent.$el.removeEventListener('scroll', this.handlerScroll, false)
  },
  components: {
    circular
  }
}
</script>

<style lang="css">
.mu-infinite-scroll{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 36px;
  line-height: 36px;
  width: 100%;
}
.mu-infinite-scroll-text{
  margin-left: 16px;
  font-size: 16px;
}
</style>
