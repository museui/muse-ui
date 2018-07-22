<template>
<mu-date-input @change="change" v-model="date" />
</template>
<script>
export default {
  data () {
    return {
      date: ''
    };
  },
  methods: {
    change () {
      console.log('change');
    }
  }
}
</script>
