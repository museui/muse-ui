<template>
<div>
  <h2 class="api-view-title">{{title}}</h2>
  <mu-tabs class="api-view-tabs" v-if="showTabs" @change="handleChange" :value="value">
    <mu-tab value="props" v-if="api.props" title="Props"/>
    <mu-tab value="slots" v-if="api.slots" title="Slots"/>
    <mu-tab value="events" v-if="api.events" title="Events"/>
  </mu-tabs>
  <mu-table v-if="value === 'props'" class="api-view-table" :fixedFooter="false" :fixedHeader="false" :showCheckbox="false" :selectable="false">
    <mu-thead>
      <mu-tr>
        <mu-th class="api-th" width="20%">名称</mu-th>
        <mu-th class="api-th" width="15%">类型</mu-th>
        <mu-th class="api-th" width="25%">默认值</mu-th>
        <mu-th class="api-th" width="40%">描述</mu-th>
      </mu-tr>
    </mu-thead>
    <mu-tbody>
      <mu-tr v-for="item in api.props">
        <mu-td class="api-td">{{item.name}}</mu-td>
        <mu-td class="api-td api-type-td">{{item.type}}</mu-td>
        <mu-td class="api-td api-default-td">
          <markdown-element :text="item.default"/>
        </mu-td>
        <mu-td class="api-desc-td api-td">
          <markdown-element :text="item.desc"/>
        </mu-td>
      </mu-tr>
    </mu-tbody>
  </mu-table>
  <mu-table v-if="value === 'slots'" class="api-view-table" :fixedFooter="false" :fixedHeader="false" :showCheckbox="false" :selectable="false">
    <mu-thead>
      <mu-tr>
        <mu-th class="api-th" width="15%">名称</mu-th>
        <mu-th class="api-th" width="55%">描述</mu-th>
      </mu-tr>
    </mu-thead>
    <mu-tbody>
      <mu-tr v-for="item in api.slots">
        <mu-td class="api-td">{{item.name}}</mu-td>
        <mu-td class="api-desc-td api-td">
          <markdown-element :text="item.desc"/>
        </mu-td>
      </mu-tr>
    </mu-tbody>
  </mu-table>
  <mu-table v-if="value === 'events'" class="api-view-table" :fixedFooter="false" :fixedHeader="false" :showCheckbox="false" :selectable="false">
    <mu-thead>
      <mu-tr>
        <mu-th class="api-th" width="15%">名称</mu-th>
        <mu-th class="api-th" width="55%">描述</mu-th>
      </mu-tr>
    </mu-thead>
    <mu-tbody>
      <mu-tr v-for="item in api.events">
        <mu-td class="api-td">{{item.name}}</mu-td>
        <mu-td class="api-desc-td api-td">
          <markdown-element :text="item.desc"/>
        </mu-td>
      </mu-tr>
    </mu-tbody>
  </mu-table>
</div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: 'API'
    },
    api: {
      type: Object,
      required: true
    }
  },
  computed: {
    showTabs () {
      return (this.api.props && this.api.slots) || (this.api.props && this.api.events) || (this.api.events && this.api.slots)
    }
  },
  data () {
    return {
      value: this.api ? this.api.props ? 'props' : this.api.slots ? 'slots' : 'events' : 'props'
    }
  },
  methods: {
    handleChange (value) {
      this.value = value
    }
  }
}
</script>

<style lang="less">
@import "../../../src/styles/import.less";
.api-view-tabs{
  background-color: @canvasColor;
  color: @textColor;
  margin-bottom: 16px;
  .mu-tab-link-highlight {
    background-color: @primary1Color;
  }
  .mu-tab-link{
    color: @secondaryTextColor;
  }

  .mu-tab-active{
    color: @primary1Color;
  }
}

.api-view-title{
  font-size: 20px;
  line-height: 1.4;
  font-weight: 400;
  margin-top: 1em;
  margin-bottom: 0;
  color: @textColor;
}
.api-th {
  font-size: 16px;
}
.api-td {
  font-size: 15px;
}

.api-type-td{
  color: @accent1Color;
}
.api-default-td,
.api-desc-td {
  white-space: normal;
  text-overflow: inherit;
  padding-top: 12px;
  padding-bottom: 12px;
}

.api-view-table {
  .mu-table {
    min-width: 700px;
    // table-layout: auto;
  }
}
</style>
