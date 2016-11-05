<template>
<div class="gridlist-demo-container">
  <mu-grid-list class="gridlist-demo">
    <mu-sub-header>图片展示</mu-sub-header>
    <mu-grid-tile v-for="tile in list">
      <img :src="tile.image"/>
      <span slot="title">{{tile.title}}</span>
      <span slot="subTitle">by <b>{{tile.author}}</b></span>
      <mu-icon-button icon="star_border" slot="action"/>
    </mu-grid-tile>
  </mu-grid-list>
</div>
</template>

<script>
import breakfast from '../../../assets/images/breakfast.jpg'
import burger from '../../../assets/images/burger.jpg'
import camera from '../../../assets/images/camera.jpg'
import hats from '../../../assets/images/hats.jpg'
import honey from '../../../assets/images/honey.jpg'
import morning from '../../../assets/images/morning.jpg'
import vegetables from '../../../assets/images/vegetables.jpg'
import water from '../../../assets/images/water-plant.jpg'
export default {
  data () {
    return {
      list: [{
        image: breakfast,
        title: 'Breakfast',
        author: 'Myron'
      }, {
        image: burger,
        title: 'Burger',
        author: 'Linyu'
      }, {
        image: camera,
        title: 'Camera',
        author: 'ruolin'
      }, {
        image: hats,
        title: 'Hats',
        author: 'kakali'
      }, {
        image: honey,
        title: 'Honey',
        author: 'yuyang'
      }, {
        image: morning,
        title: 'Morning',
        author: 'mokayi'
      }, {
        image: vegetables,
        title: 'Vegetables',
        author: 'NUyyyyyyy'
      }, {
        image: water,
        title: 'water',
        author: 'TDDyyyyyyy'
      }]
    }
  }
}
</script>

<style>
.gridlist-demo-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.gridlist-demo{
  width: 500px;
  height: 450px;
  overflow-y: auto;
}
</style>
