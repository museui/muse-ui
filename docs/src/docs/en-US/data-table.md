# 数据表格

`mu-data-table` 用于显示表格数据，并且通常出现于桌面企业产品中。

## 示例

:::demo
```html
<mu-container>
  <mu-paper :z-depth="1">
    <mu-data-table :columns="columns" :sort.sync="sort" @sort-change="handleSortChange" :data="list">
      <template slot-scope="scope">
        <td>{{scope.row.name}}</td>
        <td class="is-right">{{scope.row.calories}}</td>
        <td class="is-right">{{scope.row.fat}}</td>
        <td class="is-right">{{scope.row.carbs}}</td>
        <td class="is-right">{{scope.row.protein}}</td>
        <td class="is-right">{{scope.row.iron}}%</td>
      </template>
    </mu-data-table>
  </mu-paper>
</mu-container>
<script>
export default {
  data () {
    return {
      sort: {
        name: '',
        order: 'asc'
      },
      columns: [
          { title: 'Dessert (100g serving)', width: 200, name: 'name' },
          { title: 'Calories', name: 'calories', width: 126, align: 'center', sortable: true },
          { title: 'Fat (g)', name: 'fat', width: 126, align: 'center', sortable: true },
          { title: 'Carbs (g)', name: 'carbs', width: 126, align: 'center', sortable: true },
          { title: 'Protein (g)', name: 'protein', width: 126, align: 'center', sortable: true },
          { title: 'Iron (%)', name: 'iron', width: 126, align: 'center', sortable: true }
      ],
      list: [
        {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: 1
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: 1
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: 7
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: 8
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: 16
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: 0
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: 2
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: 45
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: 22
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: 6
          }
      ]
    };
  },
  methods: {
    handleSortChange ({name, order}) {
      this.list = this.list.sort((a, b) => order === 'asc' ? a[name] - b[name] : b[name] - a[name]);
    }
  }
};
</script>
```
:::

## 条纹表格

设置 `stripe`, 可以更容易区分出不同行的数据。

:::demo
```html
<mu-container>
  <mu-paper :z-depth="1">
    <mu-data-table stripe :columns="columns" :sort.sync="sort" @sort-change="handleSortChange" :data="list.slice(0, 6)">
      <template slot-scope="scope">
        <td>{{scope.row.name}}</td>
        <td class="is-right">{{scope.row.calories}}</td>
        <td class="is-right">{{scope.row.fat}}</td>
        <td class="is-right">{{scope.row.carbs}}</td>
        <td class="is-right">{{scope.row.protein}}</td>
        <td class="is-right">{{scope.row.iron}}%</td>
      </template>
    </mu-data-table>
  </mu-paper>
</mu-container>
<script>
export default {
  data () {
    return {
      sort: {
        name: '',
        order: 'asc'
      },
      columns: [
          { title: 'Dessert (100g serving)', width: 200, name: 'name' },
          { title: 'Calories', name: 'calories', width: 126, align: 'center', sortable: true },
          { title: 'Fat (g)', name: 'fat', width: 126, align: 'center', sortable: true },
          { title: 'Carbs (g)', name: 'carbs', width: 126, align: 'center', sortable: true },
          { title: 'Protein (g)', name: 'protein', width: 126, align: 'center', sortable: true },
          { title: 'Iron (%)', name: 'iron', width: 126, align: 'center', sortable: true }
      ],
      list: [
        {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: 1
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: 1
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: 7
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: 8
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: 16
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: 0
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: 2
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: 45
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: 22
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: 6
          }
      ]
    };
  },
  methods: {
    handleSortChange ({name, order}) {
      this.list = this.list.sort((a, b) => order === 'asc' ? a[name] - b[name] : b[name] - a[name]);
    }
  }
};
</script>
```
:::

## 边框表格

