// declaration
function add(v,w){
    return v+w;
}
console.log(add(10,10));
//expression
let sub=function(v,w){
    return v-w
}
console.log(sub(10,10));
//arrow function
let mult=(v,w)=>v*w;
console.log(mult(10,10));
//IIFE


// (function() {
//     console.log("done");
// })();
((a,b)=>console.log(a+b))(3,3);