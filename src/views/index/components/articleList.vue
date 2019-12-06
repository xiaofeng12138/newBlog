<template>
    <div class="article">

        <!-- 文章列表头部 -->
        <el-breadcrumb separator-class="el-icon-arrow-right">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>文章列表</el-breadcrumb-item>
        </el-breadcrumb>

        <!-- 文章列表 -->
        <div class="artList">
            <div class="a_left">
                <img src="@/public/girl.jpg" alt="">
            </div>
            <div class="a_right">
                <el-row :gutter='10'>
                    <el-col :span="8"><div class="artType"> WebPack+Node.js</div></el-col>
                    <el-col :span="16"><div class="artTitle">  假装这是一条很正经的文章标题 </div></el-col>
                </el-row>
                <div class="artContent">
                     后来才知道这是不可能的，除非把无常彻底赶到太平洋去。再后来又发现，这不是不可能，而是天大的无知，所以这个梦想注定智商情商永远欠费。再再后来又又发现，常的世界，其实有很多善良的人，他们从来不会把残的世界踩在脚底下，反而给予更多的温暖和帮助，只是有时候被世俗给连累了而已。再再再后来又又又发现，从哲学的角度欣赏，这个世界只有地球在运动。从心里学的角度诊断，只有迂腐的观念在心脏边缘不停地搬弄。从天文学的高度审视，只有狭隘的卑微在黑洞里爬不出来。
                </div>
                <div class="artBottom">
                    <el-row :gutter='20'>
                        <el-col :span="10"><div class="artTime"> 
                           <i class="iconfont icon-shizhong"></i>
                            2019-12-26 13:15:15</div></el-col>
                        <el-col :span="8"><div class="artAuthor"> 
                            <i class="iconfont icon-yonghu"></i> Xiao Feng </div></el-col>
                        <el-col :span="6"><div class="artDetail" @click="readInfo">  阅读详情>> </div></el-col>
                    </el-row>
                </div>
            </div>
        </div>
         <div class="artList">
            <div class="a_left">
                <img src="@/public/girl.jpg" alt="">
            </div>
            <div class="a_right">
                <el-row :gutter='10'>
                    <el-col :span="8"><div class="artType"> WebPack+Node.js</div></el-col>
                    <el-col :span="16"><div class="artTitle">  假装这是一条很正经的文章标题 </div></el-col>
                </el-row>
                <div class="artContent">
                     后来才知道这是不可能的，除非把无常彻底赶到太平洋去。再后来又发现，这不是不可能，而是天大的无知，所以这个梦想注定智商情商永远欠费。再再后来又又发现，常的世界，其实有很多善良的人，他们从来不会把残的世界踩在脚底下，反而给予更多的温暖和帮助，只是有时候被世俗给连累了而已。再再再后来又又又发现，从哲学的角度欣赏，这个世界只有地球在运动。从心里学的角度诊断，只有迂腐的观念在心脏边缘不停地搬弄。从天文学的高度审视，只有狭隘的卑微在黑洞里爬不出来。
                </div>
                <div class="artBottom">
                    <el-row :gutter='20'>
                        <el-col :span="10"><div class="artTime"> 
                           <i class="iconfont icon-shizhong"></i>
                            2019-12-26 13:15:15</div></el-col>
                        <el-col :span="8"><div class="artAuthor"> 
                            <i class="iconfont icon-yonghu"></i> Xiao Feng </div></el-col>
                        <el-col :span="6"><div class="artDetail" @click="readInfo">  阅读详情>> </div></el-col>
                    </el-row>
                </div>
            </div>
            
        </div>
         <div class="artList">
            <div class="a_left">
                <img src="@/public/girl.jpg" alt="">
            </div>
            <div class="a_right">
                <el-row :gutter='10'>
                    <el-col :span="8"><div class="artType"> WebPack+Node.js</div></el-col>
                    <el-col :span="16"><div class="artTitle">  假装这是一条很正经的文章标题 </div></el-col>
                </el-row>
                <div class="artContent">
                     后来才知道这是不可能的，除非把无常彻底赶到太平洋去。再后来又发现，这不是不可能，而是天大的无知，所以这个梦想注定智商情商永远欠费。再再后来又又发现，常的世界，其实有很多善良的人，他们从来不会把残的世界踩在脚底下，反而给予更多的温暖和帮助，只是有时候被世俗给连累了而已。再再再后来又又又发现，从哲学的角度欣赏，这个世界只有地球在运动。从心里学的角度诊断，只有迂腐的观念在心脏边缘不停地搬弄。从天文学的高度审视，只有狭隘的卑微在黑洞里爬不出来。
                </div>
                <div class="artBottom">
                    <el-row :gutter='20'>
                        <el-col :span="10"><div class="artTime"> 
                           <i class="iconfont icon-shizhong"></i>
                            2019-12-26 13:15:15</div></el-col>
                        <el-col :span="8"><div class="artAuthor"> 
                            <i class="iconfont icon-yonghu"></i> Xiao Feng </div></el-col>
                        <el-col :span="6"><div class="artDetail" @click="readInfo">  阅读详情>> </div></el-col>
                    </el-row>
                </div>
            </div>
            
        </div>
       
        
    </div>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },

    methods: {
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
}
</style>

