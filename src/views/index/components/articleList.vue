<template>
    <div class="article">

        <!-- 文章列表头部 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>文章列表</el-breadcrumb-item>
        </el-breadcrumb>

        <!-- 文章列表 -->
        <div class="artList" v-for="(item,index) in ArtInfoList" :key="index">
            <div class="a_left">
                <img src="@/public/girl.jpg" alt="">
            </div>
            <div class="a_right">
                <el-row :gutter='10'>
                    <el-col :span="8"><div class="artType">{{ item.artType }}</div></el-col>
                    <el-col :span="16"><div class="artTitle">  {{ item.title}} </div></el-col>
                </el-row>
                <div class="artContent">
                     {{item.artdesc}}
                </div>
                <div class="artBottom">
                    <el-row :gutter='20'>
                        <el-col :span="10"><div class="artTime"> 
                           <i class="iconfont icon-shizhong"></i>
                            {{item.time}}</div></el-col>
                        <el-col :span="8"><div class="artAuthor"> 
                            <i class="iconfont icon-yonghu"></i> {{item.author}}</div></el-col>
                        <el-col :span="6"><div class="artDetail" @click="readInfo">  阅读详情>> </div></el-col>
                    </el-row>
                </div>
            </div>
        </div>

        <el-pagination
            background
            layout="prev, pager, next,total"
            :total="this.total"
            @current-change="this.currentPageChange"
            >
        </el-pagination>
    </div>
</template>

<script>
import {ArticleList} from '@/api/login'
export default {
    data() {
        return {
            ArtInfoList:[],
            total:0
        }
    },

    mounted() {
        this.getInfoList(1)
    },

    methods: {  
     getInfoList(page){
         let data = {
             page:page
         }
       ArticleList(data).then((res)=>{
          console.log(res.data.data)
          console.log(res.data.count)
          this.ArtInfoList = res.data.data
          this.total = res.data.count
       }).catch((err)=>{
        console.log(err)
       })
     },

      currentPageChange(currentPage) {
        this.getInfoList(currentPage);
    },


    readInfo(){
           console.log(1)
           this.$router.push('/artDetailInfo')
        }
    },
    
}
</script>
<style lang="scss" scoped>
.article{
    .artList{
        width: calc(100% - 5 );
        display: flex;
        justify-content: space-between;
        height: 200px;
        margin: 20px 0;
        box-shadow: #666 5px 5px 5px ; 
        border: 2px solid #e9e9e9;
        .a_left{
            width: 30%;
            height: 100%;
            img{
                height: 180px;
                width: 90%;
                margin: auto;
                margin-top: 10px;
            }
        }
        .a_right{
            width: 69%;
            height: 100%;
            background-color: #FFFFFF;
            .el-row {
                margin-bottom: 10px;
                &:last-child {
                  margin-bottom: 0;
                }
            }
            .artType {
                background: #06AAFF;
                font-size: 18px;
                height: 30px;
                line-height: 30px;
                text-align: center;
                color: #fff;
                border-radius: 20px;
                margin-top: 10px;
                margin-left: 10px;
            }
            .artTitle {
                font-size: 15px;
                height: 30px;
                line-height: 30px;
                margin-top: 10px;
                margin-left: 10px;
                cursor: pointer;
            }
            .artContent{
                height: 100px;
                width: 95%;
                display:-webkit-box;
                -webkit-line-clamp:3;
                -webkit-box-orient:vertical;
                overflow:hidden;
                font-size: 16px;
                text-indent: 30px;
                line-height: 35px;
                padding: 0 10px;
                color:#CDB8B9;
            }
            .artBottom{
                margin-top: 15px;
                margin-left: 10px;
                .artTime{
                    font-size: 16px;
                }
                .artAuthor{
                   font-size: 16px;
                }
                .artDetail{
                   font-size: 16px;
                   background-color: #DDDDDD;
                   color:#098FFF;
                   margin-right: 10px;
                   text-align: center;
                   cursor: pointer;
                }
              }
           
            }
    }
    .el-pagination{
    text-align: center;
   }
}
</style>

