<template>
<div>
  <mu-text-field hintText="最多不超过10个字符" :errorText="inputErrorText" @textOverflow="handleInputOverflow" :maxLength="10"/><br/>
  <mu-text-field hintText="不允许超过100个字符" :errorText="multiLineInputErrorText" @textOverflow="handleMultiLineOverflow" multiLine :rows="3" :rowsMax="6" :maxLength="100"/><br/>
</div>
</template>

<script>
export default {
  data () {
    return {
      input: '',
      inputErrorText: '',
      multiLineInput: '',
      multiLineInputErrorText: ''
    }
  },
  methods: {
    handleInputOverflow (isOverflow) {
      this.inputErrorText = isOverflow ? '超过啦！！！！' : ''
    },
    handleMultiLineOverflow (isOverflow) {
      this.multiLineInputErrorText = isOverflow ? '超过啦！！！！' : ''
    }
  }
}
</script>
