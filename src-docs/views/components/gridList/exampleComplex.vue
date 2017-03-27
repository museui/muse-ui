<template>
<div class="gridlist-demo-container">
  <mu-grid-list class="gridlist-demo">
    <mu-sub-header>图片展示</mu-sub-header>
    <mu-grid-tile v-for="tile,index in list" :key="'tile' + index" titlePosition="top" actionPosition="left" :rows="tile.featured ? 2 : 1" :cols="tile.featured ? 2 : 1">
      <img :src="tile.image"/>
      <span slot="title">{{tile.title}}</span>
      <span slot="subTitle">by <b>{{tile.author}}</b></span>
      <mu-icon-button icon="star_border" slot="action"/>
    </mu-grid-tile>
  </mu-grid-list>
</div>
</template>

<script>
export default {
  data () {
    return {
      list: [{
        image: '/images/breakfast.jpg',
        title: 'Breakfast',
        author: 'Myron',
        featured: true
      }, {
        image: '/images/burger.jpg',
        title: 'Burger',
        author: 'Linyu'
      }, {
        image: '/images/camera.jpg',
        title: 'Camera',
        author: 'ruolin'
      }, {
        image: '/images/hats.jpg',
        title: 'Hats',
        author: 'kakali'
      }, {
        image: '/images/honey.jpg',
        title: 'Honey',
        author: 'yuyang'
      }, {
        image: '/images/morning.jpg',
        title: 'Morning',
        author: 'mokayi',
        featured: true
      }, {
        image: '/images/vegetables.jpg',
        title: 'Vegetables',
        author: 'NUyyyyyyy'
      }, {
        image: '/images/water-plant.jpg',
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
