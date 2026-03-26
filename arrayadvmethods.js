let arr=[1,4,9,16]
// function SquareRoot(x){
//     return Math.sqrt(x)
// }
// let res=arr.map(SquareRoot);
// function SquareRoot(x){
//     return Math.sqrt(x)
// }
// let res=arr.map(function (x)
// {
//     return Math.sqrt(x)
// });
// console.log(res)
// let res=arr.map((x) =>Math.sqrt(x));
// console.log(res)
let res=arr.filter((x)=>
{
    if(x>8){
       return true
    }
    else{
        return false
    }
})
console.log(res)
let arr1=[1,2,3,4]
let result=arr1.reduce((total,x)=>total+x,0)
console.log(result)
let score=[100,202,502,300]
// let ress=score.some((x)=>
    let ress=score.every((x)=>
{
    if(x>=100){
        return true 
    }
    else{
        return false
    }
})
console.log(ress)