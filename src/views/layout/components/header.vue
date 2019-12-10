<template>
    <div class="index">
       <div class="header">
           <div class="nav">
            <el-row :gutter="10">
                <el-col :span="16">
                    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" router>
                <el-menu-item index="index">主页</el-menu-item>
                <el-submenu index="exhibition">
                    <template slot="title">效果展示</template>
                    <el-menu-item index="2-1">HTML</el-menu-item>
                    <el-menu-item index="2-2">JS</el-menu-item>
                    <el-menu-item index="2-3">框架</el-menu-item>
                </el-submenu>
                <el-menu-item index="studyInfo">前端学习</el-menu-item>
                <el-menu-item index="lifeInfo">生活随笔</el-menu-item>
                <el-menu-item index="myselfInfo">博主简介</el-menu-item>
            </el-menu>
                </el-col>
                <el-col :span="8">
                    <div class='login'>
                        <div v-if = "Login"> 
                            <span>欢迎您：{{Username}}</span>
                            <span @click='admin'>后台管理</span>
                            <span @click='logout'>退出</span>
                        </div>
                        <div v-else> 
                            <span @click="login">登录</span>
                            <span @click="login">注册</span>
                        </div>
                    </div>
                    
                </el-col>
            </el-row>

               
           </div>
       </div>
    </div>
</template>

<script>
import {getCookie,getUsername,removeCookie,removeUsername} from '@/utils/cookie';
export default {
    data(){
        return{
            activeIndex:'index',
            Login:Boolean(getCookie()),
            Username:getUsername()
        }
    },
    mounted() {
        console.log(Boolean(getUsername()))
    },
    methods: {
        login(){
            this.$router.push('/login')
        },
        logout(){
             this.$confirm('确定要退出吗', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              center: true
            }).then(() => {
                removeCookie()  //清除token
                removeUsername()  //清除用户名
                // store.commit('app/SET_TOKEN','')  //清除store 里面的token
                // store.commit('app/SET_USERNAME','')  //清除store 里面的username
                
                this.$message.success('退出成功')
                 this.$router.go(0)
             }).catch(() => {
            });
          
        },

        //后台管理页面
        admin(){
            this.$router.push('/admin')
        }
    },
    
}
</script>
<style lang="scss" scope>
.index{
    position:sticky;
    top:0;
    left: 0;
    z-index: 999;
    
   .header{
        background-color: #fff;
       
       .nav{
           width: 60%;
           margin: auto;

            .el-menu-item{
                font-size: 16px;
                padding: 0 50px;
                
            }
            .el-menu.el-menu--horizontal{
                border-bottom: none;
            }  
            .login{
                line-height:60px;
                span{
                    font-size:16px;
                    margin :0 20px;
                    cursor:pointer;
                }
            }  
         }
   }
}
</style>


