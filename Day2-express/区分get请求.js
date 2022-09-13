const url = require('url')
const http = require('http')

const app = http.createServer((req, res) => {
    let urlObj = url.parse(req.url, true)
    console.log(decodeURI(req.url))
    console.log(urlObj.query)
    console.log('urlObj.path:' + urlObj.path)
    console.log('urlObj.hash:' + urlObj.hash)
    //console.log('urlObj.port:'+urlObj.port)

    let name = urlObj.query.name
    if (name != '') {
        console.log('结果为:' + name)
    }
})

app.listen(4399, () => {
    console.log('http://127.0.0.1:4399/');

})