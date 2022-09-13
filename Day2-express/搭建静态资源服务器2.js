const http = require('http')
const fs = require('fs')
const path = require('path')

const app = http.createServer((req,res)=>{
    //开始传index文件访问控制
    let indexPath = path.join(__dirname,'www','index.html')
    fs.readFile(indexPath,(err,data)=>{
        if (!err) {
            res.end(data)
        } else {
            //整一个404页面安排上
            let errPath = path.join(__dirname,'www','404.html')
            fs.readFile(errPath,(err,data)=>{
                res.end(data)
            })
        }
    })
})

//指向完之后，需要处理监听
app.listen(4399,()=>{
    //回调
    console.log('Server running at http://127.0.0.1:4399/');
})