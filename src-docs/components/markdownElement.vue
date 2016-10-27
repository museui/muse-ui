<template>
  <div class="markdown-body" v-html="marked(text)"/>
</template>

<script>
import marked from 'marked'
export default {
  props: {
    text: {
      type: String,
      default: ''
    }
  },
  created () {
    marked.setOptions({
      gfm: true,
      tables: true,
      breaks: false,
      pedantic: false,
      sanitize: false,
      smartLists: true,
      smartypants: false,
      highlight (code, lang) {
        return require('highlight.js').highlight(lang, code).value
      }
    })
  },
  methods: {
    marked (text) {
      return marked(text)
    }
  }
}
</script>

<style lang="less">
@import "../assets/github-markdown.css";
@import "../assets/atom-one-light.css";
</style>
