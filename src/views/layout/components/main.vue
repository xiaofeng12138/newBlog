<template>
<div class="boxWrap">
     <div class="box">
          <router-view />
        </div>
     <div class="sidebar">
         <div class="s_top">
               <el-tabs v-model="activeName">
                  <el-tab-pane name="first">
                    <span slot="label"><i class="iconfont icon-gonggao" style="padding-left:10px"></i> 公告</span>
                     <div class="desc">
                         <p>晓风个人博客</p>
                         <p>座右铭：付出不亚于任何人的努力  谦虚戒骄</p>
                         <p>博客简介：此博客是采用 Node.js + Mongodb数据库 + Layui + Koa2 + Pug 搭建一套简单的博客系统，源码我已经放在了GitHup上面，有兴趣可以看下(*^▽^*)</p>
                        </div>
                </el-tab-pane>
            </el-tabs>
             
         </div>

          <div class="s_top">
               <el-tabs v-model="activeName">
                  <el-tab-pane name="first">
                    <span slot="label"><i class="iconfont icon-gonggao" style="padding-left:10px"></i> 友情链接</span>
                     <div class="desc">
                         <p>晓风个人博客</p>
                         <p>座右铭：付出不亚于任何人的努力  谦虚戒骄</p>
                         <p>博客简介：此博客是采用 Node.js + Mongodb数据库 + Layui + Koa2 + Pug 搭建一套简单的博客系统，源码我已经放在了GitHup上面，有兴趣可以看下(*^▽^*)</p>
                        </div>
                </el-tab-pane>
            </el-tabs>
             
         </div>
     </div>
     </div>
</template>
<script>
export default {
    data() {
        return {
             activeName: 'first'
        }
    },
    
}
</script>
<style lang="scss" scope>
.boxWrap{
    display: flex;
    width: 60%;
    margin: auto;
    // height: 500px;
    margin-top:20px;
    justify-content: space-between;
.box{
    width: 72%;
    // background-color: #ccc;
}
 .sidebar{
    width: 25%;
    border:2px solid rgb(255, 0, 234);
    
    .s_top{
       width: 100%;
       background-color: #F3F9FF;
       margin-bottom: 20px;
       .desc{ 
           width: 95%;
           margin: auto;
           p{
               font-size: 15px;
               color: #666;
               line-height: 1.5;
               margin-bottom: 7px;
           }

       }
     }
   }
}
</style>

