//callback function is add,sub and the higher order function is teh calc function
// function add(a,b){
//     return a+b
// }
// function sub(a,b){
//     return a-b
// }
// function calc(a,b,callback){
//     return callback(a,b)
// }
// console.log(calc(10,20,sub))
// console.log(calc(10,20,add))
//circle,trianle,rectangle are the call back function ,calc is the higher order function 
function circle(r){
    return Math.PI * r * r
}
function triangle(v){
    return (Math.sqrt(3)/4) * v *v
}
function rectangle(s){
    return s*s
}
function calc(value,callback){
    return callback(value)
}
console.log(calc(10,circle))
console.log(calc(10,triangle))
console.log(calc(10,rectangle))