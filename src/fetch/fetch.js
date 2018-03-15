/**
 * Created by jsb-cpyy on 2017/8/22.
 */
import axios from 'axios'
import qs from 'qs'
import Final from '../../static/baseSetting/Final'

// axios 配置
axios.defaults.timeout = 5000;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.headers.post['X-REQUESTED-WITH']='XMLHttpRequest';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';
axios.defaults.baseURL = Final.PROXY ; // '/action';

axios.interceptors.request.use((config) => {
  if(config.method != 'get'){
    if(config.headers["Content-Type"] == "application/json"){
      config.data =config.data;
    }else{
      config.data = JSON.stringify(config.data);
    }
  }
  return config;
},(error) =>{
  // _.toast("错误的传参", 'fail');
  return Promise.reject(error);
});

//返回状态判断 返回状态拦截器
axios.interceptors.response.use((res) =>{
  console.log("拦截器------",res);
  if(res.data.status==true && res.data.code==999){
    window.location.href=window.location.href.split("#")[0]+"#/login";
  }
  return res;
}, (error) => {
  console.log("网络异常", 'fail');
  return Promise.reject(error);
});


export function fetch(url, params,methodType,contentType) {
  return new Promise((resolve, reject) => {
    var tokens =localStorage.getItem('df_access_token');
    var lginToken = localStorage.getItem('token');
    var regions = localStorage.getItem('region');
    var token = '';
    var axiosConfig={
      method: methodType || "post",
      headers:{},
      url:url
    }
    if (tokens && regions) {
      var tokenarr = tokens.split(',');
      var region = regions.split('-')[2];
      if (/^\/lapi\/v1\/orgs/.test(url) || /^\/oapi/.test(url) || /^\/api/.test(url) || /^\/payment/.test(url) || /^\/v1\/repos/.test(url)) {

        token = tokenarr[region - 1];
      } else {
        token = tokenarr[0];
      }

    }

    if (/^\/hawkular/.test(url)) {
      axiosConfig.headers["Content-Type"] = "application/json";
      // axiosConfig.headers["Hawkular-Tenant"] = $rootScope.namespace;
    }
    if (/^\/registry/.test(url)) {
      var Auth = localStorage.getItem("Auth")
      axiosConfig.headers["Authorization"] = "Basic " + Auth;
    }
    if (axiosConfig.method == 'PATCH') {
      axiosConfig.headers["Content-Type"] = "application/merge-patch+json";
    }

    // if(contentType == "json"){
    //   axiosConfig.headers['Content-Type']="application/json";
    // }

    if(methodType == "get"){
      if(url == '/signin'){
          axiosConfig.headers['Authorization']="Basic " + lginToken;
      }else{
          axiosConfig.headers["Authorization"] = "Bearer " + token;
          axiosConfig.params=params
      }

    }else {
      axiosConfig.headers["Authorization"] = "Bearer " + token;
      axiosConfig.data=params
    }
    axios(axiosConfig).then(response => {
      resolve(response.data);
    }, err => {
      reject(err);
    })
      .catch((error) => {
        reject(error)
      });
  })
}
