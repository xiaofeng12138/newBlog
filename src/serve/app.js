const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser')
const db = require('./db')
const session = require('express-session')
const jwt = require("jsonwebtoken");

app.use(bodyParser.json());


//设置用户session
app.use(session({
    secret : 'xiaofeng', // 对session id 相关的cookie 进行签名
    resave :true,
    rolling:true,
    saveUninitialized: false, // 是否保存未初始化的会话
    cookie : {
        maxAge : 1000 * 60 * 60, // 设置 session 的有效时间，单位毫秒
    },
},));


//注册模块
app.use('/reg',(req,res)=>{
   let { username,password,repasswd } = req.body;
   db.User.findOne({username}).then((users)=>{
      if(users){
         res.send({msg:'用户名已存在',code:'500'})
         return
      }else{
         res.send({msg:'注册成功',code:'200'})
         db.User.create({
            username,
            password,
            repasswd
         })
      }
   })
})




//登录模块
app.use('/login',(req,res,next)=>{
   let { username,password } = req.body;
   db.User.findOne({username,password},(err,docs)=>{
      if(err){
         res.send(err)
         return
      }
      if(docs){
         let content = docs.username
         let secretOrPrivateKey = "123456" // 这是加密的key（密钥） 
         let  token = jwt.sign({
            content,
            secretOrPrivateKey
        }, 'my_token', { expiresIn: '0.5h' });
         res.send({msg:'登录成功',code:'200',token:token,username:content})
      }
      else{
         res.send({msg:'用户名或密码错误',code:'500'})
      }
   })
})

app.listen(5050,()=>{
    console.log('项目启动成功，监听在5050端口！！！');
    console.log(db.User)
  });