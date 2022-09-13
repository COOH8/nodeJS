const http = require('http')
let querystring = require('querystring')

const app = http.createServer((req,res)=>{
    let postData = ''
    if(req.url=='/register'){
        req.on('data',(chunk)=>{
            postData+=chunk
        })
        req.on('end',()=>{
            //打印一下流
            console.log(postData)
            let postObj = querystring.parse(postData)
            console.log(postObj);
            res.writeHead(200,{'Content-Type': 'text/html;charset=utf-8'})
            res.end(JSON.stringify(postObj))
        })
    }
})

app.listen(4399,()=>{
    console.log('http://127.0.0.1:4399/')   
})