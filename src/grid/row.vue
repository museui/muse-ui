<template>
  <div class="row" :class="{'no-gutter': !gutter}">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'mu-row',
    props: {
      gutter: {
        type: Boolean,
        default: false
      }
    }
  }
</script>
