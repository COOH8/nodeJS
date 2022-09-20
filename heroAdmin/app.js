//服务的入口文件
const express = require('express')
const fs = require('fs')
const bodyParser = require('body-parser')
const multer = require('multer')
const path = require('path')
const db = require(path.join(__dirname,'utils','db.js')) //导入内置模块

//创建服务
let app = express()
let upload = multer({dest:path.join(__dirname,'www','uploads/')})

//托管静态资源
app.use(express.static('www'))
app.use(express.static('static'))

//传入中间件
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

//1.实现登录接口



//对服务进行监听
app.listen(4399,()=>{
    console.log('server start in http:127.0.0.1:4399');
})
