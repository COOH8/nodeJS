//读取文件
(function(){
    let fs = require('fs')
    fs.readFile('./1.txt',(err,data)=>{
        console.log(data.toString(),err); 
    })
})();
//写文件
(function(){
    let fs = require('fs')
    //写JSON数据
    let testStr = {'book':'123','num':'12345'}
    fs.writeFile('./test.json',JSON.stringify(testStr),function(err){
        if(err){
            console.log(err);
        }
    })
})();
//一个小案例，JSON文件的读取
(function(){
    let fs = require('fs')
    fs.readFile('./test.json','utf-8',(err,data)=>{
        console.log(data);
        let jsonObj = JSON.parse(data)
        jsonObj.book='红楼'
        fs.writeFile('./test.json',JSON.stringify(jsonObj),(err)=>{
            if(err){
                console.log(err)
            }
        })
    })
})();