<template>
<div class="mu-calendar-toolbar">
  <icon-button :disabled="!prevMonth" icon="chevron_left" @click="prev"/>
  <div class="mu-calendar-toolbar-title-wrapper">
    <transition :name="'mu-calendar-slide-' + slideType"  v-for="displayDate in displayDates">
      <div class="mu-calendar-toolbar-title" :key="displayDate.getTime()">
        {{dateTimeFormat.formatMonth(displayDate)}}
      </div>
    </transition>
  </div>
  <icon-button :disabled="!nextMonth" icon="chevron_right" @click="next"/>
</div>
</template>

<script>
import iconButton from '../iconButton'
export default {
  props: {
    dateTimeFormat: {
      type: Object
    },
    displayDates: {
      type: Array
    },
    nextMonth: {
      type: Boolean,
      default: true
    },
    prevMonth: {
      type: Boolean,
      default: true
    },
    slideType: {
      type: String
    }
  },
  methods: {
    prev () {
      this.$emit('monthChange', -1)
    },
    next () {
      this.$emit('monthChange', 1)
    }
  },
  components: {
    'icon-button': iconButton
  }
}
</script>

<style lang="less">
@import "../styles/import.less";
.mu-calendar-toolbar {
  display: flex;
  justify-content: space-between;
  height: 48px;
}

.mu-calendar-toolbar-title-wrapper {
  position: relative;
  overflow: hidden;
  height: 100%;
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  width: 100%;
}

.mu-calendar-toolbar-title {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0px;
  left: 0px;
  line-height: 48px;
}

</style>
