<template>
<mu-tabs :value="activeTab" @change="handleTabChange">
  <mu-tab value="tab1" icon="home"/>
  <mu-tab value="tab2" icon="flight_takeoff"/>
  <mu-tab value="tab3" icon="favorite"/>
</mu-tabs>
</template>

<script>
export default {
  data () {
    return {
      activeTab: 'tab1'
    }
  },
  methods: {
    handleTabChange (val) {
      this.activeTab = val
    }
  }
}
</script>
