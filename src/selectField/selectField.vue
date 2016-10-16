<template>
<text-field class="mu-select-field" :fullWidth="fullWidth" :helpText="helpText" :icon="icon" :value="value" :disabled="disabled" :errorText="errorText" :errorColor="errorColor" :label="label">
  <dropDown-menu :anchorEl="anchorEl" @open="handlerOpen" @close="handlerClose"  @change="handlerChange" :value="value" :disabled="disabled" :maxHeight="maxHeight" :autoWidth="autoWidth"
    :multiple="multiple" :anchorOrigin="{vertical: 'bottom', horizontal: 'left'}">
    <slot></slot>
  </dropDown-menu>
</text-field>
</template>

<script>
import textField from '../textField'
import dropDownMenu from '../dropDownMenu'
export default {
  name: 'mu-select-field',
  props: {
    label: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    helpText: {
      type: String
    },
    errorText: {
      type: String
    },
    errorColor: {
      type: String
    },
    icon: {
      type: String
    },
    maxHeight: {
      type: Number
    },
    autoWidth: {
      type: Boolean,
      default: false
    },
    fullWidth: {
      type: Boolean,
      default: false
    },
    value: {},
    multiple: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      anchorEl: null
    }
  },
  mounted () {
    this.anchorEl = this.$children[0].$refs.content
  },
  methods: {
    handlerChange (val) {
      this.$emit('change', val)
    },
    handlerOpen () {
      this.$children[0].handlerFocus()
    },
    handlerClose () {
      this.$children[0].handlerBlur()
    }
  },
  components: {
    'text-field': textField,
    'dropDown-menu': dropDownMenu
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-select-field{
  .mu-dropDown-menu{
    display: block;
    width: 100%;
    height: 36px;
  }
  .mu-dropDown-menu-text{
    line-height: 36px;
    height: 36px;
    padding-left: 0px;
    padding-right: 24px;
    word-wrap: break-word;
    overflow: hidden;
  }
  .mu-dropDown-menu-line{
    display: none;
  }
  .mu-dropDown-menu-icon{
    right: 0;
    top: 6px;
  }
}
</style>
