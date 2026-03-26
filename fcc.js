// function as first class citizen or object
//rules
//1. stored in the variable
//2. passed to the functions
//3. returned from the functions
// function prod2(item){
//     console.log(item)
// }
// let prod1 ={
//     name:"pen",
//     price:100,
// };

// prod2(prod1);
// prod1.name="pencil"
// console.log(prod1);
// prod2(prod1);
// function prod2(){
//     let prod1={
//         name : "toy"

//     };
//     return prod1;
    
// }
// console.log(prod2());
// function add(a,b){
//     return a+b;
// }
// console.log(add(100,100));
// let add1=add;
// console.log(add1(200,200));
function prod1modify(item){
   item("cat toy",10000)

}
function prod1(name,price){
    console.log(name,price)
}
prod1modify(prod1);
//the value which have receivening the function as input it is known as the higher order function
// the function being passed as the i/p is konwn as the call back function
