<template>
<div>
  <mu-auto-complete label="不过滤 dataSource" :maxSearchResults="5" labelFloat :dataSource="colors" filter="noFilter"/><br/>
  <mu-auto-complete label="区分大小写的文字匹配过滤" :maxSearchResults="5" labelFloat :dataSource="fruits" filter="caseSensitiveFilter"/><br/>
  <mu-auto-complete label="不区分大小写的文字匹配过滤" :maxSearchResults="5" labelFloat :dataSource="fruits" filter="caseInsensitiveFilter"/><br/>
  <mu-auto-complete label="只显示有 ‘m’ 和 ‘y’ 的数据" :maxSearchResults="5" labelFloat :dataSource="fruits" :filter="myfilter"/>
</div>
</template>

<script>
const colors = [
  'Red',
  'Orange',
  'Yellow',
  'Green',
  'Blue',
  'Purple',
  'Black',
  'White'
]

const fruits = [
  'Apple', 'Apricot', 'Avocado',
  'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry',
  'Boysenberry', 'Blood Orange',
  'Cantaloupe', 'Currant', 'Cherry', 'Cherimoya', 'Cloudberry',
  'Coconut', 'Cranberry', 'Clementine',
  'Damson', 'Date', 'Dragonfruit', 'Durian',
  'Elderberry',
  'Feijoa', 'Fig',
  'Goji berry', 'Gooseberry', 'Grape', 'Grapefruit', 'Guava',
  'Honeydew', 'Huckleberry',
  'Jabouticaba', 'Jackfruit', 'Jambul', 'Jujube', 'Juniper berry',
  'Kiwi fruit', 'Kumquat',
  'Lemon', 'Lime', 'Loquat', 'Lychee',
  'Nectarine',
  'Mango', 'Marion berry', 'Melon', 'Miracle fruit', 'Mulberry', 'Mandarine',
  'Olive', 'Orange',
  'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Physalis', 'Plum', 'Pineapple',
  'Pumpkin', 'Pomegranate', 'Pomelo', 'Purple Mangosteen',
  'Quince',
  'Raspberry', 'Raisin', 'Rambutan', 'Redcurrant',
  'Salal berry', 'Satsuma', 'Star fruit', 'Strawberry', 'Squash', 'Salmonberry',
  'Tamarillo', 'Tamarind', 'Tomato', 'Tangerine',
  'Ugli fruit',
  'Watermelon'
]
export default {
  data () {
    return {
      colors,
      fruits,
      myfilter (searchText, key) {
        return key && key.toLowerCase().indexOf('m') !== -1 && key.toLowerCase().indexOf('y') !== -1
      }
    }
  }
}
</script>
