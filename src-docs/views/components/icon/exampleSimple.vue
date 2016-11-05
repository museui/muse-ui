<template>
<div>
  <div class="icon-contaner">
    <mu-icon value="home"/>
    <mu-icon value="flight_takeoff" color="red"/>
    <mu-icon value="cloud_download" color="orange"/>
    <mu-icon value="videogame_asset" color="blue"/>
  </div>

  <div class="icon-contaner">
    <mu-icon value="home"/>
    <mu-icon value="home" :size="32"/>
    <mu-icon value="home" :size="36"/>
    <mu-icon value="home" :size="48"/>
  </div>
</div>
</template>

<style>
.icon-contaner .mu-icon {
  margin-right: 12px;
  margin-bottom: 12px;
}
</style>
