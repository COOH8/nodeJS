//服务的入口文件
const express = require('express')
const fs = require('fs')
const bodyParser = require('body-parser')
const multer = require('multer')
const path = require('path')
const db = require(path.join(__dirname, 'utils', 'db.js')) //导入内置模块

//创建服务
let app = express()
let upload = multer({ dest: path.join(__dirname, 'www', 'uploads/') })

//托管静态资源
app.use(express.static('www'))
app.use(express.static('static'))

//传入中间件
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

//1.实现登录接口
// username,password
app.post('/login', (req, res) => {
    let username = req.body.username
    let password = req.body.password
    //登录页面不是主体，直接写死就好
    if (username == 'admin' && password == '123456') {
        res.send({
            code: '200',
            msg: '登陆成功'
        })
    } else {
        res.send({
            code: '400',
            msg: '用户名或密码错误'
        })
    }

})

//2获取所有英雄的请求
app.get('/getAllHero', (req, res) => {
    //用户发起请求获取到英雄的信息
    let heros = db.getHeros()
    //console.log(heros)
    res.send({
        code: '200',
        msg: 'success',
        data: heros
    })
})

//3.新增一个英雄(post)
//name,skill,icon
app.post('/addHero', upload.single('heroIcon'), (req, res) => {
    let name = req.body.heroName
    let skill = req.body.skillName
    let icon = req.file.filename
    //console.log(name+skill)
    //res.send(heroName+heroSkill)
    let flag = db.addHero({ name: name, skill: skill, icon: '/uploads/' + icon }) //存储成功与否
    if (flag) {
        res.send({
            code: '200',
            msg: '添加成功'
        })
    } else {
        res.send({
            code: '500',
            msg: '服务器添加失败，请稍后添加'
        })
    }
})

//4.根据id找英雄
app.get('/findHeroById', (req, res) => {
    let id = req.query.id
    let data = db.getHeroById(id)
    if (data) {
        res.send({
            code: '200',
            msg: 'success',
            data: data
        })
    }
    else {
        res.send({
            code: '500',
            msg: '服务器错误'
        })
    }
})

//5.根据id删除
app.get('/deleteById', (req, res) => {
    let id = req.query.id
    let success = db.deleteHeroById(id)
    if (success) {
        res.send({
            code: '200',
            msg: 'success'
        })
    }
    else {
        res.send({
            code: '500',
            msg: '服务器错误'
        })
    }
})

//6.编辑英雄的信息
app.post('/editHero', upload.single('heroIcon'), (req, res) => {
    let id = req.body.id
    let name = req.body.heroName
    let skill = req.body.skillName
    let icon = req.file.filename
    //console.log(name+skill)
    //res.send(heroName+heroSkill)
    if (id && name && skill && icon) {
        let flag = db.editHero({ id, name, skill, icon: '/uploads/' + icon }) //存储成功与否
        if (flag) {
            res.send({
                code: '200',
                msg: '编辑成功'
            })
        } else {
            res.send({
                code: '500',
                msg: '服务器错误'
            })
        }
    } else {
        res.send({
            code: '400',
            msg: '条件缺失'
        })
    }
})
//对服务进行监听
app.listen(4399, () => {
    console.log('server start in http://127.0.0.1:4399');
})
