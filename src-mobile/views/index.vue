<template>
  <mu-page>
    <mu-app-bar title="Muse UI">
      <mu-icon-button slot="left" icon="menu"></mu-icon-button>
      <mu-icon-button slot="right" icon="refresh" @click.native="refresh"></mu-icon-button>
    </mu-app-bar>
    <mu-scroll-view ref="scroll">
      <!-- <mu-refresh-control  @refresh="refresh" :refreshing="refreshing"></mu-refresh-control> -->
      <mu-content-block>
        <mu-flat-button labelPosition="before" label="测试按钮" icon="info"></mu-flat-button>
        <mu-float-button  icon="add" secondary></mu-float-button>
        <mu-raised-button labelPosition="before" label="测试按钮" icon="info"></mu-raised-button>
        <mu-raised-button primary label="测试按钮" icon="info"></mu-raised-button>
        <mu-raised-button full-width secondary style="margin-top: 12px;" labelPosition="before" label="测试按钮" icon="info"></mu-raised-button>
        <!-- Muse UI 是基于 vue2 开发的material design ui 库 -->
        <div style="margin-top:10px;">
          <mu-avatar>A</mu-avatar>
          <mu-avatar icon="info"></mu-avatar>
          <mu-avatar src="http://www.myronliu.com/img/uicon.jpg"></mu-avatar>
        </div>
      </mu-content-block>
      <mu-list>
        <mu-sub-header>
            test sub header
        </mu-sub-header>
        <mu-divider></mu-divider>
        <mu-list-item  title="测试标题" link>
          <mu-icon slot="media" value="info"></mu-icon>
          <mu-badge slot="after" secondary circle>11</mu-badge>
        </mu-list-item>
        <mu-divider inset></mu-divider>
        <mu-list-item  title="测试标题" link>
          <mu-icon slot="media" value="info"></mu-icon>
          <mu-badge slot="after" secondary circle>11</mu-badge>
        </mu-list-item>
        <mu-divider inset></mu-divider>
        <mu-list-item  title="测试标题" link>
          <mu-icon slot="media" value="info"></mu-icon>
          <mu-badge slot="after" secondary circle>11</mu-badge>
        </mu-list-item>
        <mu-divider inset></mu-divider>
        <mu-list-item  title="测试标题" link>
          <mu-icon slot="media" value="info"></mu-icon>
          <mu-badge slot="after" secondary circle>11</mu-badge>
        </mu-list-item>
        <mu-divider inset></mu-divider>
        <mu-list-item  title="测试标题" link>
          <mu-icon slot="media" value="info"></mu-icon>
          <mu-badge slot="after" secondary circle>11</mu-badge>
        </mu-list-item>
        <mu-divider inset></mu-divider>
        <mu-list-item  title="测试标题" link>
          <mu-icon slot="media" value="info"></mu-icon>
          <mu-badge slot="after" secondary circle>11</mu-badge>
        </mu-list-item>
        <mu-divider inset></mu-divider>
        <mu-list-item  title="测试标题" link>
          <mu-icon slot="media" value="info"></mu-icon>
          <mu-badge slot="after" secondary circle>11</mu-badge>
        </mu-list-item>
        <mu-divider inset></mu-divider>
        <mu-list-item  title="测试标题" link>
          <mu-icon slot="media" value="info"></mu-icon>
          <mu-badge slot="after" secondary circle>11</mu-badge>
        </mu-list-item>
        <mu-divider inset></mu-divider>
        <mu-list-item  title="测试标题" link>
          <mu-icon slot="media" value="info"></mu-icon>
          <mu-badge slot="after" secondary circle>11</mu-badge>
        </mu-list-item>
      </mu-list>
      <!-- <mu-infinite-scroll :loading="loading" @load="load"></mu-infinite-scroll> -->
    </mu-scroll-view>
  </mu-page>
</template>

<script>
export default {
  data () {
    return {
      refreshing: false,
      loading: false
    }
  },
  methods: {
    refresh () {
      this.refreshing = true
      setTimeout(() => {
        this.refreshing = false
      }, 2000)
    },
    load () {
      this.loading = true
      setTimeout(() => {
        this.loading = false
      }, 2000)
    }
  }
}
</script>

<style lang="css">
</style>