:::demo
```html
<mu-container>
  <mu-paper :z-depth="1">
    <mu-data-table border :columns="columns" :sort.sync="sort" @sort-change="handleSortChange" :data="list.slice(0, 6)">
      <template slot-scope="scope">
        <td>{{scope.row.name}}</td>
        <td class="is-right">{{scope.row.calories}}</td>
        <td class="is-right">{{scope.row.fat}}</td>
        <td class="is-right">{{scope.row.carbs}}</td>
        <td class="is-right">{{scope.row.protein}}</td>
        <td class="is-right">{{scope.row.iron}}%</td>
      </template>
    </mu-data-table>
  </mu-paper>
</mu-container>
<script>
export default {
  data () {
    return {
      sort: {
        name: '',
        order: 'asc'
      },
      columns: [
          { title: 'Dessert (100g serving)', width: 200, name: 'name' },
          { title: 'Calories', name: 'calories', width: 126, align: 'center', sortable: true },
          { title: 'Fat (g)', name: 'fat', width: 126, align: 'center', sortable: true },
          { title: 'Carbs (g)', name: 'carbs', width: 126, align: 'center', sortable: true },
          { title: 'Protein (g)', name: 'protein', width: 126, align: 'center', sortable: true },
          { title: 'Iron (%)', name: 'iron', width: 126, align: 'center', sortable: true }
      ],
      list: [
        {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: 1
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: 1
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: 7
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: 8
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: 16
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: 0
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: 2
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: 45
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: 22
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: 6
          }
      ]
    };
  },
  methods: {
    handleSortChange ({name, order}) {
      this.list = this.list.sort((a, b) => order === 'asc' ? a[name] - b[name] : b[name] - a[name]);
    }
  }
};
</script>
```
:::

## 进度条

数据在加载时，将 `loading` 设置为 `true`，显示加载进度条

:::demo
```html
<mu-container>
  <mu-paper :z-depth="1">
    <mu-data-table :loading="true" :columns="columns" :sort.sync="sort" @sort-change="handleSortChange" :data="list.slice(0, 6)">
      <template slot-scope="scope">
        <td>{{scope.row.name}}</td>
        <td class="is-right">{{scope.row.calories}}</td>
        <td class="is-right">{{scope.row.fat}}</td>
        <td class="is-right">{{scope.row.carbs}}</td>
        <td class="is-right">{{scope.row.protein}}</td>
        <td class="is-right">{{scope.row.iron}}%</td>
      </template>
    </mu-data-table>
  </mu-paper>
</mu-container>
<script>
export default {
  data () {
    return {
      sort: {
        name: '',
        order: 'asc'
      },
      columns: [
          { title: 'Dessert (100g serving)', width: 200, name: 'name' },
          { title: 'Calories', name: 'calories', width: 126, align: 'center', sortable: true },
          { title: 'Fat (g)', name: 'fat', width: 126, align: 'center', sortable: true },
          { title: 'Carbs (g)', name: 'carbs', width: 126, align: 'center', sortable: true },
          { title: 'Protein (g)', name: 'protein', width: 126, align: 'center', sortable: true },
          { title: 'Iron (%)', name: 'iron', width: 126, align: 'center', sortable: true }
      ],
      list: [
        {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: 1
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: 1
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: 7
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: 8
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: 16
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: 0
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: 2
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: 45
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: 22
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: 6
          }
      ]
    };
  },
  methods: {
    handleSortChange ({name, order}) {
      this.list = this.list.sort((a, b) => order === 'asc' ? a[name] - b[name] : b[name] - a[name]);
    }
  }
};
</script>
```
:::

## 固定表头

设置 `height` 或 `max-height` 属性后，当表格高度溢出时会显示滚动条，自动固定表头和表尾。

:::demo
```html
<mu-container>
  <mu-paper :z-depth="1">
    <mu-data-table height="300" :columns="columns" :sort.sync="sort" @sort-change="handleSortChange" :data="list">
      <template slot-scope="scope">
        <td>{{scope.row.name}}</td>
        <td class="is-right">{{scope.row.calories}}</td>
        <td class="is-right">{{scope.row.fat}}</td>
        <td class="is-right">{{scope.row.carbs}}</td>
        <td class="is-right">{{scope.row.protein}}</td>
        <td class="is-right">{{scope.row.iron}}%</td>
      </template>
    </mu-data-table>
  </mu-paper>
</mu-container>
<script>
export default {
  data () {
    return {
      sort: {
        name: '',
        order: 'asc'
      },
      columns: [
          { title: 'Dessert (100g serving)', width: 200, name: 'name' },
          { title: 'Calories', name: 'calories', width: 126, align: 'center', sortable: true },
          { title: 'Fat (g)', name: 'fat', width: 126, align: 'center', sortable: true },
          { title: 'Carbs (g)', name: 'carbs', width: 126, align: 'center', sortable: true },
          { title: 'Protein (g)', name: 'protein', width: 126, align: 'center', sortable: true },
          { title: 'Iron (%)', name: 'iron', width: 126, align: 'center', sortable: true }
      ],
      list: [
        {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: 1
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: 1
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: 7
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: 8
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: 16
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: 0
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: 2
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: 45
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: 22
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: 6
          }
      ]
    };
  },
  methods: {
    handleSortChange ({name, order}) {
      this.list = this.list.sort((a, b) => order === 'asc' ? a[name] - b[name] : b[name] - a[name]);
    }
  }
};
</script>
```
:::

