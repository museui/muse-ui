<template>
<mu-tabs :value="activeTab" @change="handleTabChange">
  <mu-tab value="tab1" icon="phone" title="RECENTS"/>
  <mu-tab value="tab2" icon="favorite" title="FAVORITES"/>
  <mu-tab value="tab3" icon="person_pin" title="NEARBY"/>
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
