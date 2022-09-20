//其实在这里会存在一个问题，对于复杂的情况，一个JS肯定是会写的非常复杂，如何在一个JS调动整个项目呢？？后面会学到
//本JS为了复习express的get post请求

const express = require('express')
const bodyParser = require('body-parser')

let app = express()
app.use(express.static('www'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.get('/',(req,res)=>{
    if(JSON.stringify(req.query)!='{}'){
        console.log(req.query)
        console.log(req.query.name)
    }
    else{
        res.sendFile(__dirname+'/www/index.html',(err)=>{
            if(!err){
                res.sendFile(__dirname+'/www/404.html')
            }
        })
    }
})

//post请求，需要使用body-parse的中间件
app.post('/register',(req,res)=>{
    let reqJson = req.body
    console.log(reqJson)
    reqJson.gender = (reqJson.gender=='男'?'女':'男')
    res.send(reqJson)
})
app.listen(4399,()=>{
    console.log('server in http://127.0.0.1:4399 ')
})
