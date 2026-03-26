// tas1="starting";
// tas2="executing";
// tas3="completed";
// function task1(){
//     console.log("task 1 starting")
//     console.log("task1 is completed")
// }
// function task2(){
//     console.log("task 2 starting")
//     console.log("task1 is completed")
// }
// function task3(){
//     console.log(`task 3  is ${tas1}`)
    
//     console.log("task3 is completed")
// 
// function task4(){
//     console.log(`task4  is ${tas1}`)
//     let start= Date.now();
//     let delay=1000;
//     let end=start+delay;
//     console.log(`task4 is ${tas2}`)
//     while(Date.now()<=end){
    
//     }
//     console.log(`task4 is ${tas3}`)
// }
// task1();
// setTimeout(task2,2000);
// task3();
// setTimeout(task4,2000);
// //set interval

function task1(){
    console.log('fetching the data')
}
let intervalid=setInterval(task1,2000); //the problem is continue the same functionalit to stop is we use the ctrl+c  so we use the clearinterval
// clearInterval(intervalid)
setTimeout(()=>clearInterval(intervalid),3000)
