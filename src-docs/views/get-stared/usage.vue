<template>
<div class="content-wrapper">
  <markdown-element :text="$t('usageDoc')"/>
</div>
</template>

<script>
import zh from './zh'
import en from './en'
export default {
  locales: {
    zh,
    en
  }
}
</script>
