<template>
  <div class="">
    <mu-paper>
      <mu-appbar title="Muse UI">
        <mu-icon-menu desktop :maxHeight="250" :value="1" slot="left" icon="menu">
          <mu-sub-header>Sub Header</mu-sub-header>
          <mu-menu-item title="menu1"/>
          <mu-menu-item title="menu2">
            <mu-badge slot="after" secondary content="12"></mu-badge>
          </mu-menu-item>
          <mu-menu-item title="menu3"/>
          <mu-divider/>
          <mu-menu-item title="menu4"/>
          <mu-menu-item title="menu5"/>
          <mu-menu-item title="menu6"/>
          <mu-menu-item title="menu7"/>
          <mu-menu-item title="menu8"/>
          <mu-menu-item title="menu9"/>
          <mu-menu-item title="menu10"/>
        </mu-icon-menu>
        <mu-icon-button  slot="right" icon="refresh"></mu-icon-button>
      </mu-appbar>
    </mu-paper>
    <mu-content-block>
        <!-- <mu-icon-button tooltip="refresh" tooltipPosition="top-center" icon="refresh"></mu-icon-button>
        <mu-raised-button primary label="test"></mu-raised-button> -->
        <!-- <mu-text-field :rows="4" :rowsMax="8"  icon="info" label="testLabel"
            placeholder="test nennen" labelFloat
            :maxLength="200"
            multiLine fullWidth
            :value="value" @change="handlerChange"></mu-text-field> -->
        <mu-select-field icon="phone" label="测试 label" multiple :value="value" @change="handlerChange">
          <mu-menu-item :value="1" title="menu1"/>
          <mu-menu-item :value="2" title="menu2">
            <mu-badge slot="after" secondary content="12"></mu-badge>
          </mu-menu-item>
          <mu-menu-item :value="3" title="menu3"/>
          <mu-divider/>
          <mu-menu-item :value="4" title="menu4"/>
          <mu-menu-item :value="5" title="menu5"/>
          <mu-menu-item :value="6" title="menu6"/>
          <mu-menu-item :value="7" title="menu7"/>
          <mu-menu-item :value="8" title="menu8"/>
          <mu-menu-item :value="9" title="menu9"/>
          <mu-menu-item :value="10" title="menu10"/>
        </mu-select-field>
        <mu-select-field icon="phone" label="测试 label" multiple :value="value" @change="handlerChange">
          <mu-menu-item :value="1" title="menu1"/>
          <mu-menu-item :value="2" title="menu2">
            <mu-badge slot="after" secondary content="12"></mu-badge>
          </mu-menu-item>
          <mu-menu-item :value="3" title="menu3"/>
          <mu-divider/>
          <mu-menu-item :value="4" title="menu4"/>
          <mu-menu-item :value="5" title="menu5"/>
          <mu-menu-item :value="6" title="menu6"/>
          <mu-menu-item :value="7" title="menu7"/>
          <mu-menu-item :value="8" title="menu8"/>
          <mu-menu-item :value="9" title="menu9"/>
          <mu-menu-item :value="10" title="menu10"/>
        </mu-select-field>
    </mu-content-block>

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
      yearValues: years[10],
      value: [1]
    }
  },
  methods: {
    toggle () {
      this.open = !this.open
    },
    close () {
      this.open = false
    },
    handlerChange (val) {
      const index = this.value.indexOf(val)
      if (index === -1) {
        this.value.push(val)
      } else {
        this.value.splice(index, 1)
      }
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
