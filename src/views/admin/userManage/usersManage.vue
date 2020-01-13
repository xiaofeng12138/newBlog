<template>
    <div class="artSearch">
        <div class="nav">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>后台管理</el-breadcrumb-item>
                <el-breadcrumb-item>用户管理</el-breadcrumb-item>
                <el-breadcrumb-item>用户查询</el-breadcrumb-item>
            </el-breadcrumb>
        </div>

        <div class="table">
             <el-table
            :data="tableData"
            :header-cell-style="{background:'#e9e9e9',color:'#606266',fontWeight:'bold'}"
            border
            style="width: 100%">
            <el-table-column
            prop="username"
            label="用户名称"
            align="center"
           >
            </el-table-column>
            <el-table-column
            prop="time"
            label="注册时间"
            align="center"
           >
            </el-table-column>
            <el-table-column
            prop="role"
            align="center"
            label="用户权限"
            :formatter="restRole"
            >
            </el-table-column>
             <el-table-column
            prop="password"
            align="center"
            label="登录密码"
             >
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
import {QueryUser,DelUsers} from '@/api/login'
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
        //重置用户权限显示
        restRole(row){
            if(row.role > 1 ){
                return  '超级管理员'
            }else{
                return '普通用户'
            }
        },
        fn(page){
            let data = {
             page:page
         }
            QueryUser(data).then((res)=>{
               this.tableData = res.data.data
               this.total = res.data.count

            })
        },
      handleDelete(index, row) {
          if(row.role > 1 ){
              this.$message.error('管理员角色无法删除!!')
              return false
          }else{   
                this.$confirm('确定要删除这个用户吗？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    center: true
                    }).then(() => {
                        let data = {
                            id:row._id
                        }
                        DelUsers(data).then((res)=>{
                        if(res.data.code == '200'){
                            this.$message.success(res.data.msg)
                            this.fn(1);
                        }else{
                            this.$message.error(res.data.msg)
                        }
                        })
                    }).catch(() => {
                });
          }
      
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

