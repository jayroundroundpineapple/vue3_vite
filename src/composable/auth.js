//用于定义一些方法  (可组合的)
import { useCookies } from '@vueuse/integrations/useCookies'
const TokenKey='admin-token'
const cookies=useCookies()

//获取token
export function getToken(){
    return cookies.get(TokenKey)
}

//设置token  
export function setToken(token){
    return cookies.set(TokenKey,token)
}

//删除token 
export function removeToken(){
    return cookies.remove(TokenKey)
}
