<template>
<div class="mu-range">
  <input type="range" :disabled="disabled" :name="name" :step="step" :min="min" :max="max" v-model="inputValue">
  <div class="mu-range-fill" :class="{'disabled': disabled}" :style="fillStyle"></div>
</div>
</template>

<script>
export default {
  name: 'mu-range',
  props: {
    name: {
      type: String
    },
    value: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 100
    },
    min: {
      type: Number,
      default: 0
    },
    step: {
      type: Number,
      default: 0.1
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      inputValue: this.value
    }
  },
  computed: {
    fillStyle () {
      return {
        width: this.inputValue / this.max * 100 + '%'
      }
    }
  },
  watch: {
    value (val) {
      this.inputValue = val
    },
    inputValue (val) {
      this.$emit('input', val)
      this.$emit('change', val)
    }
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-range {
  width: 100%;
  position: relative;
  overflow: hidden;
  height: 24px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  input[type="range"] {
    position: relative;
    display: block;
    height: 20px;
    width: 100%;
    margin: 0;
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
    background: -webkit-gradient(linear, 50% 0, 50% 100%, color-stop(0, @primary3Color), color-stop(100%, @primary3Color));
    background: linear-gradient(to right, @primary3Color 0, @primary3Color 100%);
    background-position: center;
    background-size: 100% 2px;
    background-repeat: no-repeat;
    outline: 0;
    -ms-background-position-y: 500px;
    &:active,
    &:focus {
      border: 0;
      outline: 0 none;
    }
  }
  // Range thumb mixin
  .range-thumb() {
    -webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    appearance: none;
    border: none;
    outline: 0;
    height: 20px;
    width: 20px;
    position: relative;
    background: @primary1Color;
    border-radius: 20px;
  }
  // ======= Webkit ========
  input[type="range"]::-webkit-slider-thumb {
    .range-thumb();
  }

  input[type="range"]:disabled::-webkit-slider-thumb{
    background-color: #FFF;
    width: 12px;
    height: 12px;
    border: 2px solid @primary3Color;
  }

  // ======= FireFox ========
  input[type="range"]::-moz-range-track {
    width: 100%;
    height: 2px;
    background: @primary3Color;
    border: none;
    outline: 0;
  }
  input[type="range"]::-moz-range-thumb {
    .range-thumb();
  }

  input[type="range"]:disabled::-moz-range-thumb{
    background-color: #FFF;
    width: 12px;
    height: 12px;
    border: 2px solid @primary3Color;
  }

  // ======= IE ========
  input[type="range"]::-ms-track {
    width: 100%;
    height: 2px;
    cursor: pointer;
    background: transparent;
    border-color: transparent;
    color: transparent;
  }
  input[type="range"]::-ms-thumb {
    .range-thumb();
  }

  input[type="range"]:disabled::-ms-thumb{
    background-color: #FFF;
    width: 12px;
    height: 12px;
    border: 2px solid @primary3Color;
  }

  input[type="range"]::-ms-fill-lower {
    background: @primary1Color;
  }
  input[type="range"]::-ms-fill-upper {
    background: @primary3Color;
  }
}

.mu-range-fill{
  position: absolute;
  height: 2px;
  width: 100%;
  z-index: 1;
  background-color: @primary1Color;
  &.disabled {
    background-color: @primary3Color;
  }
}

</style>
