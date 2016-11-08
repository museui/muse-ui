<template>
  <div class="mu-flexbox" :class="{'mu-flex-col': orient === 'vertical', 'mu-flex-row': orient === 'horizontal'}" :style="styles">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'mu-flexbox',
  props: {
    gutter: {
      type: Number,
      default: 8
    },
    orient: {
      type: String,
      default: 'horizontal'
    },
    justify: String,
    align: String,
    wrap: String
  },
  computed: {
    styles () {
      return {
        'justify-content': this.justify,
        'align-items': this.align,
        'flex-wrap': this.wrap
      }
    }
  }
}
</script>

<style lang="less">
.mu-flexbox{
  width: 100%;
  text-align: left;
  display: flex;
  box-align: center;
  align-items: center;
}
.mu-flexbox .mu-flexbox-item {
  flex: 1;
  min-width: 20px;
  width: 0%;
}
.mu-flexbox-item > .mu-flexbox {
  width: 100%;
}
.mu-flexbox .mu-flexbox-item:first-child{
  margin-left: 0!important;
  margin-top: 0!important;
}
.mu-flex-col {
  box-orient: vertical;
  flex-direction: column;
}

.mu-flex-col > .mu-flexbox-item {
  width: 100%;
}

.mu-flex-row {
  box-direction: row;
  box-orient: horizontal;
  flex-direction: row;
}
</style>
