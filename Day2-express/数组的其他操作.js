/*
 let arr = [
    { name: 'jack', sex:'男' },
    { name: 'rose', sex:'女' },
    { name: 'andy', sex:'男' },
    { name: 'jenny', sex:'女' },
]
需求：把上面数组中所有的男性过滤出来成为一个新数组
 */
(function(){
    let arr = [
        { name: 'jack', sex:'男' },
        { name: 'rose', sex:'女' },
        { name: 'andy', sex:'男' },
        { name: 'jenny', sex:'女' },
    ]
    let newArr = arr.filter (v=>(v.sex=='男'))
    console.log(newArr);

    //使用find ,找到之后是从0开始
    let index = arr.find((v)=>(v.sex=='女'))
    console.log(index);
})();