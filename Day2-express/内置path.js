//问题:fs中，获取文件路径时，是在node的当前路径
//这就会导致一系列的问题path not find 
//解决方式
let path = require('path')
let tPath = path.join(__dirname,"1.txt")
let tPath2 = path.join(__filename,"1.txt")
console.log(tPath,'\n',tPath2)