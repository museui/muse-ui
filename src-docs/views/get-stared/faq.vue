<template>
<div class="content-wrapper">
  <markdown-element :text="$t('faqDoc')"/>
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
