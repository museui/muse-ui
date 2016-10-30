<template>
<div>
  <mu-auto-complete filter="noFilter" label="配置 datasource 显示 icon" labelFloat :dataSource="dataSource"/> <br/>
  <mu-auto-complete filter="noFilter" label="在 focus 的时候显示补全信息" openOnFocus labelFloat :dataSource="focusData"/>
</div>
</template>

<script>
export default {
  data () {
    return {
      dataSource: [{
        value: 't1',
        text: '第一个Icon',
        rightIcon: 'inbox'
      }, {
        value: 't2',
        text: '第二个Icon',
        rightIcon: 'info'
      }, {
        value: 't3',
        text: '第三个Icon',
        rightIcon: 'search'
      }],
      focusData: ['123456', '789723', '775873']
    }
  }
}
</script>
