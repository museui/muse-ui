<template>
<div>
  <mu-raised-button label="上面弹出" @click="open('top')"/>
  <mu-raised-button label="下面弹出" @click="open('bottom')"/>
  <mu-raised-button label="左边弹出" @click="open('left')"/>
  <mu-raised-button label="右边弹出" @click="open('right')"/>
  <mu-popup position="bottom" popupClass="demo-popup-bottom" :open="bottomPopup" @close="close('bottom')">
    <mu-appbar title="弹出">
      <mu-flat-button slot="right" label="关闭" color="white" @click="close('bottom')"/>
    </mu-appbar>
    <mu-content-block>
      <p>
        Popup 弹出框组件，可以从上下左右四个方位弹出，也可以直接渐变透明度显示，弹出框的宽度高度需要自己设置
      </p>
      <p>
        散落在指尖的阳光，我试着轻轻抓住光影的踪迹，它却在眉宇间投下一片淡淡的阴影。调皮的阳光掀动了四月的心帘，温暖如约的歌声渐起。似乎在诉说着，我也可以在漆黑的角落里，找到阴影背后的阳光，找到阳光与阴影奏出和谐的旋律。我要用一颗敏感赤诚的心迎接每一缕滑过指尖的阳光！
      </p>
    </mu-content-block>
  </mu-popup>
  <mu-popup position="top" :overlay="false" popupClass="demo-popup-top" :open="topPopup">
    更新成功
  </mu-popup>
  <mu-popup position="left" popupClass="demo-popup-left" :open="leftPopup" @close="close('left')">
    <mu-raised-button label="关闭弹框" @click="close('left')" primary fullWidth/>
  </mu-popup>
  <mu-popup position="right" popupClass="demo-popup-right" :open="rightPopup" @close="close('right')">
    <mu-raised-button label="关闭弹框" @click="close('right')" primary fullWidth/>
  </mu-popup>
</div>
</template>

<script>
export default {
  data () {
    return {
      bottomPopup: false,
      topPopup: false,
      leftPopup: false,
      rightPopup: false
    }
  },
  methods: {
    open (position) {
      this[position + 'Popup'] = true
    },
    close (position) {
      this[position + 'Popup'] = false
    }
  },
  watch: {
    topPopup (val) {
      if (val) {
        setTimeout(() => {
          this.topPopup = false
        }, 2000)
      }
    }
  }
}
</script>

<style lang="css">
.demo-popup-top {
  width: 100%;
  opacity: .8;
  height: 48px;
  line-height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 375px;
}

.demo-popup-left {
  display: flex;
  width: 85%;
  max-width: 375px;
  height: 100%;
  align-items: center;
  padding: 24px;
}

.demo-popup-right {
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 375px;
  align-items: center;
  padding: 24px;
}

.demo-popup-bottom {
  width: 100%;
  max-width: 375px;
}
</style>
