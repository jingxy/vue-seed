/**
 * Created by jsb-cpyy on 2017/8/30.
 */
const OBJ ={
  left_menu_data : [
      // {
      //     url: "",
      //     children: [
      //         {
      //             url: "/console/dashboard",
      //             children: [],
      //             sidebarType: null,
      //             descr: null,
      //             extendConf: null,
      //             open: false,
      //             active: false,
      //             modelcode: "distribute-list",
      //             modelname: "数据分发",
      //             modeltype: "0",
      //             parentcode: "data-dev-summary",
      //             images: "uex-icon-platform-resource-allocation"
      //         },
      //         {
      //             url: "/console/dashboard1",
      //             children: [],
      //             sidebarType: null,
      //             descr: null,
      //             extendConf: null,
      //             open: false,
      //             active: false,
      //             modelcode: "distribute-list-2",
      //             modelname: "数据分发2",
      //             modeltype: "0",
      //             parentcode: "data-dev-summary",
      //             images: "uex-icon-platform-resource-allocation"
      //         }
      //     ],
      //     descr: null,
      //     extendConf: null,
      //     menuName: "数据开发总览",
      //     open: false,
      //     active: false,
      //     modelcode: "data-dev-summary",
      //     modelname: "数据开发总览",
      //     modeltype: "0",
      //     parentcode: null,
      //     images: "uex-icon-command-config"
      // },
      {
          url: "/console/dashboard",
          children: [
          ],
          menuName: "仪表盘",
          open: false,
          active: false,
          modelcode: "dashboard",
          modelname: "仪表盘",
          modeltype: "0",
          parentcode: null,
          images: ""
      },
      {
        url: "/console/build",
        children: [
        ],
        menuName: "代码构建",
        open: false,
        active: false,
        modelcode: "build",
        modelname: "代码构建",
        modeltype: "0",
        parentcode: null,
        images: ""
      },
      {
        url: "/console/image",
        children: [
        ],
        menuName: "镜像仓库",
        open: false,
        active: false,
        modelcode: "image",
        modelname: "镜像仓库",
        modeltype: "0",
        parentcode: null,
        images: ""
      }

  ]
}
export  default OBJ;
