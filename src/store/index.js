import { createStore } from 'vuex'

// 创建一个新的 store 实例
const store = createStore({
    state () {
      return {
        //定义用户信息user对象，将信息存贮在这里
        user:{}
      }
    },
    mutations: {
      //定义一个修改用户信息函数
      SET_USERINFO(state,user){
        state.user=user;
      }
    }
  })
  export default store