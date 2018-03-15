<template id="app">

    <el-container class="con_main">
      <el-header style="padding:0px;">
        <v-header></v-header>
      </el-header>
      <el-container>
        <el-main  style="padding:0px;">
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
</template>

<script>
  import api from "./fetch/api"
  import * as util from "./util/util"
  import Final from "../static/baseSetting/Final"
  import TestData from "./util/TestData"
  import VHeader from "./components/header";
  import VLeft from "./components/left";
export default {
  name: 'app',
   data(){
      return {
        roleMenus:""
      }
   },
  created (){

  },
  components :{
    VHeader,
    VLeft

  },
  methods : {


  }
}
</script>

<style>
  @import "assets/css/element-variables.css";
  @import "assets/css/common.css";
  @import "assets/css/style.css";
/*#app {*/
  /*font-family: 'Avenir', Helvetica, Arial, sans-serif;*/
  /*-webkit-font-smoothing: antialiased;*/
  /*-moz-osx-font-smoothing: grayscale;*/
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
/*}*/
</style>
