<template>
    <div class="index">
       <div class="header">
           <div class="nav">
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
           </div>
       </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            activeIndex:'index'
        }
    }
    
}
</script>
<style lang="scss" scope>
.index{
   .header{
       background-color: #e9e9e9;
       
       .nav{
           width: 60%;
           margin: auto;

            .el-menu-item{
                font-size: 16px;
                padding: 0 60px;
                
            }
            .el-menu.el-menu--horizontal{
                border-bottom: none;
            }    
         }
   }
}
</style>


