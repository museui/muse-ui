<template>
  <transition name="fade">
    <div :class="className" v-if="!closed">
      <span v-if="showIcon" class="mu-alert-icon">
        <slot name="icon">
          <mu-icon :value="defaultIcon[type]" :color="defaultIconColor[type]"/>
        </slot>
      </span>
      <p class="mu-alert-message"><slot></slot></p>
      <p v-if="description" class="mu-alert-description"><slot name="description"></slot></p>
      <span class="mu-alert-close" v-if="closeable" @click="closeAlert">
        <slot name="close">
          <span class="mu-alert-close-default">
            <mu-icon value="close" :size="20" color="#c1c1c1"/>
          </span>
        </slot>
      </span>
    </div>
  </transition>
</template>
<script>
import {oneOf} from './assist.js'

const cssPrefix = 'mu-alert'
export default {
  name: 'mu-alert',
  data () {
    return {
      defaultIcon: {
        success: 'check_circle',
        info: 'information',
        warning: 'warning',
        error: 'error'
      },
      defaultIconColor: {
        success: '#4caf50',
        info: '#2196f3',
        warning: '#ff9800',
        error: '#f44336'
      },
      description: false,
      closed: false
    }
  },
  props: {
    type: {
      type: String,
      default: 'info',
      validator (val) {
        const validArr = ['success', 'info', 'warning', 'error']
        return oneOf(val, validArr)
      }
    },
    closeable: {
      type: Boolean,
      default: false
    },
    showIcon: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    className () {
      return [
        cssPrefix,
        `${cssPrefix}-${this.type}`,
        {
          [`${cssPrefix}-no-icon`]: !this.showIcon,
          [`${cssPrefix}-with-description`]: this.description
        }
      ]
    }
  },
  mounted () {
    this.description = this.$slots.description !== undefined
  },
  methods: {
    closeAlert (e) {
      this.closed = true
      setTimeout(() => {
        this.$emit('close', e)
      }, 600)
    }
  }
}
</script>
<style lang="less" scoped>
/* 关闭过渡样式 */
.fade-enter-active, 
.fade-leave-active {
  transition: opacity .5s
}

.fade-enter, 
.fade-leave-active {
  opacity: 0;
}

.mu-alert {
  position: relative;
  padding: 8px 48px 8px 38px;
  color: rgba(0,0,0,.65);
  line-height: 1.5;
  margin-bottom: 10px;
  font-size: 14px;
  
  p {
    margin: 0px;
  }
  &-success {
    background-color: rgba(76,175,80,.12);
  }

  &-info {
    background-color: rgba(33,150,243,.12);
  }

  &-warning {
    background-color: rgba(255,152,0,.12);
  }

  &-error {
    background-color: rgba(244,67,54,.12);
  }

  &-no-icon {
    padding: 8px 48px 8px 16px;
  }

  &-icon {
    position: absolute;
    left: 10px;
    top: 8px;
    font-size: 16px;
  }


  &-with-description {
    padding: 16px 16px 16px 60px;
  }

  &-message {
    color: rgba(0,0,0,.85);
  }

  &-description {
    font-size: 12px;
    padding-top: 5px;
  }

  &-close {
    position: absolute;
    right: 10px;
    border-radius: 50%;
    top: 5px;
    cursor: pointer;
    &-default {
      display: inline-block;
      height: 20px;
      width: 20px;
      box-sizing: content-box;
      padding: 5px;
      border-radius: 50%;
      &:hover {
        background-color: rgba(0, 0, 0, .1);
        i {
          color: black !important;
        }
      }
    }
  }
}
</style>