## 自定义表头

通过 `th` 或 `header` slot 自定义表头

:::demo
```html
<mu-container>
  <mu-paper :z-depth="1">
    <mu-data-table  :columns="columns" :sort.sync="sort" @sort-change="handleSortChange" :data="list.slice(0, 5)">
      <template slot="th" slot-scope="column">
        <mu-tooltip :content="column.title">
          <mu-flex align-items="center" justify-content="center">
            <span>{{column.title}}</span>
            <mu-icon class="mu-table-sort-icon" value="arrow_drop_down"></mu-icon>
          </mu-flex>
        </mu-tooltip>
      </template>
      <template slot-scope="scope">
        <td>{{scope.row.name}}</td>
        <td class="is-right">{{scope.row.calories}}</td>
        <td class="is-right">{{scope.row.fat}}</td>
        <td class="is-right">{{scope.row.carbs}}</td>
        <td class="is-right">{{scope.row.protein}}</td>
        <td class="is-right">{{scope.row.iron}}%</td>
      </template>
    </mu-data-table>
  </mu-paper>
  <mu-paper :z-depth="1" style="margin-top: 8px;">
    <mu-data-table border :columns="columns" :sort.sync="sort" @sort-change="handleSortChange" :data="list.slice(0, 5)">
      <template slot="header" slot-scope="scope">
        <tr>
          <th rowspan="2">Dessert (100g serving) </th>
          <th rowspan="2" class="is-center">Calories</th>
          <th colspan="4" class="is-center">Merge Cell</th>
        </tr>
        <tr>
          <th class="is-center">Fat (g)</th>
          <th class="is-center">Carbs (g)</th>
          <th class="is-center">Protein (g)</th>
          <th class="is-center">Iron (%)</th>
        </tr>
      </template>
      <template slot-scope="scope">
        <td>{{scope.row.name}}</td>
        <td class="is-right">{{scope.row.calories}}</td>
        <td class="is-right">{{scope.row.fat}}</td>
        <td class="is-right">{{scope.row.carbs}}</td>
        <td class="is-right">{{scope.row.protein}}</td>
        <td class="is-right">{{scope.row.iron}}%</td>
      </template>
    </mu-data-table>
  </mu-paper>
</mu-container>
<script>
export default {
  data () {
    return {
      sort: {
        name: '',
        order: 'asc'
      },
      columns: [
          { title: 'Dessert (100g serving)', width: 200, name: 'name' },
          { title: 'Calories', name: 'calories', width: 126, align: 'center', sortable: true },
          { title: 'Fat (g)', name: 'fat', width: 126, align: 'center', sortable: true },
          { title: 'Carbs (g)', name: 'carbs', width: 126, align: 'center', sortable: true },
          { title: 'Protein (g)', name: 'protein', width: 126, align: 'center', sortable: true },
          { title: 'Iron (%)', name: 'iron', width: 126, align: 'center', sortable: true }
      ],
      list: [
        {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: 1
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: 1
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: 7
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: 8
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: 16
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: 0
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: 2
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: 45
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: 22
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: 6
          }
      ]
    };
  },
  methods: {
    handleSortChange ({name, order}) {
      this.list = this.list.sort((a, b) => order === 'asc' ? a[name] - b[name] : b[name] - a[name]);
    }
  }
};
</script>
```
:::

## 行选择

`selects.sync` 双向控制选择行。

:::demo
```html
<mu-container>
  <mu-paper :z-depth="1">
    <mu-data-table selectable select-all :selects.sync="selects" checkbox :columns="columns" :sort.sync="sort" @sort-change="handleSortChange" :data="list.slice(0, 6)">
      <template slot-scope="scope">
        <td>{{scope.row.name}}</td>
        <td class="is-right">{{scope.row.calories}}</td>
        <td class="is-right">{{scope.row.fat}}</td>
        <td class="is-right">{{scope.row.carbs}}</td>
        <td class="is-right">{{scope.row.protein}}</td>
        <td class="is-right">{{scope.row.iron}}%</td>
      </template>
    </mu-data-table>
    <mu-flex align-items="center" style="padding: 8px;" wrap="wrap">
      selects: <mu-chip delete v-for="selectIndex in selects" @delete="removeSelect(selectIndex)" style="margin: 8px;" color="green" :key="selectIndex">{{list[selectIndex].name}}</mu-chip>
    </mu-flex>
  </mu-paper>
</mu-container>
<script>
export default {
  data () {
    return {
      selects: [],
      sort: {
        name: '',
        order: 'asc'
      },
      columns: [
          { title: 'Dessert (100g serving)', width: 200, name: 'name' },
          { title: 'Calories', name: 'calories', width: 126, align: 'center', sortable: true },
          { title: 'Fat (g)', name: 'fat', width: 126, align: 'center', sortable: true },
          { title: 'Carbs (g)', name: 'carbs', width: 126, align: 'center', sortable: true },
          { title: 'Protein (g)', name: 'protein', width: 126, align: 'center', sortable: true },
          { title: 'Iron (%)', name: 'iron', width: 126, align: 'center', sortable: true }
      ],
      list: [
        {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: 1
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: 1
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: 7
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: 8
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: 16
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: 0
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: 2
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: 45
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: 22
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: 6
          }
      ]
    };
  },
  methods: {
    handleSortChange ({name, order}) {
      this.list = this.list.sort((a, b) => order === 'asc' ? a[name] - b[name] : b[name] - a[name]);
    },
    removeSelect (selectIndex) {
      const index = this.selects.indexOf(selectIndex);
      this.selects.splice(index, 1);
    }
  }
};
</script>
```
:::

