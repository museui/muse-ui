<template>
  <div style="width:400px;margin:20px">
      <mu-alert type="success" showIcon closeable @close="closed">
        成功提示文案
        <span slot="description">成功提示文案成功提示文案成功提示文案成功提示文案成功提示文案成功提示文案成功提示文案成功提示文案成功提示文案成功提示文案成功提示文案成功提示文案</span>
      </mu-alert>
      <mu-alert type="info" showIcon>
        <mu-icon value="import_contacts" slot="icon"/>
        自定义icon
        <span slot="description">自定义icon自定义icon自定义icon自定义icon自定义icon自定义icon自定义icon自定义icon自定义icon自定义icon</span>
      </mu-alert>
      <mu-alert type="warning">关闭icon显示</mu-alert>
      <mu-alert type="error" closeable>
      	<span slot="close" style="color:red; font-size: 12px;" showIcon>关闭</span>
      	自定义关闭按钮
      </mu-alert>
    </div>
</template>
<script>
export default {
  methods: {
    closed () {
      window.alert('我被关闭了')
    }
  }
}
</script>
