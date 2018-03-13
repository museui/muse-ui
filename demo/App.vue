<template>
  <div style="padding: 32px;">
  <mu-date-input v-model="value" actions type="time" landscape/>
  <mu-paper style="display: inline-block;" :zDepth="2">
    <mu-date-picker :maxDate="new Date()" :date.sync="date" />
  </mu-paper>
  <br/>
  <mu-paper style="display: inline-block;" :zDepth="2">
    <mu-time-picker format="24hr" :time.sync="time"/>
  </mu-paper>

<mu-select placeholder="圆圆圆圆" multiple  label="选择框">
      <mu-chip slot="selection" slot-scope="scope" color="teal" :selected="scope.selected">
        {{scope.label}}
      </mu-chip>
      <mu-option value="1" label="嘻嘻嘻1" />
      <mu-option value="2" label="嘻嘻嘻2" />
      <mu-option value="3" label="嘻嘻嘻3" />
      <mu-option value="4" label="嘻嘻嘻4" />
      <mu-option value="33" label="嘻嘻嘻1" />
      <mu-option value="42" label="嘻嘻嘻2" />
      <mu-option value="5" label="嘻嘻嘻3" />
      <mu-option value="6" label="嘻嘻嘻4" />
      <mu-option value="7" label="嘻嘻嘻1" />
      <mu-option value="8" label="嘻嘻嘻2" />
      <mu-option value="9" label="嘻嘻嘻3" />
      <mu-option value="10" label="嘻嘻嘻4" />
      <mu-option value="11" label="嘻嘻嘻11" />
      <mu-option value="12" label="嘻嘻嘻21" />
      <mu-option value="13" label="嘻嘻嘻31" />
      <mu-option value="14" label="嘻嘻嘻41" />
      <mu-option value="15" label="嘻嘻嘻11" />
      <mu-option value="16" label="嘻嘻嘻21" />
      <mu-option value="17" label="嘻嘻嘻31" />
      <mu-option value="18" label="嘻嘻嘻41" />
      <mu-option value="19" label="嘻嘻嘻11" />
      <mu-option value="20" label="嘻嘻嘻21" />
      <mu-option value="21" label="嘻嘻嘻31" />
      <mu-option value="22" label="嘻嘻嘻41" />


    </mu-select>
    <mu-text-field placeholder="h啊哈哈哈" full-width name="teal-phone" v-model="alertMsg" multi-line :rows="3" :rows-max="6" max-length="300" helpText="错误啦啦啦啦" label="Test Input" />
    <mu-text-field placeholder="h啊哈哈哈" disabled icon="phone" max-length="8" helpText="错误啦啦啦啦" label="Test Input" type="text" action-icon="arrow_drop_down" :action-click="closeAlert" />
    <br/>
    <br/>
    <br/> {{checkbox1}}
    <br/>
    <br/>
    <br/>
    <mu-checkbox label="嘻嘻嘻1" name="xixi" value="vava" v-model="checkbox1" />
    <mu-checkbox label="嘻嘻嘻2" disabled name="xixi" value="baba" v-model="checkbox1" />
    <mu-checkbox label="嘻嘻嘻3" name="xixi" value="caca" v-model="checkbox1" />
    <mu-checkbox label="嘻嘻嘻4" name="xixi" value="dada" v-model="checkbox1" />
    <mu-checkbox :label="String(checkbox2)" v-model="checkbox2" />
    <br/>
    <br/>
    <br/>
    <mu-radio label="嘻嘻嘻1" value="vava" v-model="radio1" />
    <mu-radio label="嘻嘻嘻2" value="baba" v-model="radio1" />
    <mu-radio label="嘻嘻嘻3" value="caca" v-model="radio1" />
    <mu-radio label="嘻嘻嘻4" value="dada" v-model="radio1" />
    <br/>
    <br/>
    <br/>
    <mu-switch v-model="switch1" :label="String(switch1)" />
    <br/>
    <br/>
    <br/>
    <mu-slider v-model="slider" />
    <br/>
    <br/>
    <br/>
    <mu-alert color="warning" :show.sync="alert" delete>
      <mu-icon value="check_circle" /> this is success alert {{alertMsg}}
    </mu-alert>
    <mu-appbar title="Hellow World" />
    <mu-button fab color="secondary">
      <mu-icon value="edit" />
    </mu-button>
    <mu-button flat color="pink">OPEN LALALA</mu-button>
    <mu-badge content="12" circle color="warning">
      <mu-avatar color="primary" textColor="yellow">
        A
      </mu-avatar>
    </mu-badge>
    <mu-linear-progress :value="80" color="teal" style="margin: 16px 0;" />
    <mu-circular-progress :size="56" :value="80" color="error" />
    <mu-button color="warning" @click="open = true">
      OPEN DIALOG
    </mu-button>
    <mu-chip delete color="error" text-color="yellow">
      嘻嘻嘻
    </mu-chip>
    <mu-tabs center fixed textColor="success" indicatorColor="secondary">
      <mu-tab>
        <mu-icon value="info" /> TAB 1
      </mu-tab>
      <mu-tab>
        <mu-icon value="info" /> TAB 2
      </mu-tab>
      <mu-tab>
        <mu-icon value="info" /> TAB 77777
      </mu-tab>
      <mu-tab>
        <mu-icon value="info" /> TAB 5
      </mu-tab>
    </mu-tabs>
    <br/>
    <mu-menu>
      <mu-button color="teal">
        OPEN MENU
      </mu-button>
      <mu-list slot="content">
        <mu-list-item button nested toggleNestedType="popover" toggleNested>
          <mu-list-item-content>
            <mu-list-item-title>哈哈哈哈哈哈</mu-list-item-title>
          </mu-list-item-content>
          <mu-list-item button slot="nested" nested toggleNested toggleNestedType="popover">
            <mu-list-item-content>
              <mu-list-item-title>哈哈哈哈哈哈</mu-list-item-title>
            </mu-list-item-content>
            <mu-list-item button slot="nested" toggleNestedType="popover">
              <mu-list-item-content>
                <mu-list-item-title>哈哈哈哈哈哈222</mu-list-item-title>
              </mu-list-item-content>
            </mu-list-item>
            <mu-list-item button slot="nested" toggleNestedType="popover">
              <mu-list-item-content>
                <mu-list-item-title>哈哈哈哈哈哈333</mu-list-item-title>
              </mu-list-item-content>
            </mu-list-item>
          </mu-list-item>
          <mu-list-item button slot="nested" toggleNestedType="popover">
            <mu-list-item-content>
              <mu-list-item-title>哈哈哈哈哈哈</mu-list-item-title>
            </mu-list-item-content>
          </mu-list-item>
        </mu-list-item>
        <mu-list-item button>
          <mu-list-item-content>
            <mu-list-item-title>哈哈哈哈哈哈</mu-list-item-title>
          </mu-list-item-content>
        </mu-list-item>
        <mu-list-item button>
          <mu-list-item-content>
            <mu-list-item-title>哈哈哈哈哈哈</mu-list-item-title>
          </mu-list-item-content>
        </mu-list-item>
      </mu-list>
    </mu-menu>
    <br />
    <mu-snackbar position="top-start" action="CLOSE" action-color="primary" @action-click="open=false" message="I`m myron, I Love wd">
    </mu-snackbar>
    <br/>
    <mu-stepper :activeStep="1">
      <mu-step>
        <mu-step-label>
          选择活动地点
        </mu-step-label>
      </mu-step>
      <mu-step>
        <mu-step-button>
          创建一个群组
        </mu-step-button>
      </mu-step>
      <mu-step>
        <mu-step-label>
          宣传活动
        </mu-step-label>
      </mu-step>
    </mu-stepper>
    <br/>
    <br/>
    <mu-tooltip content="嘻嘻嘻" open placement="left-start">
      <mu-button>Tooltip</mu-button>
    </mu-tooltip>
    <!-- <mu-bottom-sheet :open.sync="open">
      <mu-list>
        <mu-list-item button nested toggleNestedType="popover" toggleNested>
          <mu-list-item-content>
            <mu-list-item-title>哈哈哈哈哈哈</mu-list-item-title>
          </mu-list-item-content>
          <mu-list-item button slot="nested" nested toggleNested toggleNestedType="popover">
            <mu-list-item-content>
              <mu-list-item-title>哈哈哈哈哈哈</mu-list-item-title>
            </mu-list-item-content>
            <mu-list-item button slot="nested" toggleNestedType="popover">
              <mu-list-item-content>
                <mu-list-item-title>哈哈哈哈哈哈222</mu-list-item-title>
              </mu-list-item-content>
            </mu-list-item>
            <mu-list-item button slot="nested" toggleNestedType="popover">
              <mu-list-item-content>
                <mu-list-item-title>哈哈哈哈哈哈333</mu-list-item-title>
              </mu-list-item-content>
            </mu-list-item>
          </mu-list-item>
          <mu-list-item button slot="nested" toggleNestedType="popover">
            <mu-list-item-content>
              <mu-list-item-title>哈哈哈哈哈哈</mu-list-item-title>
            </mu-list-item-content>
          </mu-list-item>
        </mu-list-item>
        <mu-list-item button>
          <mu-list-item-content>
            <mu-list-item-title>哈哈哈哈哈哈</mu-list-item-title>
          </mu-list-item-content>
        </mu-list-item>
        <mu-list-item button>
          <mu-list-item-content>
            <mu-list-item-title>哈哈哈哈哈哈</mu-list-item-title>
          </mu-list-item-content>
        </mu-list-item>
      </mu-list>
    </mu-bottom-sheet> -->
    <mu-bottom-nav>
      <mu-bottom-nav-item title="Movies" icon="ondemand_video" />
      <mu-bottom-nav-item title="Music" icon="music_note" />
      <mu-bottom-nav-item title="Books" icon="books" />
      <mu-bottom-nav-item title="Pictures" icon="photo" />
    </mu-bottom-nav>
    <!-- <mu-dialog title="嘻嘻嘻" :open.sync="open" scrollable max-width="300" transition="scale">
      哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
      哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
      哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈
    </mu-dialog> -->
    <mu-drawer :open.sync="open" :docked="false">
      <mu-list dense>
        <mu-list-item nested toggleNested button :ripple="false">
          <mu-list-item-content>
            <mu-list-item-title>用户管理</mu-list-item-title>
          </mu-list-item-content>
          <mu-list-item-action>
            <mu-icon class="toggle-icon" value="keyboard_arrow_down" />
          </mu-list-item-action>
          <mu-list-item slot="nested" button>
            <mu-list-item-content>
              <mu-list-item-title>用户总览</mu-list-item-title>
            </mu-list-item-content>
          </mu-list-item>
          <mu-list-item slot="nested" button>
            <mu-list-item-content>
              <mu-list-item-title>PCC用户</mu-list-item-title>
            </mu-list-item-content>
          </mu-list-item>
          <mu-list-item slot="nested" nested button>
            <mu-list-item-content>
              <mu-list-item-title>动态管理</mu-list-item-title>
            </mu-list-item-content>
            <mu-list-item slot="nested" button>
              <mu-list-item-content>
                <mu-list-item-title>哈哈哈哈哈哈</mu-list-item-title>
              </mu-list-item-content>
            </mu-list-item>
            <mu-list-item slot="nested" button>
              <mu-list-item-content>
                <mu-list-item-title>哈哈哈哈哈哈</mu-list-item-title>
              </mu-list-item-content>
            </mu-list-item>
          </mu-list-item>
        </mu-list-item>
      </mu-list>
    </mu-drawer>
  </div>
</template>
<script>
export default {
  data () {
    return {
      open: false,
      alert: true,
      checkbox1: [],
      slider: 10,
      checkbox2: true,
      switch1: true,
      radio1: '',
      date: new Date(),
      time: new Date(),
      value: undefined,
      alertMsg: 'every thing is disabled'
    }
  },
  methods: {
    closeAlert () {
      this.alert = false;
    }
  }
}
</script>
