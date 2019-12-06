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

 const User = mongoose.model('user',userSchema)

 const Models = { User
   
}

module.exports = Models;


