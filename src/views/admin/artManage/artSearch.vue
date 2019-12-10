<template>
    <div class="artSearch">
        <div class="nav">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>后台管理</el-breadcrumb-item>
                <el-breadcrumb-item>文章管理</el-breadcrumb-item>
                <el-breadcrumb-item>文章查询</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="table">
             <el-table
            :data="tableData"
            :header-cell-style="{background:'#e9e9e9',color:'#606266',fontWeight:'bold'}"
            border
            style="width: 100%">
            <el-table-column
            prop="time"
            label="发布日期"
            align="center"
            width="180">
            </el-table-column>
            <el-table-column
            prop="author"
            label="文章作者"
            align="center"
            width="180">
            </el-table-column>
            <el-table-column
            prop="artType"
            align="center"
            label="文章类型"
             width="150">
            </el-table-column>
             <el-table-column
            prop="title"
            align="center"
            label="文章标题">
            </el-table-column>
             <el-table-column
            prop="artdesc"
            align="center"
            label="文章描述">
            </el-table-column>
            <el-table-column label="操作" align="center" width="100">
            <template slot-scope="scope">
                <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
            </el-table-column>
        </el-table>
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
import {ArticleList,DelArticle} from '@/api/login'
export default {
    data() {
        return {
         tableData: [] ,
         total:0

        }
    },
    mounted() {
        this.fn(1)
        
    },
    methods: {
        fn(page){
            let data = {
             page:page
         }
            ArticleList(data).then((res)=>{
              console.log(res)
               this.tableData = res.data.data
               this.total = res.data.count

            })
        },
      handleDelete(index, row) {
        console.log(row._id);
         this.$confirm('确定要删除这条信息吗？', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              center: true
            }).then(() => {
                let data = {
                    id:row._id
                }
                DelArticle(data).then((res)=>{
                  if(res.data.code == '200'){
                    this.$message.success(res.data.msg)
                    this.fn(1);
                  }else{
                    this.$message.error(res.data.msg)
                  }
                })
             }).catch(() => {
            });
      },

      //翻页
       currentPageChange(currentPage) {
        this.fn(currentPage);
    },
        
    },
    
}
</script>
<style lang="scss" scoped>
.artSearch{
    .nav{
        margin: 20px;
    }
    .table{
        margin: 20px;
    }
    .el-pagination{
    text-align: center;
   }

}
</style>

