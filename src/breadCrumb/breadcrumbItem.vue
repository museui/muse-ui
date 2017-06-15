<template>
  <span>
    <a :href="href" v-if="href" :class="linkClass">
      <slot></slot>
    </a>
    <span v-else :class="currentClass">
      <slot></slot>
    </span>
    <span v-if="href" :class="separatorClass">
      {{this.separator}}
    </span>
  </span>
</template>
<script>
const cssPrefix = 'mu-breadcrumb-item'
export default {
  name: 'mu-breadcrumb-item',
  data () {
    return {
      separator: ''
    }
  },
  props: {
    href: {
      type: String,
      default: ''
    }
  },
  computed: {
    separatorClass () {
      return `${cssPrefix}-separator`
    },
    linkClass () {
      return `${cssPrefix}-link`
    },
    currentClass () {
      return `${cssPrefix}-current`
    }
  }
}
</script>
<style lang="less" scoped>
@import "../styles/import.less";
.mu-breadcrumb-item {
  &-link {
    &:hover, &:focus, &:active {
      i {
        color: @primaryColor;
      }
    }
  }

  &-current {
    font-weight: bold;
  }

  &-separator {
    margin: 0 8px;
    color: #d7dde4;
  }
}
</style>
