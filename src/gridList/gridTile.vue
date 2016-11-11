<template>
<div :style="style">
  <div class="mu-grid-tile" :class="tileClass">
    <slot></slot>
    <div class="mu-grid-tile-titlebar" :class="titleBarClass">
      <div class="mu-grid-tile-title-container">
        <div class="mu-grid-tile-title">
          <slot name="title">
            {{title}}
          </slot>
        </div>
        <div class="mu-grid-tile-subtitle">
          <slot name="subTitle">
            {{subTitle}}
          </slot>
        </div>
      </div>
      <div class="mu-grid-tile-action">
        <slot name="action"></slot>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'mu-grid-tile',
  props: {
    actionPosition: {
      type: String,
      default: 'right',
      validator (val) {
        return ['left', 'right'].indexOf(val) !== -1
      }
    },
    cols: {
      type: Number,
      default: 1
    },
    rows: {
      type: Number,
      default: 1
    },
    title: {
      type: String
    },
    subTitle: {
      type: String
    },
    titlePosition: {
      type: String,
      default: 'bottom',
      validator (val) {
        return ['top', 'bottom'].indexOf(val) !== -1
      }
    },
    titleBarClass: {
      type: [String, Array, Object]
    }
  },
  computed: {
    tileClass () {
      let classArr = []
      if (this.titlePosition === 'top') classArr.push('top')
      if (this.actionPosition === 'left') classArr.push('action-left')
      if (this.$slots && this.$slots.title && this.$slots.subTitle &&
        this.$slots.title.length > 0 && this.$slots.subTitle.length > 0) {
        classArr.push('multiline')
      }
      return classArr
    },
    style () {
      return {
        width: (this.cols / this.$parent.cols * 100) + '%',
        padding: (this.$parent.padding / 2) + 'px',
        height: (this.$parent.cellHeight * this.rows) + 'px'
      }
    }
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-grid-tile {
  position: relative;
  display: block;
  height: 100%;
  overflow: hidden;
  > img {
    height: 100%;
    transform: translateX(-50%);
    position: relative;
    left: 50%;
  }
}

.mu-grid-tile-titlebar{
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 48px;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;

  .mu-grid-tile.multiline &{
    height: 68px;
  }

  .mu-grid-tile.top &{
    bottom: auto;
    top: 0;
  }

}

.mu-grid-tile-title-container{
  margin-left: 16px;
  margin-right: 0;
  color: @alternateTextColor;
  flex: 1;
  overflow: hidden;
  .mu-grid-tile.action-left &{
    margin-right: 16px;
    margin-left: 0;
  }
}

.mu-grid-tile-action {
  order: 1;
  .mu-grid-tile.action-left & {
    order: -1;
  }
  .mu-icon {
    color: @alternateTextColor;
  }
}

.mu-grid-tile-title {
  font-size: 16px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  word-wrap: break-word;
}

.mu-grid-tile-subtitle {
  font-size: 12px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  word-wrap: break-word;
}
</style>
