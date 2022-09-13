//更具用户的请求返回不同的页面
//http://127.0.0.1:4399/red.html

const http = require('http')
const fs = require('fs')
const path = require('path')

const app = http.createServer((req, res) => {
    let errPath = path.join(__dirname, 'www', '404.html')
    if (req.url == '/') {
        let indexPath = path.join(__dirname, 'www', 'index.html')
        fs.readFile(indexPath, (err, data) => {
            if (!err) {
                res.end(data)
            } else {
                fs.readFile(errPath, (err, data) => {
                    res.end(data)
                })
            }
        })
    } else if (req.url == '/red.html') {
        let redPath = path.join(__dirname, 'www', 'red.html')
        fs.readFile(redPath, (err, data) => {
            if (!err) {
                res.end(data)
            } else {
                fs.readFile(errPath, (err, data) => {
                    res.end(data)
                })
            }
        })
    }else{
        fs.readFile(errPath, (err, data) => {
            res.end(data)
        })
    }
})
app.listen(4399, () => {
    console.log('http://127.0.0.1:4399/');
})
