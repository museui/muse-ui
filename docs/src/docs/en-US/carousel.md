# 轮播

`mu-carousel` 组件用于网站首页广告图切换。

## 示例

:::demo
```html
<mu-carousel>
  <mu-carousel-item>
    <img :src="carouselImg1">
  </mu-carousel-item>
  <mu-carousel-item>
    <img :src="carouselImg2">
  </mu-carousel-item>
  <mu-carousel-item>
    <img :src="carouselImg3">
  </mu-carousel-item>
  <mu-carousel-item>
    <img :src="carouselImg4">
  </mu-carousel-item>
</mu-carousel>
<script>
import carouselImg1 from '../../assets/images/carousel1.jpg';
import carouselImg2 from '../../assets/images/carousel2.jpg';
import carouselImg3 from '../../assets/images/carousel3.jpg';
import carouselImg4 from '../../assets/images/carousel4.jpg';

export default {
  data () {
    return {
      carouselImg1,
      carouselImg2,
      carouselImg3,
      carouselImg4
    }
  }
};
</script>
```
:::

## 渐变过渡

:::demo
```html
<mu-carousel transition="fade">
  <mu-carousel-item>
    <img :src="carouselImg1">
  </mu-carousel-item>
  <mu-carousel-item>
    <img :src="carouselImg2">
  </mu-carousel-item>
  <mu-carousel-item>
    <img :src="carouselImg3">
  </mu-carousel-item>
  <mu-carousel-item>
    <img :src="carouselImg4">
  </mu-carousel-item>
</mu-carousel>
<script>
import carouselImg1 from '../../assets/images/carousel1.jpg';
import carouselImg2 from '../../assets/images/carousel2.jpg';
import carouselImg3 from '../../assets/images/carousel3.jpg';
import carouselImg4 from '../../assets/images/carousel4.jpg';

export default {
  data () {
    return {
      carouselImg1,
      carouselImg2,
      carouselImg3,
      carouselImg4
    }
  }
};
</script>
```
:::

## 自定义指示器和控制器

:::demo
```html
<mu-carousel :active="active">
  <mu-icon value="arrow_back" slot="left"></mu-icon>
  <mu-icon value="arrow_forward" slot="right"></mu-icon>
  <template slot="indicator" slot-scope="{ index, active }">
    <mu-button icon class="mu-carousel-indicator-button" :class="{'mu-carousel-indicator-button__active': active}" @click="changeActive(index)">
      <span class="rect-indicator"></span>
    </mu-button>
  </template>
  <mu-carousel-item>
    <img :src="carouselImg1">
  </mu-carousel-item>
  <mu-carousel-item>
    <img :src="carouselImg2">
  </mu-carousel-item>
  <mu-carousel-item>
    <img :src="carouselImg3">
  </mu-carousel-item>
  <mu-carousel-item>
    <img :src="carouselImg4">
  </mu-carousel-item>
</mu-carousel>
<script>
import carouselImg1 from '../../assets/images/carousel1.jpg';
import carouselImg2 from '../../assets/images/carousel2.jpg';
import carouselImg3 from '../../assets/images/carousel3.jpg';
import carouselImg4 from '../../assets/images/carousel4.jpg';

export default {
  data () {
    return {
      carouselImg1,
      carouselImg2,
      carouselImg3,
      carouselImg4,
      active: 0
    }
  },
  methods: {
    changeActive (index) {
      this.active = index;
    }
  }
};
</script>
```
:::

## 隐藏控制器

:::demo
```html
<mu-carousel hide-controls>
  <mu-carousel-item>
    <img :src="carouselImg1">
  </mu-carousel-item>
  <mu-carousel-item>
    <img :src="carouselImg2">
  </mu-carousel-item>
  <mu-carousel-item>
    <img :src="carouselImg3">
  </mu-carousel-item>
  <mu-carousel-item>
    <img :src="carouselImg4">
  </mu-carousel-item>
</mu-carousel>
<script>
import carouselImg1 from '../../assets/images/carousel1.jpg';
import carouselImg2 from '../../assets/images/carousel2.jpg';
import carouselImg3 from '../../assets/images/carousel3.jpg';
import carouselImg4 from '../../assets/images/carousel4.jpg';

export default {
  data () {
    return {
      carouselImg1,
      carouselImg2,
      carouselImg3,
      carouselImg4
    }
  }
};
</script>
```
:::

## Carousel Props

| 参数 | 介绍 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| active | 激活的下标 | Number | — | 0 |
| cycle | 是否周期性自动切换 | Boolean | — | true |
| interval | 切换时间间隔 | Number  | — | 6000 |
| transition | 过渡动画效果 | String | slide / fade | slide |
| hide-indicators | 是否隐藏指示器 | Boolean | — | false |
| hide-controls | 是否隐藏控制器 | Boolean | — | false |

## Carousel Events

| 名称 | 介绍 | 回调函数 |
|-----|------|--------|
| change | 激活项变化时触发 | (index) |

## Carousel Scoped Slots

| 名称 | 介绍 | 参数 |
|------|------|------|
| indicator | 指示器 | { index, active } |

## Carousel Slots

| 名称  | 介绍 |
|------|------|
| left | 左边控制器图标 |
| right | 右边控制器图标 |
| default | 轮播内容 |

<script>
import carouselImg1 from '../../assets/images/carousel1.jpg';
import carouselImg2 from '../../assets/images/carousel2.jpg';
import carouselImg3 from '../../assets/images/carousel3.jpg';
import carouselImg4 from '../../assets/images/carousel4.jpg';

export default {
  data () {
    return {
      carouselImg1,
      carouselImg2,
      carouselImg3,
      carouselImg4,
      active: 0
    }
  },
  methods: {
    changeActive (index) {
      this.active = index;
    }
  }
};
</script>
<style class="less">
.rect-indicator {
  display: inline-block;
  width: 10px;
  height: 10px;
  background-color: #fff;
  opacity: .5;
  transition: opacity .3s;
}
.mu-carousel-indicator-button__active .rect-indicator {
  opacity: 1;
}
</style>
