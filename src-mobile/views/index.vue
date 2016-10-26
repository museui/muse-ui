<template>
  <div class="" style="padding-bottom: 56px;padding-top: 56px;">
    <mu-paper style="position:fixed; top:0;left: 0; right: 0;">
      <mu-appbar title="Muse UI">
        <mu-icon-menu :maxHeight="250" :value="1" slot="left" icon="menu">
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
        <mu-icon-button  slot="right" icon="android"></mu-icon-button>
      </mu-appbar>
    </mu-paper>
    <mu-list>
      <mu-list-item title="Item test one">
        <mu-icon value="inbox" slot="left"/>
        <mu-icon value="inbox" slot="right"/>
      </mu-list-item>
      <mu-divider/>
      <mu-list-item subTitle="啦啦啦啦啦" describeText="lalal" title="Item test one">
        <mu-avatar src="http://www.myronliu.com/img/uicon.jpg" slot="left" />
        <mu-icon-button icon="more_vert" slot="right"/>
      </mu-list-item>
      <mu-divider/>
      <mu-list-item title="Item test one" disabled>
        <mu-avatar src="http://www.myronliu.com/img/uicon.jpg" slot="avatar" />
        <mu-switch slot="right"/>
      </mu-list-item>
    </mu-list>
    <mu-content-block>
      <mu-date-picker maxDate="2016-10-31" container="inline" label="select Time"/>
      <mu-auto-complete openOnFocus :dataSource="['222', '333', '444']" filter="noFilter" label="Auto Complete"/>
    </mu-content-block>


    <mu-stepper orientation="vertical" :activeStep="activeStep">
      <mu-step>
        <mu-step-button>select awsome</mu-step-button>
        <mu-step-content>
          拉力赛老大撒范德萨了空间发好了撒打发点时空
          拉力赛老大撒范德萨了空间发好了撒打发点时空
          拉力赛老大撒范德萨了空间发好了撒打发点时空
          拉力赛老大撒范德萨了空间发好了撒打发点时空
          拉力赛老大撒范德萨了空间发好了撒打发点时空
          拉力赛老大撒范德萨了空间发好了撒打发点时空
        </mu-step-content>
      </mu-step>
      <mu-step>
        <mu-step-button>create a group</mu-step-button>
        <mu-step-content>
          拉力赛老大撒范德萨了空间发好了撒打发点时空
          拉力赛老大撒范德萨了空间发好了撒打发点时空
          拉力赛老大撒范德萨了空间发好了撒打发点时空
          拉力赛老大撒范德萨了空间发好了撒打发点时空
          拉力赛老大撒范德萨了空间发好了撒打发点时空
          拉力赛老大撒范德萨了空间发好了撒打发点时空
        </mu-step-content>
      </mu-step>
      <mu-step>
        <mu-step-button>addmember</mu-step-button>
        <mu-step-content>
          拉力赛老大撒范德萨了空间发好了撒打发点时空
          拉力赛老大撒范德萨了空间发好了撒打发点时空
          拉力赛老大撒范德萨了空间发好了撒打发点时空
          拉力赛老大撒范德萨了空间发好了撒打发点时空
          拉力赛老大撒范德萨了空间发好了撒打发点时空
          拉力赛老大撒范德萨了空间发好了撒打发点时空
        </mu-step-content>
      </mu-step>
    </mu-stepper>
    <mu-content-block>
      <mu-raised-button label="next" @click="nextActiveStep"/>

    </mu-content-block>
    <!-- <mu-table allRowsSelected multiSelectable>
      <mu-thead slot="header">
        <mu-tr>
          <mu-th tooltip="哈哈哈这是ID">ID</mu-th>
          <mu-th>Name</mu-th>
          <mu-th>Status</mu-th>
        </mu-tr>
      </mu-thead>
      <mu-tbody>
        <mu-tr v-for="item,index in tableData">
          <mu-td name="id">
          {{index + 1}}
          </mu-td>
          <mu-td name="name">{{item.name}}</mu-td>
          <mu-td name="status">{{item.status}}</mu-td>
        </mu-tr>
      </mu-tbody>
      <mu-tfoot slot="footer">
        <mu-tr>
          <mu-td>ID</mu-td>
          <mu-td>Name</mu-td>
          <mu-td>Status</mu-td>
        </mu-tr>
      </mu-tfoot>
    </mu-table> -->
    <!-- <mu-grid-list>
      <mu-grid-tile :cols="2" titlePosition="top" actionPosition="left">
        <img src="http://www.material-ui.com/images/grid-list/00-52-29-429_640.jpg" />
        <span slot="title">Breakfast</span>
        <span slot="subTitle">by <b>jill111</b></span>
        <mu-icon-button slot="action" icon="star_border"></mu-icon-button>
      </mu-grid-tile>
      <mu-grid-tile :cols="1" titlePosition="top" actionPosition="left">
        <img src="http://www.material-ui.com/images/grid-list/00-52-29-429_640.jpg" />
        <span slot="title">Breakfast</span>
        <span slot="subTitle">by <b>jill111</b></span>
        <mu-icon-button slot="action" icon="star_border"></mu-icon-button>
      </mu-grid-tile>
      <mu-grid-tile :cols="1" titlePosition="top" actionPosition="left">
        <img src="http://www.material-ui.com/images/grid-list/00-52-29-429_640.jpg" />
        <span slot="title">Breakfast</span>
        <span slot="subTitle">by <b>jill111</b></span>
        <mu-icon-button slot="action" icon="star_border"></mu-icon-button>
      </mu-grid-tile>
    </mu-grid-list> -->
    <!-- <mu-content-block>

    </mu-content-block> -->
    <!-- <mu-snackbar v-if="showTip" @close="close" message="This is test message" action="close" @actionClick="close"></mu-snackbar>
    <mu-toast v-if="toast" @close="toggle" message="This is test toast message"></mu-toast> -->
    <mu-paper style="position:fixed; bottom: 0;left:0; right:0;">
      <mu-bottom-nav shift :value="bottomNav" @change="handlerBottomChange">
        <mu-bottom-nav-item :value="1" icon="ondemand_video" title="Movies"></mu-bottom-nav-item>
        <mu-bottom-nav-item :value="2" icon="music_note" title="Music"></mu-bottom-nav-item>
        <mu-bottom-nav-item :value="3" icon="books" title="Books"></mu-bottom-nav-item>
        <mu-bottom-nav-item :value="4" icon="photo" title="Pictures"></mu-bottom-nav-item>
      </mu-bottom-nav>
    </mu-paper>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeStep: 0,
      showTip: false,
      toast: false,
      progress: 0,
      bottomNav: 1,
      text: '1:35 pm',
      errorText: null,
      tableData: [
        {
          name: 'John Smith',
          status: 'Employed',
          selected: true
        },
        {
          name: 'Randal White',
          status: 'Unemployed'
        },
        {
          name: 'Stephanie Sanders',
          status: 'Employed',
          selected: true
        },
        {
          name: 'Steve Brown',
          status: 'Employed'
        },
        {
          name: 'Joyce Whitten',
          status: 'Employed'
        },
        {
          name: 'Samuel Roberts',
          status: 'Employed'
        },
        {
          name: 'Adam Moore',
          status: 'Employed'
        }
      ]
    }
  },
  mounted () {
    setInterval(() => this.autoProgress(), 1000)
  },
  methods: {
    autoProgress () {
      if (this.progress >= 100) {
        this.progress = 0
        return
      }
      this.progress += 10
    },
    show () {
      this.showTip = true
    },
    close () {
      this.showTip = false
    },
    toggle () {
      this.toast = !this.toast
    },
    handleCellHoverExit () {
      console.log(arguments)
    },
    handlerBottomChange (val) {
      this.bottomNav = val
    },
    handleOverflow (flag) {
      if (flag) {
        this.errorText = '太多了，太多了 fuck'
      } else {
        this.errorText = null
      }
    },
    nextActiveStep (index) {
      this.activeStep ++
      if (this.activeStep > 3) this.activeStep = 0
    }
  },
  components: {
  }
}
</script>

<style lang="css">
.demo-paper{
display: inline-block;
}
</style>
