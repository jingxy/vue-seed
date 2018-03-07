<template>
  <header>
    <el-row  style="width: 100%;-moz-box-shadow: 0px 1px 8px #888888;box-shadow: 0px 1px 8px #888888;">
        <el-col :span="8">
          <div class="logo">

            <span class="vm">DataFoundry</span>
          </div>
        </el-col>

    </el-row>
    <!--<remote-js src="http://mmc.cloudyoung.cn/resources/js/MFRAppHead.js"></remote-js>-->
  </header>
</template>

<script>
  import Api from "./../fetch/api"
  import Final from "../../static/baseSetting/Final"
//  import remoteJs from "remote-js.vue"
export default {
  components: {
//    'remote-js': {
//      render(createElement) {
//        return createElement('script', { attrs: { type: 'text/javascript', src: this.src }});
//      },
//      props: {
//        src: { type: String, required: true },
//      },
//    },
  },
  data () {
    return {
      mainMenus:[],
      menuCode:'',
      Final:Final,
    }
  },
  created () {
  },
  mounted(){
//      window.setTimeout(function (){
//        window.appHead.settings = {
//          logoUrl: 'http://' + window.location.host + '/fweb/images/logo.png',
//          opUrl: 'http://mmc.cloudyoung.cn',
//          appKey: 'GIFTACTIVITY'
//        };
//        window.appHead.initHead();
//      },1000)

  },
  methods:{
      handleCommand(command){
          if(command == 'loginout'){
            let url = Final.LOGIN_PAGE_URL
            window.location.href = url
          }
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  header {

  }
  header ul .active {
    background: #4a8fd4;
  }
/*h1, h2 {*/
  /*font-weight: normal;*/
/*}*/

/*ul {*/
  /*list-style-type: none;*/
  /*padding: 0;*/
/*}*/

/*li {*/
  /*display: inline-block;*/
  /*margin: 0 10px;*/
/*}*/

/*a {*/
  /*color: #42b983;*/
/*}*/
</style>
