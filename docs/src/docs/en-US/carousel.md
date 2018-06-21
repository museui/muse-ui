# Carousel

The `mu-carousel` component is used to switch the home page advertisements.

## Example

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

## Gradient transitions

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

## Customizing indicators and controllers

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

## Hide controllers

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

| Attribute | Description | Type | Accepted values | Default |
|------|------|------|------|------|
| active | active subscript | Number | — | 0 |
| cycle | whether to automatically switch periodically | Boolean | — | true |
| interval | toggle time interval | Number  | — | 6000 |
| transition | transition animation effect | String | slide / fade | slide |
| hide-indicators | whether to hide indicators | Boolean | — | false |
| hide-controls | whether to hide controllers | Boolean | — | false |

## Carousel Events

| Name | Description | Parameters |
|-----|------|--------|
| change | trigger when activation item changes | (index) |

## Carousel Scoped Slots

| Name | Description | Parameters |
|------|------|------|
| indicator | indicators | { index, active } |

## Carousel Slots

| Name | Description |
|------|------|
| left | left controller icon |
| right | right controller icon |
| default | carousel content |

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
