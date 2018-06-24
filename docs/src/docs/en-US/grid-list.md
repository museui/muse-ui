# Grid list

The `mu-grid-list` grid list is an optional component of a standard list view. The grid list is significantly different from the grid applied to the layout and other visual views.

## Example

:::demo
```html
<mu-container>
  <mu-flex justify-content="center">
    <mu-paper :z-depth="1">
      <mu-appbar color="primary">
        <mu-button icon slot="left">
          <mu-icon value="menu"></mu-icon>
        </mu-button>
        Photo
      </mu-appbar>
      <mu-grid-list class="gridlist-demo">
        <mu-sub-header>December</mu-sub-header>
        <mu-grid-tile v-for="tile, index in list" :key="index">
          <img :src="tile.image" >
          <span slot="title">{{tile.title}}</span>
          <span slot="subTitle">by <b>{{tile.author}}</b></span>
          <mu-button slot="action" icon>
            <mu-icon value="star_border"></mu-icon>
          </mu-button>
        </mu-grid-tile>
      </mu-grid-list>
    </mu-paper>
  </mu-flex>
</mu-container>
<script>
import breakfast from '../../assets/images/breakfast.jpg';
import burger from '../../assets/images/burger.jpg';
import camera from '../../assets/images/camera.jpg';
import hats from '../../assets/images/hats.jpg';
import honey from '../../assets/images/honey.jpg';
import morning from '../../assets/images/morning.jpg';
import vegetables from '../../assets/images/vegetables.jpg';
import waterPlant from '../../assets/images/water-plant.jpg';
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
        image: waterPlant,
        title: 'water',
        author: 'TDDyyyyyyy'
      }]
    }
  }
}
</script>
<style>
.gridlist-demo{
  width: 360px;
  height: 450px;
  overflow-y: auto;
}
</style>
```
:::

## Different positions

By defining `rows` and `cols` to define the space for each `grid-tile`, change the position of title by `title-position` and `action-position` change the position of the action.

:::demo
```html
<mu-container>
  <mu-flex justify-content="center">
    <mu-paper :z-depth="1">
      <mu-appbar color="primary">
        <mu-button icon  slot="left">
          <mu-icon value="menu"></mu-icon>
        </mu-button>
        Photo
      </mu-appbar>
      <mu-grid-list class="gridlist-demo">
        <mu-sub-header>December</mu-sub-header>
        <mu-grid-tile v-for="tile,index in list1" :key="'tile' + index" title-position="top" action-position="left" :rows="tile.featured ? 2 : 1" :cols="tile.featured ? 2 : 1">
          <img :src="tile.image"/>
          <span slot="title">{{tile.title}}</span>
          <span slot="subTitle">by <b>{{tile.author}}</b></span>
          <mu-button slot="action" icon>
            <mu-icon value="star_border"></mu-icon>
          </mu-button>
        </mu-grid-tile>
      </mu-grid-list>
    </mu-paper>
  </mu-flex>
</mu-container>
<script>
import breakfast from '../../assets/images/breakfast.jpg';
import burger from '../../assets/images/burger.jpg';
import camera from '../../assets/images/camera.jpg';
import hats from '../../assets/images/hats.jpg';
import honey from '../../assets/images/honey.jpg';
import morning from '../../assets/images/morning.jpg';
import vegetables from '../../assets/images/vegetables.jpg';
import waterPlant from '../../assets/images/water-plant.jpg';
export default {
  data () {
    return {
      list1: [{
          image: breakfast,
          title: 'Breakfast',
          author: 'Myron',
          featured: true
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
          author: 'mokayi',
          featured: true
        }, {
          image: vegetables,
          title: 'Vegetables',
          author: 'NUyyyyyyy'
        }, {
          image: waterPlant,
          title: 'water',
          author: 'TDDyyyyyyy'
        }]
    }
  }
}
</script>
```
:::


## Show on a row

A grid list that adjusts to a row by external class.

:::demo
```html
<mu-grid-list class="gridlist-inline-demo" :cols="4">
  <mu-grid-tile v-for="tile, index in list" :key="index">
    <img :src="tile.image" >
    <span slot="title">{{tile.title}}</span>
    <span slot="subTitle">by <b>{{tile.author}}</b></span>
    <mu-button slot="action" icon>
      <mu-icon value="star_border"></mu-icon>
    </mu-button>
  </mu-grid-tile>
</mu-grid-list>
<script>
import breakfast from '../../assets/images/breakfast.jpg';
import burger from '../../assets/images/burger.jpg';
import camera from '../../assets/images/camera.jpg';
import hats from '../../assets/images/hats.jpg';
import honey from '../../assets/images/honey.jpg';
import morning from '../../assets/images/morning.jpg';
import vegetables from '../../assets/images/vegetables.jpg';
import waterPlant from '../../assets/images/water-plant.jpg';
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
        image: waterPlant,
        title: 'water',
        author: 'TDDyyyyyyy'
      }]
    }
  }
}
</script>
<style>
.gridlist-inline-demo {
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
}
</style>
```
:::

## Grid List Props

| Attribute | Description | Type | Accepted values | Default |
|------|------|------|------|------|
| cell-height | grid height | Number | 180 |
| cols | number of columns per row | Number | 2 |
| padding | the `padding` of each grid | Number | 4 |

## Grid Tile Props

| Attribute | Description | Type | Accepted values | Default |
|------|------|------|------|------|
| cols | the number of cols, calculate the width based on this parameter | Number | — | 1 |
| rows | the number of rows, calculate the height based on this parameter | Number | — | 1 |
| title | title text，set by `slot="subtitle"` | String | — | — |
| sub-title | subtitle text，set by `slot="subtitle"` | String | — | — |
| title-position | title position | String | top/bottom | bottom |
| action-position | action button position | String | left/right | right |

## Grid Tile Slots

| Name | Description |
|------|------|
| title | title text slot |
| subTitle | subtitle text slot |
| action | action button slot |
| default | used to place elements such as pictures |

<script>
import breakfast from '../../assets/images/breakfast.jpg';
import burger from '../../assets/images/burger.jpg';
import camera from '../../assets/images/camera.jpg';
import hats from '../../assets/images/hats.jpg';
import honey from '../../assets/images/honey.jpg';
import morning from '../../assets/images/morning.jpg';
import vegetables from '../../assets/images/vegetables.jpg';
import waterPlant from '../../assets/images/water-plant.jpg';
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
        image: waterPlant,
        title: 'water',
        author: 'TDDyyyyyyy'
      }],
      list1: [{
          image: breakfast,
          title: 'Breakfast',
          author: 'Myron',
          featured: true
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
          author: 'mokayi',
          featured: true
        }, {
          image: vegetables,
          title: 'Vegetables',
          author: 'NUyyyyyyy'
        }, {
          image: waterPlant,
          title: 'water',
          author: 'TDDyyyyyyy'
        }]
    }
  }
}
</script>
<style>
.gridlist-demo{
  width: 360px;
  height: 450px;
  overflow-y: auto;
}
.gridlist-inline-demo{
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
}
</style>
