<template>
<div class="mu-auto-complete" :class="{'fullWidth': fullWidth}">
  <text-field @focus="handleFocus" ref="textField" @blur="handleBlur" :value="inputValue" :label="label" :labelFloat="labelFloat" :disabled="disabled" :hintText="hintText" :helpText="helpText" :errorText="errorText" :errorColor="errorColor" :icon="icon" :fullWidth="fullWidth"/>
  <popover v-if="open"></popover>
</div>
</template>

<script>
import popover from '../popover'
import menu from '../menu'
export default {
  props: {
    anchorOrigin: {
      type: Object,
      default () {
        return {
          vertical: 'bottom',
          horizontal: 'left'
        }
      }
    },
    targetOrigin: {
      type: Object,
      default () {
        return {
          vertical: 'top',
          horizontal: 'left'
        }
      }
    },
    dataSource: {
      type: Array,
      required: true,
      default () {
        return []
      }
    },
    dataSourceConfig: {
      type: Object,
      default () {
        return {
          text: 'text',
          value: 'value'
        }
      }
    },
    disableFocusRipple: {
      type: Boolean,
      default: true
    },
    filter: {
      type: [String, Function],
      default: 'caseSensitiveFilter'
    },
    maxSearchResults: {
      type: Number
    },
    openOnFocus: {
      type: Boolean,
      default: false
    },
    label: {
      type: String
    },
    labelFloat: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    hintText: {
      type: String
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
    fullWidth: {
      type: Boolean,
      default: false
    },
    value: {
      type: String
    }
  },
  data () {
    return {
      anchorEl: null,
      focusTextField: true,
      open: false,
      searchText: undefined
    }
  },
  methods: {
    handleFocus () {
    },
    handleBlur () {
    }
  },
  mounted () {
    this.anchorEl = this.$refs.textField.$el
  },
  components: {
    popover,
    menu
  }
}
</script>

<style lang="less">
.mu-auto-complete{
  display: inline-block;
  position: relative;
  width: 256px;
  &.fullWidth {
    width: 100%;
  }
}
</style>
