const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/xfBlog',{ useNewUrlParser: true, useUnifiedTopology: true })

mongoose.connection.on('open',()=>{
    console.log('数据库连接成功')
})
mongoose.connection.on('error',()=>{
    console.log('数据库连接失败')
})

//设置用户的Schema
let userSchema = new mongoose.Schema({
    username:{type:String,required:true},
    password:{type:String,required:true},
    repasswd:{type:String,required:true}
},{
  versionKey:false
 })


 //设置文章的Schema
let articleSchema = new mongoose.Schema({
    title:{type:String,required:true},  //文章作者
    author:{                            //文章作者
        type:String,
        ref:'user'
    },
    time:{type:String,required:true},  //文章发布时间
    content:{type:String,required:true}, //文章内容
    artdesc:{type:String,required:true}, //文章描述
    artType:{type:String,required:true},  //文章类型
},{
  versionKey:false
 })

 const User = mongoose.model('user',userSchema)
 const Article = mongoose.model('article',articleSchema)

 const Models = { User,Article
   
}

module.exports = Models;


