<template>
  <div id="app">
    <elx-menu
            v-on:sidebar-open="sidebarOpen"
            v-on:last-child-node-click="lastChildNodeClick"
            :location-source="'http://0.0.0.0:8085/'"
            :is-post="true"
            :post-message="'hide'"
            v-on:menu-change="menuChange"
            :menu-active.sync="menuActive"
            :menu-open='menuOpen'
            :menu-data="data2"
            :menu-type="menuType"
    >
    </elx-menu>
  </div>
</template>
<style>
  div#sidebar .menu-content {
    height: 500px;
  }
</style>

<script>
  import TestData from '../util/TestData'
    export default {
        data: function() {
            return {
                menuActive: "distribute-list",
                menuOpen: "",
                menuType: "outer",
                data2: [],
                defaultExpandedKeys: ["paas_proc", "paas_proc_6"],
                currentNodeKey: "paas_proc"
            };
        },
        methods: {
            handleNodeClick(data) {},
            sidebarOpen: function() {},
            lastChildNodeClick: function(data) {
                this.$router.push(data.url)
            },
            menuChange: function() {}
        },
        watch: {
            menuActive: function(val, oldVal) {
                console.log("222222", val);
            }
        },
        created: function() {
            var _self = this;
            _self.data2 = TestData.left_menu_data;
        }
    };
</script>
