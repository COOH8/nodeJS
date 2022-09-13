(function(){
    //调用http模块
    const http = require('http')
    const app = http.createServer((req,res)=>{
        res.writeHead(200,{'Content-Type': 'text/html;charset=utf-8'})
        res.end('hello world\n你好')
    })
    app.listen(8888,()=>{
        console.log('Server running at http://127.0.0.1:8888/');
    })
})();