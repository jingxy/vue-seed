import * as fetch from "./fetch"



const base = {
    /**
     * 用户登录
     */
    base_login(params) {
      return fetch.fetch('/signin', params,'get');
    }
}

export  default  Object.assign(base);
