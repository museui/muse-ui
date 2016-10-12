<template>
  <div class="">
    <mu-paper>
      <mu-appbar title="Muse UI">
        <mu-icon-menu :value="1" slot="left" icon="menu">
          <mu-sub-header>Sub Header</mu-sub-header>
          <mu-menu-item disabled title="menu1"/>
          <mu-menu-item :value="1" title="menu2">
            <mu-badge slot="after" secondary content="12"></mu-badge>
          </mu-menu-item>
          <mu-menu-item title="menu3"/>
          <mu-divider/>
          <mu-menu-item title="menu4"/>
        </mu-icon-menu>
        <mu-icon-button  slot="right" icon="refresh"></mu-icon-button>
      </mu-appbar>
    </mu-paper>
    <mu-content-block>
        <!-- <mu-picker :slots="years" @change="yearChange" :values="[yearValues]" ></mu-picker> -->
        <mu-icon-button tooltip="refresh" tooltipPosition="top-center" icon="refresh"></mu-icon-button>
    </mu-content-block>
    <!-- <mu-dropDown-menu :value="dropDownMenu" @change="change" openImmediately>
      <mu-menu-item  title="Item 1" :value="1"/>
      <mu-menu-item  title="Item 2" :value="2"/>
      <mu-menu-item  title="Item 3" :value="3"/>
      <mu-menu-item  title="Item 4" :value="4"/>
      <mu-menu-item  title="Item 5" :value="5"/>
    </mu-dropDown-menu> -->
    <!-- <mu-drawer :open="open" :docked="false" @close="close">

    </mu-drawer> -->
  </div>
</template>

<script>
export default {
  data () {
    let fullYear = new Date().getFullYear()
    let years = []
    let dateSlots = [[], []]
    for (let i = 0; i <= 20; i++) {
      dateSlots[0].push({
        value: fullYear - i,
        text: (fullYear - i) + '年'
      })
      dateSlots[1].push({
        value: fullYear - i,
        text: (fullYear - i) + '年'
      })
      years.push({
        value: fullYear - i,
        text: (fullYear - i) + '年'
      })
    }
    return {
      years: [{values: years}],
      yearValues: years[10]
    }
  },
  methods: {
    toggle () {
      this.open = !this.open
    },
    close () {
      this.open = false
    },
    yearChange (value, index) {
      this.yearValues = value
    }
  }
}
</script>

<style lang="css">
.demo-paper{
display: inline-block;
}
</style>
