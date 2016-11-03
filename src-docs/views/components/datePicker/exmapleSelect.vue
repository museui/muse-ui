<template>
<div>
  <mu-date-picker v-model="selectDate" hintText="选择时间 v-model同步value"/><br/>
  选择的时间为： {{selectDate}} <br/>
  <mu-date-picker hintText="选择 2016-09-01 到 2016-12-20 " minDate="2016-09-01" maxDate="2016-12-20"/><br/>
  <mu-date-picker autoOk hintText="选择日期后自动确定"/><br/>
  <mu-date-picker disableYearSelection hintText="不可选择年份"/>
</div>
</template>

<script>
export default {
  data () {
    return {
      selectDate: ''
    }
  }
}
</script>

<style lang="css">
</style>