## 展开行

`mu-data-table` 支持行展开功能，用于展示更多的信息。

:::demo
```html
<mu-container>
  <mu-paper :z-depth="1">
    <mu-data-table stripe :columns="columns" :sort.sync="sort" @sort-change="handleSortChange" :data="list.slice(0, 6)">
      <template slot="expand" slot-scope="prop">
        <div style="padding: 24px;" >this is expand row, name {{prop.row.name}}</div>
      </template>
      <template slot-scope="scope">
        <td>{{scope.row.name}}</td>
        <td class="is-right">{{scope.row.calories}}</td>
        <td class="is-right">{{scope.row.fat}}</td>
        <td class="is-right">{{scope.row.carbs}}</td>
        <td class="is-right">{{scope.row.protein}}</td>
        <td class="is-right">{{scope.row.iron}}%</td>
      </template>
    </mu-data-table>
  </mu-paper>
</mu-container>
<script>
export default {
  data () {
    return {
      sort: {
        name: '',
        order: 'asc'
      },
      columns: [
          { title: 'Dessert (100g serving)', width: 200, name: 'name' },
          { title: 'Calories', name: 'calories', width: 126, align: 'center', sortable: true },
          { title: 'Fat (g)', name: 'fat', width: 126, align: 'center', sortable: true },
          { title: 'Carbs (g)', name: 'carbs', width: 126, align: 'center', sortable: true },
          { title: 'Protein (g)', name: 'protein', width: 126, align: 'center', sortable: true },
          { title: 'Iron (%)', name: 'iron', align: 'center', sortable: true }
      ],
      list: [
        {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: 1
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: 1
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: 7
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: 8
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: 16
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: 0
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: 2
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: 45
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: 22
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: 6
          }
      ]
    };
  },
  methods: {
    handleSortChange ({name, order}) {
      this.list = this.list.sort((a, b) => order === 'asc' ? a[name] - b[name] : b[name] - a[name]);
    }
  }
};
</script>
```
:::

## Data Table Props

| 参数 | 介绍 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| data | 显示的数据 | Array | — | — |
| columns | 显示列的配置 | Array | — | — |
| no-data-text | 空数据时显示的文本内容，也可以通过 slot="empty" 设置 | String | 暂无数据 |
| height | Table 的高度，默认为自动高度。 | Number/String | — | — |
| max-height | Table 的最大高度 | Number/String | — | — |
| selectable | 是否可选择 | Boolean | — | false |
| select-all | 是否开启全选选择框 | Boolean | — | false |
| selects | 选择行的 index 数组，可以使用 `.sync` 双向控制 | Array | — | — |
| sort | 排序，它的 `name` 属性指排序的列, `order` 指定排序的顺序, 可以使用 `.sync` 双向控制 |  Object | `order`:asc, desc | — |
| checkbox | 是否显示 `mu-checkbox` | Boolean | — | false |
| stripe | 是否是条纹表格 | Boolean | — | false |
| border | 是否是边框表格 | Boolean | — | false |
| loading | 是否显示加载进度条 | Boolean | — | false |
| hideHeader | 是否隐藏表头 | Boolean | — | false |
| rowClassName | 行的 className 的回调方法，也可以使用字符串为所有行设置一个固定的 className。| String / Function(rowIndex, row) | — | — |
| rowStyle | 行的 style 的回调方法，也可以使用一个固定的 Object 为所有行设置一样的 Style。 | String /  Function(rowIndex, row) | — | — |
| rowKey | 行数据的 Key，用来优化 Table 的渲染；| String | — | — |
| fit | 列的宽度是否自撑开 | Boolean | — | true |
| hover | 是否显示鼠标悬浮在行上的样式 | Boolean | — | true |

