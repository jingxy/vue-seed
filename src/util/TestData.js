/**
 * Created by jsb-cpyy on 2017/8/30.
 */
const OBJ ={
  left_menu_data : [
      {
          url: "/home/dashboard",
          children: [
              {
                  url: "/console/dashboard",
                  children: [],
                  sidebarType: null,
                  descr: null,
                  extendConf: null,
                  open: false,
                  active: false,
                  modelcode: "distribute-list",
                  modelname: "数据分发",
                  modeltype: "0",
                  parentcode: "data-dev-summary",
                  images: "uex-icon-platform-resource-allocation"
              },
              {
                  url: "/console/dashboard1",
                  children: [],
                  sidebarType: null,
                  descr: null,
                  extendConf: null,
                  open: false,
                  active: false,
                  modelcode: "distribute-list-2",
                  modelname: "数据分发2",
                  modeltype: "0",
                  parentcode: "data-dev-summary",
                  images: "uex-icon-platform-resource-allocation"
              }
          ],
          descr: null,
          extendConf: null,
          menuName: "数据开发总览",
          open: false,
          active: false,
          modelcode: "data-dev-summary",
          modelname: "数据开发总览",
          modeltype: "0",
          parentcode: null,
          images: "uex-icon-command-config"
      },
      {
          url: "",
          children: [
              {
                  url: "ftl/distribute/distributeList3",
                  children: [],
                  sidebarType: null,
                  descr: null,
                  extendConf: null,
                  open: false,
                  active: false,
                  modelcode: "distribute-list-3",
                  modelname: "数据分发3",
                  modeltype: "0",
                  parentcode: "task-mgr",
                  images: "uex-icon-platform-resource-allocation"
              }
          ],
          menuName: "需求管理",
          open: false,
          active: false,
          modelcode: "task-mgr",
          modelname: "需求管理",
          modeltype: "0",
          parentcode: null,
          images: ""
      }
  ]
}
export  default OBJ;
