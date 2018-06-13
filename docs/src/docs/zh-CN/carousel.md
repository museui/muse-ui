# 轮播

`mu-carousel` 组件用于在旋转的计时器上显示大量的可视内容。

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
```
:::

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
