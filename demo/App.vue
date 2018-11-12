<template>
<div style="padding: 32px;">
  <mu-date-input type="dateTime">
    <template slot="day" slot-scope="{ selected, date, disabled, now}">
      <div class="mu-day-button-bg"></div>
      <div class="mu-day-button-content">
        <span class="mu-day-button-text">{{date.getDate()}}日</span>
        <span class="day-dot" v-if="date.getDate() % 3 === 0"></span>
      </div>
    </template>
  </mu-date-input>

  <br/>
  <mu-button @click="handleClick">
    CLICK
  </mu-button>
  <bug-popup />


  <mu-text-field ref="textField" v-model="value1" multi-line :rows="4" icon="comment"  placeholder="输入信息"/>
  <mu-button @click="handelFocusTextField">
    FOCUS
  </mu-button>
</div>
</template>
<script>
import BugPopup from "./bug-popup";
import BugDateInput from "./bug-date-input";
export default {
  data() {
    return {
      page: 3,
      open: false,
      alert: true,
      checkbox1: [],
      selects: [],
      slider: 10,
      checkbox2: true,
      switch1: true,
      radio1: "",
      ripple: "click ripple",
      date: new Date(),
      time: new Date(),
      value: undefined,
      value1:
        "I farI fare well without computere well without I fare well without computercomputerI fare well without computer.\r\n没电脑我也过得很好。\r\nHow did you fare?\r\n你过得怎样?\r\nA single fare is 170 dollars.\r\n单程票价为170美元。",
      alertMsg: "every thing is disabled",
      columns: [
        {
          name: "xxx1",
          title: "嘻嘻嘻1",
          width: 300,
          sortable: true
        },
        {
          name: "xxx2",
          title: "嘻嘻嘻2",
          align: "center",
          width: 300,
          sortable: true
        },
        {
          name: "xxx3",
          title: "嘻嘻嘻3",
          width: 300,
          sortable: true
        },
        {
          name: "xxx4",
          title: "嘻嘻嘻4",
          width: 300,
          sortable: true
        },
        {
          name: "xxx5",
          title: "嘻嘻嘻5",
          width: 300,
          sortable: true
        },
        {
          name: "xxx6",
          title: "嘻嘻嘻6",
          width: 300,
          sortable: true
        }
      ],
      list: [
        {
          xxx1: "啊哈哈哈哈哈哈",
          xxx2: 10,
          xxx3: 11,
          xxx4: 12,
          xxx5: 24,
          xxx6: 26
        },
        {
          xxx1: "啊哈哈哈哈哈哈",
          xxx2: 10,
          xxx3: 11,
          xxx4: 12,
          xxx5: 24,
          xxx6: 26
        },
        {
          xxx1: "啊哈哈哈哈哈哈",
          xxx2: 10,
          xxx3: 11,
          xxx4: 12,
          xxx5: 24,
          xxx6: 26
        },
        {
          xxx1: "啊哈哈哈哈哈哈",
          xxx2: 10,
          xxx3: 11,
          xxx4: 12,
          xxx5: 24,
          xxx6: 26
        },
        {
          xxx1: "啊哈哈哈哈哈哈",
          xxx2: 10,
          xxx3: 11,
          xxx4: 12,
          xxx5: 24,
          xxx6: 26
        },
        {
          xxx1: "啊哈哈哈哈哈哈",
          xxx2: 10,
          xxx3: 11,
          xxx4: 12,
          xxx5: 24,
          xxx6: 26
        },
        {
          xxx1: "啊哈哈哈哈哈哈",
          xxx2: 10,
          xxx3: 11,
          xxx4: 12,
          xxx5: 24,
          xxx6: 26
        },
        {
          xxx1: "啊哈哈哈哈哈哈",
          xxx2: 10,
          xxx3: 11,
          xxx4: 12,
          xxx5: 24,
          xxx6: 26
        }
      ],
      selects: [],
      sort: {
        name: "xxx1",
        order: "asc"
      },
      loading: true
    };
  },
  created() {
    setTimeout(() => (this.loading = false), 2000);
  },
  methods: {
    handleClick() {
      console.log("click");
    },
    closeAlert() {
      this.alert = false;
    },
    handelFocusTextField() {
      // console.log(this.$refs.textField);
      this.$refs.textField.focus();
    }
  },
  components: {
    BugPopup,
    BugDateInput
  }
};
</script>
<style>
.demo-ripple {
  width: 300px;
  height: 300px;
  background-color: aqua;
  position: relative;
}
.mu-day-button-content {
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
}
.day-dot {
  width: 8px;
  height: 8px;
  border-radius: 100%;
  background-color: #009688;
  position: absolute;
  bottom: 2px;
  left: 50%;
  margin-left: -4px;
}
</style>
