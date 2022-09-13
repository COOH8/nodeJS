const express = require('express')
const bodyParser = require('body-parser')

let app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/www/index.html',()=>{
        res.sendFile(__dirname+'/www/404.html')
    })
})

app.post('/register',(req,res)=>{
    console.log(req.body)
    res.send(req.body)
})

app.listen(4399,()=>{
    console.log('http://127.0.0.1:4399/')
})