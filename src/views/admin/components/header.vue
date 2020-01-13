<template>
    <div class="header">
        <div class="warp">
           <div class="username">
               欢迎您: {{Username}}
           </div>
           <div class="logout">
               <i class="iconfont icon-tuichu" @click="logout"></i>
           </div>
        </div>
    </div>
</template>

<script>
import {getCookie,getUsername,removeCookie,removeUsername,getRole} from '@/utils/cookie';
export default {
    data() {
        return {
             Username:getUsername(),
        }
    },

    methods: {
        logout(){
            this.$confirm('确定要退出吗', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              center: true
            }).then(() => {
                removeCookie()  //清除token
                removeUsername()  //清除用户名
                this.$store.commit('set_Token','')
                this.$store.commit('set_userName','')
                
                this.$message.success('退出成功')
                this.$router.push('/index')
             }).catch(() => {
            });
        },
    },
    
}
</script>
<style lang="scss" scoped>
.header{
    position: fixed;
    left: 250px;
    top: 0;
    height: 60px;
    width: 100vw;
    background-color: skyblue;
    .warp{
        display: flex;
        width: 20%;
        height: 100%;
        float: right;
        margin-right: 300px;
        .username{
            width: 60%;
            height: 100%;
            line-height: 60px;
            font-size: 20px;
            text-align: center;
            border-right: 2px solid #fff;
             border-left: 2px solid #fff;
        }
        .logout{
            width: 20%;
            height: 100%;
            line-height: 60px;
            font-size: 30px;
            text-align: center;
            cursor: pointer;
            border-right: 2px solid #fff;
        }
    }
}
</style>

