<template>
    <div class="footer">
      <el-row :gutter='20'>
        <el-col :span="8"><div class="f_left">版权所有 © 2019 晓风个人博客</div></el-col>
        <el-col :span="8"><div class="f_mid">站点地图</div></el-col>
        <el-col :span="8"><div class="f_right"></div>备案号:皖ICP备18010820号</el-col>
     </el-row>
      
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scope>
.footer{
  width: 100%;
  height: 50px;
  margin:auto;
  margin-top: 20px;
  background-color: #F1F5F8;
  line-height: 50px;
  div{
    text-align: center;
    font-size: 18px;
  }
}

</style>

