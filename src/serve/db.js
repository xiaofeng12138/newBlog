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
    role:{type:Number,default:1},
    password:{type:String,required:true},
    repasswd:{type:String,required:true},
    time:{type:String } //用户注册时间
},{
  versionKey:false
 })


 //设置文章的Schema
let articleSchema = new mongoose.Schema({
    title:{type:String,required:true},  //文章作者
    author:{                            //文章作者
        type:mongoose.Schema.Types.ObjectId,
        ref:'user'
    },
    time:{type:String,required:true},  //文章发布时间
    content:{type:String,required:true}, //文章内容
    artdesc:{type:String,required:true}, //文章描述
    artType:{type:String,required:true},  //文章类型
    picUrl:{type:String,required:true}  //文章介绍的图片地址
},{
  versionKey:false
 })



 const User = mongoose.model('user',userSchema)
 const Article = mongoose.model('article',articleSchema)

 User.findOne({ username:'xiaofeng1'}).then((res)=>{
    //  console.log(res)
     if(res){
         return false
     }else{
        User.create({
            username:'xiaofeng1',
            password:'1',
            repasswd:'1',
            role:666,
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
        })
     }
 }).catch((err)=>{
   console.log(err)
 })



 const Models = { User,Article}

module.exports = Models;


