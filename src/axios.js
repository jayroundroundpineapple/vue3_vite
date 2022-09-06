import axios from 'axios'
import {Tip} from '~/composable/util.js'
import { getToken } from '~/composable/auth.js'
//创建axios实例
const service=axios.create({
    baseURL:'/api'   //域名根路径一定是baseURL
})
// 添加请求拦截器
service.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么//往头部自动携带token
    const token=getToken()
    if(token){  //token存在的时候才携带
        config.headers["token"]=token
    }
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
service.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response.data.data;
  }, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    Tip(error.response.data.msg,'error')
    return Promise.reject(error);
  });
export default service