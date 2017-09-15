<template>
  <div class="layout">
    <div class="header">
      <div class="logo">
        Muse-UI
      </div>
      <div class="nav">
        <mu-tabs :value="activeTab" @change="handleTabChange" class="tab">
          <mu-tab value="tab1" title="Nav One"/>
          <mu-tab value="tab2" title="Nav TwO"/>
          <mu-tab value="tab3" title="Nav Three"/>
        </mu-tabs>
      </div>
    </div>
    <div class="content">
      <div class="breadcrumb">
        <mu-breadcrumb>
          <mu-breadcrumb-item href="/">Home</mu-breadcrumb-item>
          <mu-breadcrumb-item href="/">VideoGame</mu-breadcrumb-item>
          <mu-breadcrumb-item>Download</mu-breadcrumb-item>
        </mu-breadcrumb>
      </div>
      <div class="content-left">
        <mu-list @change="handleListChange" :value="activeList">
          <mu-list-item title="Sent mail" value="list1" >
            <mu-icon slot="left" value="send" />
          </mu-list-item>
          <mu-list-item title="Drafts" value="list2">
            <mu-icon slot="left" value="drafts"/>
          </mu-list-item>
          <mu-list-item title="Inbox" toggleNested value="list3">
            <mu-icon slot="left" value="inbox"/>
            <mu-list-item slot="nested" title="Starred" value="list4">
              <mu-icon slot="left" value="grade"/>
            </mu-list-item>
            <mu-list-item slot="nested" disabled title="Sent mail" toggleNested value="list5">
              <mu-icon slot="left" value="send"/>
              <mu-list-item title="Drafts" slot="nested" value="list6">
                <mu-icon slot="left" value="drafts"/>
              </mu-list-item>
            </mu-list-item>
            <mu-list-item slot="nested" title="Inbox" toggleNested value="list7">
              <mu-icon slot="left" value="inbox"/>
              <mu-list-item title="Drafts" slot="nested" value="list8">
                <mu-icon slot="left" value="drafts"/>
              </mu-list-item>
            </mu-list-item>
          </mu-list-item>
        </mu-list>
      </div>
      <div class="content-right">
        <div class="body">
          <mu-sub-header>阳光</mu-sub-header>
          <mu-content-block>
            散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光，找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！
          </mu-content-block>
        </div>
      </div>
    </div>
    <div class="footer">
      Muse-UI ©2017 Created by Muse-UI
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      activeTab: 'tab1',
      activeList: 'list1'
    }
  },
  methods: {
    handleTabChange (val) {
      this.activeTab = val
    },
    handleListChange (val) {
      this.activeList = val
    }
  }
}
</script>
<style scoped>
.layout{
  background-color: rgb(236, 236, 236);
}

.header{
  background-color: #7e57c2;
}

.logo{
  font-size: 24px;
  color: white;
  display: inline-block;
  padding: 10px 20px;
}

.nav{
  display: inline-block;
  width: calc(100% - 150px);
  margin: 0 auto;
}

.tab{
  margin: 0 auto;
  width: 400px;
  background-color: rgba(0, 0, 0, 0);
}

.content{
  overflow: hidden;
  width: 90%;
  margin: 0 auto;
}

.content-left{
  width: 30%;
  float: left;
  background-color: white;
  margin-bottom: -4000px;
  padding-bottom: 4000px;
}

.content-right{
  width: 70%;
  display: inline-block;
  float: right;
  background-color: rgba(0, 0, 0, 0)
}

.breadcrumb{
  margin: 10px 0;
}

.body{
  background-color: white;
  min-height: 500px;
}

.footer{
  padding: 20px 0;
  text-align: center;
}
</style>
