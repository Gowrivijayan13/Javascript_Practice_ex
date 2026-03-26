tas1="starting";
tas2="executing";
tas3="completed";
function task1(){
    console.log("task 1 starting")
    let start= Date.now();
    let delay=2000;
    let end=start+delay;
    console.log("task1 is executing")
    while(Date.now()<=end){
    
    }
    console.log("task1 is completed")
}
function task2(){
    console.log("task 2 starting")
    let start= Date.now();
    let delay=5000;
    let end=start+delay;
    console.log("task2 is executing")
    while(Date.now()<=end){
    
    }
    console.log("task1 is completed")
}
function task3(){
    console.log(`task 3  is ${tas1}`)
    let start= Date.now();
    let delay=1000;
    let end=start+delay;
    console.log("task3 is executing")
    while(Date.now()<=end){
    
    }
    console.log("task3 is completed")
}
task1();
task2();
task3();
//o/p
// task 1 starting
// task1 is executing
// task1 is completed
// task 2 starting
// task2 is executing
// task1 is completed
// task 3  is starting
// task3 is executing
// task3 is completed