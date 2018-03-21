import * as util from "../../util/util"
import api from "../../fetch/api"

export default {
  data() {
    return {
      imagesData : [],
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
    this.loadImageStreamTag();

  },
  components :{
  },
  methods : {
    /**
     * 翻页
     */
    // refresh:function(page){
    //   var skip = (page - 1) * this.pageobj.size;
    //   this.curdata = this.buildConfigData.slice(skip, skip + this.pageobj.size);
    // },
    /**
     * 翻页事件
     */
    // handleCurrentChange:function(cpage){
    //   this.currentPage = cpage;
    //   this.refresh(cpage);
    // },
    /**
     * 获取image列表  镜像仓库——构像镜像  
     */
    loadImageStreamTag:function(){
      api.base_ImageStreamTag({})
        .then(res => {
          console.log("111",res)
          this.imagesData = res.items;
          // this.pageobj.totalRow = res.items.length;
          // this.refresh(1);
          // this.loadBuilds(res.items)
          // this.loadimages(res.items)
        }).catch(error => {

      })
    },
   
   
    

  }
}
