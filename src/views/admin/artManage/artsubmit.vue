<template>
    <div class="artSubmit">
        <div class="nav">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>后台管理</el-breadcrumb-item>
                <el-breadcrumb-item>文章管理</el-breadcrumb-item>
                <el-breadcrumb-item>文章发布</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm" >
            <el-form-item label="文章分类" prop="artType">
                    <el-select v-model="ruleForm.artType" placeholder="请选择活动区域">
                    <el-option label="HTML" value="HTML"></el-option>
                    <el-option label="CSS" value="CSS"></el-option>
                    <el-option label="JavaScript" value="JavaScript"></el-option>
                    <el-option label="Vue" value="Vue"></el-option>
                    <el-option label="Node.js" value="Node.js"></el-option>
                    <el-option label="React" value="React"></el-option>
                    <el-option label="心情分享" value="心情分享"></el-option>
                </el-select>
            </el-form-item>
        <el-form-item label="文章标题" prop="title">
            <el-input v-model="ruleForm.title" style="width:600px"></el-input>
        </el-form-item>
        <el-form-item label="文章描述" prop="artDesc">
            <el-input v-model="ruleForm.artDesc" style="width:600px"></el-input>
        </el-form-item>
         <el-form-item label="图片描述" style="width:400px">
            <el-upload
                class="upload-demo"
                ref="upload"
                action="http://127.0.0.1:8080/api/upload"
                :on-success = fileSuccess
                :file-list="fileList"
                :auto-upload="true">
                <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                
              </el-upload>
        </el-form-item>
    
        <el-form-item label="文章内容" style="height:450px">
          <div class="warp" style="height:450px">
            <!-- 富文本内容 -->
             <div id="wangeditor">
               <div ref="editorElem" style="height:410px;max-height:500px;!important" ></div>
            </div>

          </div>

          

        </el-form-item>
        <el-form-item >
            <el-button type="primary" @click="submitForm('ruleForm')" size='medium'>提交</el-button>
            <!-- <el-button type="primary" @click='fn'>提交</el-button> -->
            <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
        </el-form>
    </div>
</template>
<script>
import E from "wangeditor";
import {getUsername,getRole} from '@/utils/cookie'
import { AddArticle } from '@/api/login'
export default {
     data() {
      return {

        //文件上传
        fileList:[],
        picUrl:'',
        //富文本参数
        editor: null,
        editorContent: '',



        time:new Date().getFullYear() +
        "-" +
        (new Date().getMonth() + 1) +
        "-" +
        new Date().getDate() +
        " " +
        (function() {
          return new Date().getHours() < 10
            ? "0" + new Date().getHours()
            : new Date().getHours();
        })() +
        ":" +
        (function() {
          return new Date().getMinutes() < 10
            ? "0" + new Date().getMinutes()
            : new Date().getMinutes();
        })() +
        ":" +
        (function() {
          return new Date().getSeconds() < 10
            ? "0" + new Date().getSeconds()
            : new Date().getSeconds();
        })(),
        ruleForm: {
          artType: '',  //文章分类
          title: '',  //文章标题
          artDesc: '',
        },
        rules: {
          title: [
            { required: true, message: '请输入文章标题', trigger: 'blur' },
          ],
          artType: [
            { required: true, message: '请选择文章类型', trigger: 'change' }
          ],
          artDesc: [
            {  required: true, message: '请输入文章描述', trigger: 'change' }
          ],
        }
      };
    },
     // catchData是一个类似回调函数，来自父组件，当然也可以自己写一个函数，主要是用来获取富文本编辑器中的html内容用来传递给服务端
    // props: ['catchData'], // 接收父组件的方法


    mounted() {
    this.editor = new E(this.$refs.editorElem);
    // this.editor.customConfig.uploadImgShowBase64 = true  //显示本地图片上传选项
    this.editor.customConfig.uploadImgServer = '/upload'
    // 编辑器的事件，每次改变会获取其html内容
    this.editor.customConfig.onchange = html => {
      this.editorContent = html;
    };
      this.editor.customConfig.linkImgCallback = function (url) {
        console.log(url) // url 即插入图片的地址
    }
    this.editor.customConfig.menus = [
      // 菜单配置
      'head', // 标题
      'bold', // 粗体
      'fontSize', // 字号
      'fontName', // 字体
      'italic', // 斜体
      'underline', // 下划线
      'strikeThrough', // 删除线
      'foreColor', // 文字颜色
      'backColor', // 背景颜色
      'link', // 插入链接
      'list', // 列表
      'justify', // 对齐方式
      'quote', // 引用
      'emoticon', // 表情
      'image', // 插入图片
      'table', // 表格
      'video',
      'code', // 插入代码
      'undo', // 撤销
      'redo' // 重复
    ];
     this.editor.create(); // 创建富文本实例
    //  this.editor.txt.html('<p>用 JS 设置的内容</p>')
   },
    methods: {

      //文件上传
      fileSuccess(response, file, fileList){
        // console.log(response.data.src)
        this.picUrl = response.data.src
      },

      
      fn(){
        console.log(this.editorContent)
      },
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // this.$refs.upload.submit();
            if( getRole() == 1){
               this.$message.error('您的权限不足，无法发布文章')
               return false
            }
            let data = {
              title:this.ruleForm.title,   //文章标题
              author:getUsername(),
              content:this.editorContent,
              artdesc:this.ruleForm.artDesc,
              artType:this.ruleForm.artType,
              time:this.time,
              picUrl:this.picUrl
            }
            AddArticle(data).then((res)=>{
              console.log(res)
              if(res.data.code == '200'){
                  this.$message.success(res.data.msg)
              }else{
                this.$message.error(res.data.msg)
              }
              
            }).catch((err)=>{
              console.log(err)
            })
            
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
    
}
</script>
<style lang="scss" scoped>
.artSubmit{
    .nav{
        margin: 20px;
    }


  .el-form-item{
      margin-bottom: 22px;
  }
}
</style>
