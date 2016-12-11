<template>
<div class="content-wrapper">
  <markdown-element :text="$t('description')" />
  <code-example :code="exampleSimpleCode" :title="$t('simpleExample')" :description="$t('simpleExampleDesc')">
    <ex-simple/>
  </code-example>
  <code-example :code="exampleErrorCode" :title="$t('errorExample')" :description="$t('errorExampleDesc')">
    <ex-error/>
  </code-example>
  <code-example :code="exampleIconCode" :title="$t('iconExample')">
    <ex-icon/>
  </code-example>
  <code-example :code="exampleDisabledCode" :title="$t('disabledExample')">
    <ex-disabled/>
  </code-example>
  <code-example :code="exampleInputLengthCode" :title="$t('inputLenExample')" :description="$t('inputLenExampleDesc')">
    <ex-input-length/>
  </code-example>
  <api-view :api="apiData" :i18n="$t.bind(this)"/>
</div>
</template>

<script>
import exampleSimple from './exampleSimple'
import exampleSimpleCode from '!raw!./exampleSimple'
import exampleError from './exampleError'
import exampleErrorCode from '!raw!./exampleError'
import exampleIcon from './exampleIcon'
import exampleIconCode from '!raw!./exampleIcon'
import exampleDisabled from './exampleDisabled'
import exampleDisabledCode from '!raw!./exampleDisabled'
import exampleInputLength from './exampleInputLength'
import exampleInputLengthCode from '!raw!./exampleInputLength'
import apiData from './api'
import zh from './zh'
import en from './en'
export default {
  data () {
    return {
      exampleSimpleCode,
      exampleErrorCode,
      exampleIconCode,
      exampleDisabledCode,
      exampleInputLengthCode,
      apiData
    }
  },
  components: {
    'ex-simple': exampleSimple,
    'ex-error': exampleError,
    'ex-icon': exampleIcon,
    'ex-disabled': exampleDisabled,
    'ex-input-length': exampleInputLength
  },
  locales: {
    zh,
    en
  }
}
</script>
