<template>
<div>
  <mu-container>
    <mu-flex justify-content="center" align-items="center">
      <mu-button @click="open=true">OPEN Bottom Sheet</mu-button>
    </mu-flex>
      <mu-bottom-sheet :open.sync="open">
          <mu-list @item-click="openScroll=true">
            <mu-sub-header>Select One</mu-sub-header>
            <mu-list-item button>
              <mu-list-item-action>
                <mu-icon value="grade" color="orange"></mu-icon>
              </mu-list-item-action>
              <mu-list-item-title>Star</mu-list-item-title>
            </mu-list-item>
          </mu-list>
        </mu-bottom-sheet>
          <mu-dialog title="Phone Ringtone" width="360" :open.sync="openScroll">
      this is simple Dialog
          <mu-button slot="actions" flat color="primary" @click="opensnakbar">ok</mu-button>
        </mu-dialog>
        </mu-container>
        <mu-snackbar color="error" :open.sync="opens" position="top">
                  <mu-icon left :value="icon"></mu-icon>
                  err
                  <mu-button flat slot="action" color="#fff" @click="opens=false">Close</mu-button>
              </mu-snackbar>
      </div>
</template>
<script>
export default {
  data () {
    return {
      opens: false,
      open: false,
      timer: null,
      openScroll: false
    }
  },
  methods: {
		opensnakbar () {
      this.openScroll = false
      if (this.timer) clearTimeout(this.timer)
      this.opens = true
      this.timer = setTimeout(() => {
        this.opens = false
      }, 1000)
    }
  }
}
</script>
