<template>
<div class="container">
  <mu-raised-button label="Default" class="demo-raised-button"/>
  <mu-raised-button label="Primary" class="demo-raised-button" primary/>
  <mu-raised-button label="Secondary" class="demo-raised-button" secondary/>
  <mu-raised-button label="Disabled" class="demo-raised-button" disabled/>
  <br/>
  <mu-raised-button label="full Width" fullWidth/>
</div>
</template>

<style>
  .container{
    display: flex;
    flex-wrap: wrap;
  }
  .demo-raised-button {
    margin: 12px;
  }
</style>
