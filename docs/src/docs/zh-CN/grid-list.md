# 网格列表

`mu-grid-list` 网格列表是一种标准列表视图的可选组件。网格列表与应用于布局和其他可视视图中的网格有着明显的区别。

## 示例

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

## 不同位置

通过定义 `rows` 和 `cols` 来定义每个 `grid-tile` 的空间， 通过 `title-position` 改变 title 的位置，`action-position` 改变 action 位置。

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


## 在一行显示

通过外部 class 调整成一行的网格列表

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

| 参数 | 介绍 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| cell-height | 网格的高度 | Number | 180 |
| cols | 每一行的列数 | Number | 2 |
| padding | 每个网格的 `padding` | Number | 4 |

## Grid Tile Props

| 参数 | 介绍 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| cols | 占的列数, 会根据此参数计算宽度 | Number | — | 1 |
| rows | 占的行数, 会根据此参数计算高度 | Number | — | 1 |
| title | 标题文字，也可以通过 `slot="title"` 来设置 | String | — | — |
| sub-title | 子标题文字，也可以通过 `slot="subTitle"` 来设置 | String | — | — |
| title-position | 标题栏的位置 | String | top/bottom | bottom |
| action-position | 动作按钮的位置 | String | left/right | right |

## Grid Tile Slots

| 名称 | 介绍 |
|------|------|
| title | 标题文字插槽 |
| subTitle | 子标题文字插槽 |
| action | 动作按钮插槽 |
| default | 用于放置图片等元素 |

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
