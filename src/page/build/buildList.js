import * as util from "../../util/util"
import api from "../../fetch/api"

export default {
  data() {
    return {
      buildConfigData : [],
      currentPage: 1,
      totalRow: 20,
      pageobj:{
        size:2,
        totalRow:0,
        currentPage:1
      },
      copedata:[],
      curdata:[]
    }
  },
  watch:{

  },
  created (){

  },
  mounted () {
    this.loadBuildConfigs();

  },
  components :{
  },
  methods : {
    /**
     * 翻页
     */
    refresh:function(page){
      var skip = (page - 1) * this.pageobj.size;
      this.curdata = this.buildConfigData.slice(skip, skip + this.pageobj.size);
    },
    /**
     * 翻页事件
     */
    handleCurrentChange:function(cpage){
      this.currentPage = cpage;
      this.refresh(cpage);
    },
    /**
     * 获取build列表
     */
    loadBuildConfigs:function(){
      api.base_buildConfig({})
        .then(res => {
          this.buildConfigData = res.items;
          this.pageobj.totalRow = res.items.length;
          this.refresh(1);
          this.loadBuilds(res.items)
        }).catch(error => {

      })
    },
    /**
     * 获取列表详情
     */
    loadBuilds:function(items){
      var labelSelector = '';
      if (items.length > 0) {
        labelSelector = 'buildconfig in (';
        for (var i = 0; i < items.length; i++) {
          labelSelector += items[i].metadata.name + ','
        }
        labelSelector = labelSelector.substring(0, labelSelector.length - 1) + ')';
      }
      api.base_build({labelSelector:labelSelector})
        .then(res => {
          this.fillBuildConfigs(res.items)
        }).catch(error => {

      })

    },
    /**
     * 填充列表详情
     */
    fillBuildConfigs:function(items){
      var buildMap = {};
      for (var i = 0; i < items.length; i++) {
        if (!items[i].metadata.labels) {
          continue;
        }
        var label = items[i].metadata.labels.buildconfig;
        if (!buildMap[label]) {
          buildMap[label] = items[i];
          continue;
        }
        var st = (new Date(items[i].metadata.creationTimestamp)).getTime();
        if ((new Date(buildMap[label].metadata.creationTimestamp)).getTime() < st) {
          buildMap[label] = items[i];
        }
      }
      for(var i = 0 ; i < this.buildConfigData.length; i++){
        var label = this.buildConfigData[i].metadata.name;
        this.$set(this.buildConfigData[i],'build',buildMap[label] || '')
      }
      this.copedata = Object.assign({}, this.buildConfigData);
    },
    startBuild:function(idx){
      var name = this.curdata[idx].metadata.name;
      console.log('name', name);
      var buildRequest = {
        metadata: {
          name: name
        }
      };
      api.base_buildInstantiate(buildRequest,{name:name})
        .then(res => {
          console.log('-=-=-=-',res)
        }).catch(error => {

      })
    }

  }
}
