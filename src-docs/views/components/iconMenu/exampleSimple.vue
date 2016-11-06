<template>
<div>
  <mu-icon-menu
      icon="more_vert"
      :anchorOrigin="leftTop"
      :targetOrigin="leftTop"
    >
      <mu-menu-item title="Refresh" />
      <mu-menu-item title="Send feedback" />
      <mu-menu-item title="Settings" />
      <mu-menu-item title="Help" />
      <mu-menu-item title="Sign out" />
    </mu-icon-menu>
    <mu-icon-menu
      icon="more_vert"
      :anchorOrigin="leftBottom"
      :targetOrigin="leftBottom"
    >
      <mu-menu-item title="Refresh" />
      <mu-menu-item title="Send feedback" />
      <mu-menu-item title="Settings" />
      <mu-menu-item title="Help" />
      <mu-menu-item title="Sign out" />
    </mu-icon-menu>
    <mu-icon-menu
      icon="more_vert"
      :anchorOrigin="rightBottom"
      :targetOrigin="rightBottom"
    >
      <mu-menu-item title="Refresh" />
      <mu-menu-item title="Send feedback" />
      <mu-menu-item title="Settings" />
      <mu-menu-item title="Help" />
      <mu-menu-item title="Sign out" />
    </mu-icon-menu>
    <mu-icon-menu
      icon="more_vert"
      :anchorOrigin="rightTop"
      :targetOrigin="rightTop"
    >
      <mu-menu-item title="Refresh" />
      <mu-menu-item title="Send feedback" />
      <mu-menu-item title="Settings" />
      <mu-menu-item title="Help" />
      <mu-menu-item title="Sign out" />
    </mu-icon-menu>
</div>
</template>

<script>
export default {
  data () {
    return {
      leftTop: {horizontal: 'left', vertical: 'top'},
      leftBottom: {horizontal: 'left', vertical: 'bottom'},
      rightBottom: {horizontal: 'right', vertical: 'bottom'},
      rightTop: {horizontal: 'right', vertical: 'top'}
    }
  }
}
</script>
