// function inputobj(){
//     var res = {};
//     var stu = {
//         name:'张三'
//     }
//     for (const key in stu) {
//         res.name=stu[key]
//     }
//     return res
// }

const util = require("./util"); 

const res = util.total(10,20);
console.log(res) // 30

// 作业题1：调用util.extend()方法，该方法接收一个对象作为参数，实现对象的深拷贝；
let obj = {name:'xiaoming'};
let obj2 = util.extend(obj);  //实现深拷贝

console.log(obj2.name) //xiaoming
console.log(obj.name)  //xiaoming
obj2.name = 'xiaohong';
console.log(obj2.name)  //xiaohong
console.log(obj.name)  //xiaoming

// 作业题2:调用util.turn()方法，该方法接收一个字符串，实现字符串的翻转效果；
let str = util.trun('hello world!') //实现字符串翻转
console.log(str)  //!dlrow olleh