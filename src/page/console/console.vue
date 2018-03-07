<template>
      <section class="con_main_r">
        <v-con-nav></v-con-nav>
        <div>
            <!--<el-aside class="left_bgColor"  width="auto">-->
                <v-left></v-left>
            <!--</el-aside>-->
            <div style="padding:0px;">
                <keep-alive>
                    <router-view v-if="$route.meta.keepAlive"></router-view>
                </keep-alive>
                <router-view v-if="!$route.meta.keepAlive"></router-view>
            </div>
        </div>
      </section>
    <!--</div>-->
  <!--</div>-->
</template>
<script>
  import VHeader from "./../../components/header";
  import VLeft from "./../../components/left";
  import VConNav from "./../../components/con_nav";
  import Final from "../../../static/baseSetting/Final";
  export default {
    data() {
      return {
      }
    },
    watch:{
      "$route": function(to,from) {

      }
    },
    //el 创建完成
    created () {

    },
    //el 挂载完成
    mounted () {

    },
    methods :{

    },
    components :{
      VHeader,
      VLeft,
      VConNav
    },
    methods : {}
  }

</script>
<style scoped="scope">
  /*@import "./../../assets/css/common.css";*/
  /*@import "./../../assets/css/style.css";*/
</style>
