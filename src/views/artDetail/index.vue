<template>
    <div class="detail">
        <div class="header">
            <p>{{arrList.title}}</p>
                 <el-row :gutter='10' style="width:60%;text-align:center;margin:auto;">
                        <el-col :span="10"><div class="artTime"> 
                           <i class="iconfont icon-shizhong"></i>
                            {{arrList.time}} </div></el-col>
                        <el-col :span="8"><div class="artTime"> 
                            <i class="iconfont icon-yonghu"></i> {{arrList.author}}</div></el-col>
                        <el-col :span="6"><div class="artTime"> 
                            <i class="iconfont icon-fenlei"></i>{{arrList.artType}}</div></el-col>
                </el-row>
                <hr/>
        </div>
        <div class="content" v-html="arrList.content">
          {{arrList.content}}
        </div>
        
    </div>
</template>
<script>
import  {ArtDetail} from '@/api/login'
export default {
    data() {
        return {
            arrList:[]
            
        }
    },
    mounted() {
        this.queryInfo()
    },
    methods: {
        queryInfo(){
            let data = {
               id : this.$route.query.id
            }
            ArtDetail(data).then((res)=>{
                this.arrList = res.data.data
                if( res.data.code !== '200'){
                  this.$message.error(res.data.msg)
                }
            })
        }
    },
    
}
</script>
<style lang="scss" scoped>
.detail{
    background-color: #fff;
    border: 1px solid rgb(194, 255, 192);
    padding: 10px;
    .header{
        text-align: center;
        padding-top: 10px;
        height: 60px;
        width: 100%;
        p{
            font-size: 20px;
            color: #666666;
            margin-bottom: 10px;
        }
        .artTime{
            color: #C5C5C5;
            i{
                margin-right: 5px;
                font-size: bold;
            }
        }
    }
    .content{
        text-indent: 30px;
        line-height: 20px;
        padding: 0 10px;
        margin-top: 10px;
        color: #666;
    }
 


}

</style>
