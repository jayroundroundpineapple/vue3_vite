<template>
    <el-row style="min-height:100vh" class=" bg-indigo-500">
        <el-col :lg="16" :md="12" class="flex items-center justify-center">
            <div>
                <div class="font-bold text-5xl text-light-50 mb-4">欢迎光临</div>
            <div class=" text-gray-200 text-sm">jayjayjayasasdidinin</div>
            </div>
        </el-col>
        <el-col :lg="8" :md="12" class="right bg-light-50 flex items-center justify-center flex-col">
            <h2 class="font-bold text-3xl text-gray-800">欢迎回来</h2>
            <div class=" flex items-center justify-center my-5">
                <span class="h-[1px] w-16 bg-gray-200"></span>
                <span>账号密码登录</span>
                <span class="h-[1px] w-16 bg-gray-200"></span>
            </div>

            <!-- 表单事件 -->
            <el-form ref="formRef" :model="form" class="w-[250px]" :rules="rules" rd>
                <el-form-item prop="username">
                    <el-input v-model="form.username" placeholder="请输入用户名">
                        <template #prefix>
                            <el-icon class="el-input-icon"><user /></el-icon>
                        </template>
                        </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input v-model="form.password" placeholder="请输入密码" type="password" show-password>
                        <template #prefix>
                            <el-icon class="el-input-icon"><lock /></el-icon>
                        </template>
                        </el-input>
                </el-form-item>
                <el-form-item>
                    <el-button round color="#626aef" class="w-[250px]" type="primary" @click="onSubmit" :loading="loading">登 录</el-button>
                </el-form-item>
            </el-form>
        </el-col>
    </el-row>
</template>
<style>
    .right{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
    }
</style>
<script setup>
    import { ref,reactive } from 'vue'
    import {User,Lock} from '@element-plus/icons-vue'
    import {login,getinfo} from '~/api/manager.js'
    import {useRouter} from 'vue-router'
    import { setToken } from '~/composable/auth.js'
    import {Tip} from '~/composable/util.js'
    import {useStore} from 'vuex'
    
    const loading=ref(false)
    const router=useRouter()        //跳转回首页需要用到userouter
    const form = reactive({
      username:'',
      password:''
    })
    
    const rules={
        username:[
            { required: true, message: '用户名不能会空', trigger: 'blur' },
            { min: 3, max: 5, message: '用户名长度必须3-5个字符', trigger: 'blur' },
        ],
        password:[
            {
                required: true,
                message: '密码不能为空',
                trigger: 'blur',
    },
        ]
    }
    const store=useStore()  //拿到store实例
    const formRef=ref(null)
    const onSubmit = () => {
      formRef.value.validate((valid)=>{
        if(!valid){
            return false;
        }
        loading.value=true
        //console.log('验证通过');
        login(form.username,form.password)   //这里拿到的是promise，所以可以用.then拿到结果
        .then(res=>{
            //console.log(res)
            Tip('登录成功')   //成功提示
            //存储token和用户信息
            setToken(res.token)
             //获取用户信息
             getinfo().then(res=>{
                store.commit('SET_USERINFO',res)    //将res传入到store中
                console.log(res)
             })
            //跳转到后台首页
            setTimeout(()=>{
                router.push('/')
            },500)
        }).finally(()=>{
            loading.value=false
        })
      })
    }
    </script>