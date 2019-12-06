<template>
    <div id="login">
       <div class="login-wrap">
            <ul class="menu-tab">
                <li v-for="(item,index) in menuTab" :key="index" :class="{'current': item.current}" @click="toggleMenu(item)">
                {{ item.text }}
                </li>
            </ul>

            <el-form :model="ruleForm" status-icon :rules="rules2" ref="formName" class="login-form" size="medium" >

            <el-form-item  prop="email" class="item-from" >
                <label>用户名：</label>
                <el-input type="text" v-model="ruleForm.email" auto-complete="off"></el-input>
            </el-form-item>

            <el-form-item  prop="password" class="item-from">
                <label>密码：</label>
                <el-input type="password" v-model="ruleForm.password" auto-complete="off" maxlength = '20' minlength='6'></el-input>
            </el-form-item>

             <el-form-item  prop="passwords" class="item-from" v-show ="modal === 'register'">
                <label>重复密码：</label>
                <el-input type="passwords" v-model="ruleForm.passwords" auto-complete="off" maxlength = '20' minlength='6'></el-input>
            </el-form-item>

            <el-form-item>
                <el-button type="primary" @click="submitForm('formName')" class="login-btn block">提交</el-button>
            </el-form-item>
             <el-form-item>
                <el-button type="primary" @click="goBack" class="login-btn block">返回首页</el-button>
            </el-form-item>

             
            </el-form>
        </div>
    </div>
</template>
<script>
import { stripscript , checkRegEmial ,checkRegPass,checkRegRepass} from '@/utils/reg'
import {Login,Reg} from '@/api/login.js';
import  { setCookie ,setUsername } from '@/utils/cookie'

export default {
    data() {
        //正则校验
        var checkEmail = (rule, value, callback) => {
          if (!value) {
            return callback(new Error('用户名不能为空'));
          }else if( checkRegEmial(value) ){
            return callback(new Error('用户名由数字和字母组成，且不低于5位'));
          }else{
            callback();
          }
       };

      var checkPassword = (rule, value, callback) => {
         //校验密码
       this.ruleForm.password = stripscript(value);
        value = this.ruleForm.password;

        if (value === '') {
          callback(new Error('密码不能为空'));
        } else if(checkRegPass(value)){
              return callback(new Error('密码由纯数字组成且不低于5位'));
        }else{
            callback()
        }
      };

      var checkPasswords = (rule, value, callback) => {
         //校验重复密码
       if(this.modal == 'login'){ callback() }  //使用v-if 不需要判断  使用v-show时候 需要判断
       this.ruleForm.passwords = stripscript(value);
        value = this.ruleForm.passwords;
        if (value === '') {
          callback(new Error('请输入重复密码'));
        } else if(value !=  this.ruleForm.password ){
              return callback(new Error('两次输入不一致'));
        }else{
            callback()
        }
      };

        return {
            menuTab:[
                {text:'登录',current:true,type:'login'},
                {text:'注册',current:false,type:'register'},
            ],
            modal:'login',
            ruleForm: {
              email: '',
              password: '',
              passwords:'',
            },
            rules2: {
              email: [
                  { validator: checkEmail, trigger: 'blur' }  //校验邮箱
              ],
              password: [
                  { validator: checkPassword, trigger: 'blur' } //密码
              ],
              passwords: [
                  { validator: checkPasswords, trigger: 'blur' } //重复密码
              ],
            }
         };
    },
    created() {
        
    },
    mounted() {
        
    },
    methods: {

      //返回主页
        goBack(){
          this.$router.push('/')
        },


      //菜单切换
        toggleMenu(data){
            this.menuTab.forEach( (ele) => {
               ele.current = false
            })
            data.current = true
            this.$refs.formName.resetFields();
            this.modal = data.type
        },

        //登录函数
        login(){
         let data = {
                  username:this.ruleForm.email,
                  password:this.ruleForm.password,
                }
                 Login(data).then((res)=>{
                   console.log(res)
                   if(res.data.code =='200'){
                     this.$message.success(res.data.msg)
                     setCookie(res.data.token)
                     setUsername(res.data.username)
                     this.$router.push('/index')
                   }else{
                      this.$message.error(res.data.msg)
                   }
                 }).catch((error)=>{
                    console.log(error)
                 })
        },

         //注册函数
        register(){
           let data = {
                  username:this.ruleForm.email,
                  password:this.ruleForm.password,
                  repasswd:this.ruleForm.passwords,
                }
                 Reg(data).then((res)=>{
                   if(res.data.code =='200'){
                     this.$message.success(res.data.msg)
                     this.toggleMenu(this.menuTab[0])
                   }else{
                      this.$message.error(res.data.msg)
                   }
                 }).catch((error)=>{
                    console.log(error)
                 })
        },
        
      //表单登录函数
       submitForm(formName){
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.modal == 'login' ? this.login() : this.register()
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
        
    },
    
}
</script>

<style lang="scss" scoped>
#login {
  height: 100vh;
  background-color: #344a5f;
}
.login-wrap {
  width: 330px;
  margin: auto;
}
.menu-tab {
  text-align: center;
  li {
    display: inline-block;
    width: 88px;
    line-height: 36px;
    font-size: 14px;
    color: #fff;
    border-radius: 2px;
    cursor: pointer;
  }
  .current {
    background-color: rgba(0, 0, 0, .1);
  }
}
.login-form {
  margin-top: 29px;
  label {
    display: block;
    margin-bottom: 3px;
    font-size: 14px;
    color: #fff;
  }
  .item-from { margin-bottom: 13px; }
  .block {
    display: block;
    width: 100%;
  }
  .login-btn { margin-top: 19px; }
}
</style>
