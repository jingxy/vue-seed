import * as fetch from "./fetch"
import global_ from './Global'
console.log('global_',global_)

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
      return fetch.fetch(global_.route.host+'/users/'+name, params,'get');
    },
    /**
     * 获取Project
     */
    base_project(params,name) {
      return fetch.fetch(global_.route.host+'/projects/'+name, params,'get');
    },
    /**
     * 获取buildconfig列表
     */
    // http://localhost:8090/oapi/v1/namespaces/jiangtong/buildconfigs/
    base_buildConfig(params) {
      return fetch.fetch(global_.route.host+'/namespaces/'+localStorage.getItem("namespace")+'/buildconfigs/', params,'get');
    },
    base_buildInstantiate(params,urlobj) {

      return fetch.fetch(global_.route.host+'/namespaces/'+localStorage.getItem("namespace")+'/buildconfigs/'+urlobj.name+'/instantiate', params,'post');
    },
    /**
     * 获取build列表
     */
    base_build(params) {
      return fetch.fetch(global_.route.host+'/namespaces/'+localStorage.getItem("namespace")+'/builds/', params,'get');
    },
     /**
     * 获取image列表 (镜像仓库——构像镜像) 
     */
    base_ImageStreamTag(params) {
      return fetch.fetch(global_.route.host+'/namespaces/'+localStorage.getItem("namespace")+'/imagestreamtags/', params,'get');
    },
}

export  default  Object.assign(base);