## Data Table Columns

| 参数 | 介绍 | 类型 | 可选值 | 默认值 |
|------|------|------|------|------|
| name | 对应列内容的字段名 | String | — | — |
| title | 显示的标题 | String | — | — |
| width | 列的宽度 | Number | — | — |
| sortable | 列是否可以排序 | Boolean | — | false |
| align | 列的对齐方式 | String | left, center, right | left |
| cellAlign | 单元格对齐方式 | String | left, center, right | left |
| class | 列的样式 | String | — | — |
| tooltip | 列的提示文字 | String | — | — |
| formatter | 单元格单词格式化 | Function(value, row) | - | - |

## Data Table Events

| 名称 | 介绍 | 回调参数 |
|------|------|-------|
| row-click | 点击某一行时触发 | (index, row, event) |
| row-dblclick | 双击击某一行时触发 | (index, row, event) |
| row-mouseenter | 鼠标进入某一行时触发 | (index, row, event) |
| row-mouseleave | 鼠标离开某一行时触发 | (index, row, event) |
| row-contextmenu | 当某一行被鼠标右键点击时会触发该事件 | (index, row, event) |
| select-change | 选择行时触发 | (index, selects) |
| sort-change | 点击头部排序时触发 | (sort) |

## Data Table Slots

| 名称 | 介绍 |
|------|------|
| empty | 空数据时显示的插槽 |

## Data Table Scope Slots

| 名称 | 介绍 | 参数 |
|------|------|------|
| default | 数据显示的内容 | { row, $index } |
| th | 表头单元格的内容 | { name, title, width, sortable, align, class, tooltip }  |
| footer | 表尾内容 | { columns } |
| header | 表头内容 | { columns } |
| expand | 展开行的内容 | { row, $index } |

<script>
export default {
  data () {
    return {
      selects: [],
      sort: {
        name: '',
        order: 'asc'
      },
      columns: [
          { title: 'Dessert (100g serving)', width: 202, name: 'name' },
          { title: 'Calories', name: 'calories', width: 126, align: 'center', sortable: true },
          { title: 'Fat (g)', name: 'fat', width: 126, align: 'center', sortable: true },
          { title: 'Carbs (g)', name: 'carbs', width: 126, align: 'center', sortable: true },
          { title: 'Protein (g)', name: 'protein', width: 126, align: 'center', sortable: true },
          { title: 'Iron (%)', name: 'iron', align: 'center', sortable: true }
      ],
      list: [
        {
            name: 'Frozen Yogurt',
            calories: 159,
            fat: 6.0,
            carbs: 24,
            protein: 4.0,
            iron: 1
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
            fat: 9.0,
            carbs: 37,
            protein: 4.3,
            iron: 1
          },
          {
            name: 'Eclair',
            calories: 262,
            fat: 16.0,
            carbs: 23,
            protein: 6.0,
            iron: 7
          },
          {
            name: 'Cupcake',
            calories: 305,
            fat: 3.7,
            carbs: 67,
            protein: 4.3,
            iron: 8
          },
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: 16
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: 0
          },
          {
            name: 'Lollipop',
            calories: 392,
            fat: 0.2,
            carbs: 98,
            protein: 0,
            iron: 2
          },
          {
            name: 'Honeycomb',
            calories: 408,
            fat: 3.2,
            carbs: 87,
            protein: 6.5,
            iron: 45
          },
          {
            name: 'Donut',
            calories: 452,
            fat: 25.0,
            carbs: 51,
            protein: 4.9,
            iron: 22
          },
          {
            name: 'KitKat',
            calories: 518,
            fat: 26.0,
            carbs: 65,
            protein: 7,
            iron: 6
          }
      ]
    };
  },
  methods: {
    handleSortChange ({name, order}) {
      this.list = this.list.sort((a, b) => order === 'asc' ? a[name] - b[name] : b[name] - a[name]);
    },
    removeSelect (selectIndex) {
      const index = this.selects.indexOf(selectIndex);
      this.selects.splice(index, 1);
    }
  }
};
</script>
<style lang="less">
.mu-table table {
  margin-bottom: 0 !important;
}
.mu-table-expand-row {
  tr& {
    height: 0 !important;
  }
  td {
    padding: 0 !important;
    height: 0 !important;
    border: 0 !important;
    &.is-expand {
      border-bottom: 1px solid rgba(0, 0, 0, .12) !important;
    }
  }
}

</style>
