<template>
  <ul class="pagination clearfix">
    <li>
      <abstract-button  class="mu-pagination-wrapper" :class="{'circle': isCircle}":centerRipple="false" :disabled="leftDisabled"
     @click="handleClick"  @hover="handleHover" @hoverExit="handleHoverExit" containerElement="div">
      <icon value="chevron_left"></icon>
      </abstract-button>
    </li>
    <li v-for="index in total">
       <abstract-button  class="mu-pagination-wrapper" :class="{'active': index == current, 'circle': isCircle}" :centerRipple="false"
      @click="handleClick"  @hover="handleHover" @hoverExit="handleHoverExit" containerElement="div">
       <slot name="title">{{index}}</slot>
       </abstract-button>
    </li>
    <li>
      <abstract-button  class="mu-pagination-wrapper" :centerRipple="false" :disabled="rightDisabled"
     @click="handleClick"  @hover="handleHover" @hoverExit="handleHoverExit" containerElement="div" :class="{'circle': isCircle}">
      <icon value="chevron_right"></icon>
      </abstract-button>
    </li>
  </ul>
</template>

<script>
import abstractButton from '../internal/abstractButton'
import icon from '../icon'
export default{
  name: 'mu-pagination',
  props: {
    total: {
      type: Number,
      default: 1
    },
    current: {
      type: Number
    },
    isCircle: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      leftDisabled: false,
      rightDisabled: false
    }
  },
  mounted () {
    this.IconIsDisabled()
  },
  computed: {

  },
  methods: {
    handleClick () {
      this.$emit('click', this)
    },
    handleHover (event) {
      this.$emit('hover', event)
    },
    handleHoverExit (event) {
      this.$emit('hoverExit', event)
    },
    IconIsDisabled () {
      this.leftDisabled = this.current === 1
      this.rightDisabled = this.current === this.total
    }
  },
  components: {
    'abstract-button': abstractButton,
    icon
  },
  watch: {
    current: function (val) {
      this.leftDisabled = val === 1
      this.rightDisabled = val === this.total
    }
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.pagination li{
  font-size: 1.5rem;
  float: left;
  width: 30px;
  height: 30px;
  margin: 0 10px;
  border-radius: 2px;
  text-align: center;
  list-style-type: none;
}

.clearfix:after{
  content: "020";
  display: block;
  height: 0;
  clear: both;
  visibility: hidden;
}
.clearfix{
  /* 触发 hasLayout */
  zoom: 1;
}

.mu-pagination-wrapper {
  font-size: 18px;
  height: 30px;
  width: 30px;
  line-height: 30px;
  transition: all .45s @easeOutFunction;
  color: @textColor;
  position: relative;
  cursor: pointer;
  &.hover {
    background-color: rgba(0, 0, 0, .1);
  }
  &.active {
    color: @white;
    background-color: @primaryColor;
  }
  &.disabled {
    color: @disabledColor;
    cursor: not-allowed;
  }
  &.circle{
    border-radius: 30px;
  }
}
</style>
