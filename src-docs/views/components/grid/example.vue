<template>
<div class="demo-grid">
  <mu-row gutter>
    <mu-col width="100" tablet="50" desktop="33">col-100<br/>tablet-50<br/>desktop-33</mu-col>
    <mu-col width="100" tablet="50" desktop="33">col-100<br/>tablet-50<br/>desktop-33</mu-col>
  </mu-row>
  <mu-row gutter>
    <mu-col width="50" tablet="30" desktop="25">col-50<br/>tablet-30<br/>desktop-25</mu-col>
    <mu-col width="50" tablet="30" desktop="25">col-50<br/>tablet-30<br/>desktop-25</mu-col>
    <mu-col width="50" tablet="20" desktop="25">col-50<br/>tablet-20<br/>desktop-25</mu-col>
    <mu-col width="50" tablet="20" desktop="25">col-50<br/>tablet-20<br/>desktop-25</mu-col>
  </mu-row>
  <mu-row gutter>
    <mu-col width="100" tablet="40" desktop="15">col-100<br/>tablet-40<br/>desktop-15</mu-col>
    <mu-col width="50" tablet="60" desktop="15">col-50<br/>tablet-60<br/>desktop-15</mu-col>
    <mu-col width="50" tablet="60" desktop="35">col-50<br/>tablet-60<br/>desktop-35</mu-col>
    <mu-col width="100" tablet="33" desktop="35">col-100<br/>tablet-33<br/>desktop-35</mu-col>
  </mu-row>
</div>
</template>

<style lang="css">
.demo-grid div[class*="col-"] {
  background: #fff;
  text-align: center;
  color: #000;
  border: 1px solid #ddd;
  padding: 8px;
  margin-bottom: 8px;
}
</style>
