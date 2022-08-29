//创建一个node
(function () {
    let http = require('http')
    http.createServer(function (request, response) {
        //设置响应信息
        response.writeHead(200, { 'Content-Type': 'text/plain' })
        response.end('Hello World\n')
    }).listen(8888)

    //打印终端
    console.log('Server running port is 8888')
})();