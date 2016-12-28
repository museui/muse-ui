<template>
<div class="content-wrapper">
  <markdown-element :text="$t('text')"/>
</div>
</template>

<script>
import contributing from './CONTRIBUTING.md'
import contributingEn from './CONTRIBUTING_en.md'
export default {
  locales: {
    zh: {
      text: contributing
    },
    en: {
      text: contributingEn
    }
  }
}
</script>
