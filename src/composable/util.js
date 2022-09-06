import { ElNotification } from 'element-plus'
//成功提示
export function Tip(message,type="success"){
    ElNotification({  //提示成功
        message,
        type,
        duration:2000
     })
}