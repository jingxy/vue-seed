<template>
      <section>
        <v-con-nav></v-con-nav>
        <div style="display:flex">
            <!--<el-aside class="left_bgColor"  width="auto">-->
                <v-left></v-left>
            <!--</el-aside>-->
            <div style="padding:0px;"  class="con_main_r">
              <section class="con_tab">
                <keep-alive>
                    <router-view v-if="$route.meta.keepAlive"></router-view>
                </keep-alive>
                <router-view v-if="!$route.meta.keepAlive"></router-view>
              </section>
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
import api from "../../fetch/api";
export default {
  data() {
    return {};
  },
  watch: {
    $route: function(to, from) {}
  },
  //el 创建完成
  created() {
    this.websocket();
    this.loadBuildConfigs();
    this.$store.state.namespace = localStorage.getItem("namespace");
    console.log("this.$store.state.namespace", this.$store.state);
  },
  //el 挂载完成
  mounted() {},
  methods: {
    loadBuildConfigs: function() {
      api
        .base_buildConfig({})
        .then(res => {
          console.log("res", res);
        })
        .catch(error => {});
    },
<<<<<<< HEAD
    websocket() {
      let ws = new WebSocket(
        "ws://localhost:8080/ws/oapi/v1/namespaces/jiangtong/builds?watch=true&resourceVersion=12983237&access_token=A__t6LZ4K8hJ_MwZfBLKCrJx5bwaS0ajt1oIe4G1H9g"
      );
      ws.onopen = () => {
        // Web Socket 已连接上，使用 send() 方法发送数据
        ws.send("Holle");
        console.log("数据发送中...");
      };
      ws.onmessage = evt => {
        // console.log('数据已接收...')
      };
      ws.onclose = function() {
        // 关闭 websocket
        console.log("连接已关闭...");
      };
      // 组件销毁时调用，中断websocket链接
      this.over = () => {
        ws.close();
      };
    }
  },
  beforeDestroy() {
    // this.over();
  },
  components: {
    VHeader,
    VLeft,
    VConNav
=======
    watch:{
      "$route": function(to,from) {
            console.log('111',to)
            console.log('111------',from);
        this.$store.state.routeUrl = to.path;
      }
    },
    //el 创建完成
    created () {
        this.$store.state.namespace = localStorage.getItem("namespace");

        console.log('this.$store.state.namespace',this.$store.state)
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
>>>>>>> 379d5a3f5c58e828aaee5a75075054f0915de198
  }
};
</script>
<style scoped="scope">
/*@import "./../../assets/css/common.css";*/
/*@import "./../../assets/css/style.css";*/
</style>
