<template>
    <div class="nav">
         <div class="img">
            <img src="@/assets/logo.png" alt="" @click="goHome">

            <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            background-color ='transparent'
             text-color='#fff'
            active-text-color	="#639FB5"
            router
          >
            <el-submenu index="1">
                <template slot="title">
                <i class="el-icon-location"></i>
                <span>文章管理</span>
                </template>
                <el-menu-item index="artSubmit">文章发布</el-menu-item>
                <el-menu-item index="artSearch">文章查询</el-menu-item>
               
            </el-submenu>
            <el-submenu index="2">
                <template slot="title">
                <i class="el-icon-location"></i>
                <span>信息管理</span>
                </template>
                <el-menu-item index="artSubmit">文章发布</el-menu-item>
                <el-menu-item index="artSearch">文章查询</el-menu-item>
               
            </el-submenu>
             <el-submenu index="3">
                <template slot="title">
                <i class="el-icon-location"></i>
                <span>用户管理</span>
                </template>
                <el-menu-item index="artSubmit">文章发布</el-menu-item>
                <el-menu-item index="artSearch">文章查询</el-menu-item>
               
            </el-submenu>
            </el-menu>



        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
      methods: {
          goHome(){
              this.$router.push('/')
          }
    //   handleOpen(key, keyPath) {
    //     console.log(key, keyPath);
    //   },
    //   handleClose(key, keyPath) {
    //     console.log(key, keyPath);
    //   }
    }
}
</script>
<style lang="scss" scoped>
.nav{
    position: fixed;
    top: 0;
    left: 0;
    width: 250px;
    height: 100vh;
    background-color: #3D6B8C;
    .img{
         width:240px; 
         height: 150px;
         img{
             margin: auto;
             display: block;
             width: 150px;
             height: 150px;
             cursor: pointer;
         }
     }
}
</style>


