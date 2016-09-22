<template>
  <abstract-button
   :wrapperClass="itemClass" :href="href"
    class="mu-item-wrapper" :centerRipple="false">
    <div class="mu-item-media">
      <slot name="media"></slot>
    </div>
    <div class="mu-item-content">
      <div class="mu-item-title-row" v-if="title || afterText">
        <div class="mu-item-title">
            <div class="mu-item-title-text">
                {{title}}
            </div>
        </div>
        <div class="mu-item-after">
            <slot name="after">
                {{afterText}}
            </slot>
        </div>
        <icon value="navigate_next" v-if="link" class="mu-item-link-icon"></icon>
      </div>
      <div class="mu-item-sub-title" v-if="subTitle">
        {{subTitle}}
      </div>
      <div class="mu-item-text" :style="{'height': (20 * describeLine) + 'px', '-webkit-line-clamp': describeLine}" v-if="describeText">
        {{describeText}}
      </div>
      <slot></slot>
    </div>
  </abstract-button>
</template>

<script>
import icon from '../icon'
import abstractButton from '../internal/abstractButton'
export default {
  name: 'mu-list-item',
  props: {
    href: {
      type: String,
      default: 'javascript:;'
    },
    link: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    afterText: {
      type: String,
      default: ''
    },
    subTitle: {
      type: String,
      default: ''
    },
    describeText: {
      type: String,
      default: ''
    },
    describeLine: {
      type: Number,
      default: 2
    }
  },
  components: {
    icon,
    'abstract-button': abstractButton
  },
  data () {
    return {
      hover: false
    }
  },
  computed: {
    itemClass () {
      return ['mu-item', this.link ? 'mu-item-link' : ''].join(' ')
    }
  },
  methods: {
    click () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-item-wrapper {
    display: block;
    color: inherit;
    position: relative;
    outline: none;
    &:active {
        background-color: fade(@textColor, 10%);
    }
}

.mu-item {
  min-height: 48px;
  width: 100%;
  display: flex;
  padding: 8px 16px;
  color: @textColor;
}

.mu-item-link {
  padding-right: 8px;
}

.mu-item-link-icon{
  color: @grey600;
  display: block;
}
.mu-item-media{
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 40px;
  max-height: 40px;
  .flex-shrink(0);
  color: @grey600;
  + .mu-item-content {
    padding-left: 16px;
  }
}

.mu-item-content{
  width: 100%;
  align-self: center;
}

.mu-item-title-row{
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  position: relative;
  width: 100%;
}
.mu-item-title{
  flex: 1;
  display: block;
  font-size: 16px;
  max-width: 100%;
}
.mu-item-after{
  margin-left: auto;
  color: @secondaryTextColor;
  line-height: 24px;
  height: 24px;
  .ellipsis();
  max-width: 40%;
  display: flex;
  align-items: center;
}

.mu-item-text{
  font-size: 14px;
  line-height: 20px;
  height: 40px;
  max-width: 100%;
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  word-break: break-all;
  color: @secondaryTextColor;
}

@media (min-width: 1024px) {
  .mu-item-wrapper {
      &.hover {
          background-color: fade(@textColor, 10%);
      }
  }
}
</style>
