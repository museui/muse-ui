<template>
<div>
  <mu-date-picker hintText="只能选择工作日" :shouldDisableDate="disableWeekends"/><br/>
  <mu-date-picker hintText="随机判断哪些日期不可选择" :shouldDisableDate="disableRandomDates"/>
</div>
</template>

<script>
export default {
  methods: {
    disableWeekends (date) {
      return date.getDay() === 0 || date.getDay() === 6
    },
    disableRandomDates () {
      return Math.random() > 0.8
    }
  }
}
</script>

<style lang="css">
</style>
