import * as fetch from "./fetch"



const base = {
    getNamespace(){
      return localStorage.getItem("namespace")
    },
    /**
     * 用户登录
     */
    base_login(params) {
      return fetch.fetch('/signin', params,'get');
    },
    /**
     * 获取用户信息
     */
    base_user(params,name) {
      return fetch.fetch('/oapi/v1/users/'+name, params,'get');
    },
    /**
     * 获取Project
     */
    base_project(params,name) {
      return fetch.fetch('/oapi/v1/projects/'+name, params,'get');
    },
    /**
     * 获取buildconfig列表
     */
    base_buildConfig(params) {
      return fetch.fetch('/oapi/v1/namespaces/'+localStorage.getItem("namespace")+'/buildconfigs/', params,'get');
    },
    base_buildInstantiate(params,urlobj) {

      return fetch.fetch('/oapi/v1/namespaces/'+localStorage.getItem("namespace")+'/buildconfigs/'+urlobj.name+'/instantiate', params,'post');
    },
    /**
     * 获取build列表
     */
    base_build(params) {
      return fetch.fetch('/oapi/v1/namespaces/'+localStorage.getItem("namespace")+'/builds/', params,'get');
    }
}

export  default  Object.assign(base);
