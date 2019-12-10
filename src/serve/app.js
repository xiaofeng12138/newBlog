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

//文章发表模块

app.use('/AddArticle',(req,res)=>{
   let { title,author,time,content,artdesc,artType } = req.body;
   console.log(req.body)
   db.User.find({username:author},(err,docs)=>{
     if(err){
      res.send({msg:'服务器错误，请重试',code:'500'})
      return
     }
     if(docs.length == '0'){
        //console.log(docs)
        res.send({msg:'该用户不存在请注册后再发布',code:'500'})
        return
     }else{
      db.Article.create({
         title,
         author,
         time,
         content,
         artdesc,
         artType
      }).then((resp)=>{
           res.send({msg:'文章发表成功',code:'200'})
      }).catch((err)=>{
         res.send({msg:'文章发表失败',code:'500'})
      })
     }
   })

})

//文章列表返回

app.use('/articleList',(req,res)=>{
   let count = 0
    db.Article.find().countDocuments().then((r)=>{
      count = r
      let page = req.body.page ;
      db.Article.find()
      .sort({time:-1})
      .skip(10*(page - 1))     //跳过多少页
      .limit(10)         //每页显示几条
      .then((resp)=>{
         res.send({data:resp,msg:'请求成功',code:'200',count:count})
      }).catch((err)=>{
         res.send({msg:'请求失败',code:'500'})
         console.log(err)
      })
      }).catch((err)=>{
         res.send({msg:'请求失败',code:'500'})
         return err
      }) 
   // console.log(count)
   
})

//文章删除接口

app.use('/delArticle',(req,res)=>{
   let id = req.body.id
   db.Article.remove({_id:id}).then((resp)=>{
      //console.log(resp)
      res.send({msg:'数据删除成功',code:'200'})
   }).catch((err)=>{
      res.send({msg:'数据删除失败',code:'500'})
      return err
   })
})


//测试接口

app.use('/test',(req,res)=>{
   let time =  req.body.time 

   db.Article.find({"time":{$regex: time }},(err,docs)=>{    //模糊查询
      if(err){ 
         console.log(err)
         return false
      }
     console.log(docs)
     console.log(docs.length)
   })
   
})

app.use('/testt',(req,res)=>{
   let startTime = req.body.start
   let endTime = req.body.end
   console.log(endTime,startTime)

   db.Article.find({"time":{"$gte": startTime}},(err,docs)=>{    //模糊查询   , "$lt" :endTime
      if(err){ 
         console.log(err)
         return false
      }
   //   console.log(docs)
   //   console.log(docs.length)
   })
   
})





app.listen(5050,()=>{
    console.log('项目启动成功，监听在5050端口！！！');
    console.log(db.User)
  });