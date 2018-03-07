<template>
  <section class="login_bg">
    <div class="pos_center">
      <h1>DataFundry</h1>
      <div class="login_con">
        <h3>欢迎登录DataFundry</h3>
        <hr   noshade="noshade">
        <!--<form>  </form>-->
          <p class="form_warning">{{errorMsg}} </p>
          <div class="form_list">
            <span class="img_person"></span>
            <input @keyup.enter="keyLogin" v-model="userName" type="text" id="UserName"  placeholder="请输入用户名"  required autocomplete="off">
          </div>
          <div class="form_list">
            <span class="img_loack"></span>
            <input @keyup.enter="keyLogin" v-model="password" type="password" id="PassWord"   placeholder="请输入密码"  errormsg="密码长度为6-16位" autocomplete="off" required/>
          </div>
          <!--<div>-->
            <!--<input type="checkbox"  class="" checked="checked"/>-->
            <!--<label>保持我的登录状态</label>-->
          <!--</div>-->

          <div>
            <button v-on:click="login">登  录</button>
          </div>


      </div>
    </div>
  </section>
</template>
<script>
  import * as util from "./../util/util"
  import Final from "../../static/baseSetting/Final"
  import api from "./../fetch/api"
  import md5 from "js-md5"
  let Base64 = require('js-base64').Base64;
  import axios from 'axios'
  export default {
      data() {
          return {
              errorMsg:"",
              userName:"",
              password:"",
              i:100
          }
      },
      created (){
//        alert("create");
      },
      mounted () {
        this.bodyListener = (e) => {
          if (e.keyCode === 13 && e.target === document.body){
            this.login();
          }
        }
        document.body.addEventListener('keydown', this.bodyListener, false)
      },
      components :{
      },
      methods : {
        keyLogin (){
            console.log("13key down");
            this.login();
//              console.log(key.code);
//              if(key.code==13){
//                  this.login();
//              }
          },
          login (){
              var param= {};
              if(!this.userName){
                  this.errorMsg="请输入登录名";
                  return;
              }
              if(!this.password){
                  this.errorMsg="请输入密码";
                  return;
              }
              param = {
                  headers: {
                      Authorization: 'Basic ' + Base64.encode(this.userName + ':' + this.password)
                  }
              }
              this.errorMsg="";
              api.base_login(param)
              .then(res => {
                  localStorage.setItem('token', Base64.encode(this.userName + ':' +this.password))
                  var arr = [];
                  for(var  i = 0 ; i < res.length;i++){
                      var index = res[i].region.split('-')[2]
                      arr[index - 1] =  res[i].access_token
                  }
                  var arrstr = arr.join(',');
                  this.$router.push('console/dashboard');
                  Cookie.set('df_access_token', arrstr, 23 * 3600 * 1000);
                  this.$store.commit('saveUserData','sdadasdadasdas')



              }).catch(error => {

              })
          },

      }
  }



</script>
<style>
@import "./../assets/css/common.css";
@import "./../assets/css/style.css";
</style>
