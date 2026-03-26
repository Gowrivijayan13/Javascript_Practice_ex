//using the [...],slice()
let arr=[{name:"vijayan"},{age:22},{educ:"bsc"}]
console.log(arr);
// let arr1=[...arr];
let arr1=arr.slice();
console.log(arr1);
arr[2].educ="msc";
console.log(arr);
console.log(arr1);