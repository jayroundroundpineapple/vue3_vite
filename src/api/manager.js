import axios from '~/axios.js'

export function login(username,password){  //请求的参数  
    //return返回promise对象，
   return axios.post("/admin/login",{  //第一个参数就是请求的url
        username,                   
        password         //第二个参数就是body需要传的数据username和password
    })
}
export function getinfo(){
    return axios.post('/admin/getinfo')
}