// // function asypractice(){
// //     return new Promise((resolve,reject)=>{
// //         setTimeout(()=>{
// //             console.log("task completed")
// //              resolve();
// //         }
       
// //         ,2000)
// //     })
// // }
// // async function run(){
// //     await asypractice();
// //     console.log("task fullfilled")
// // }
// // run();


// // what is for the failure state 
// // function asypractice(){
// //     return new Promise((resolve,reject)=>{
// //         setTimeout(()=>{
// //             console.log("task completed")
// //              reject("failed");
// //         }
       
// //         ,2000)
// //     })
// // }
// // async function run(){
// //     try{
// //     await asypractice();
// //     console.log("task fullfilled")}
// //     catch(error){
// //       console.log(error)
// //     }
// // }
// // run();
// /// we can asslo give without the function 

// function asypractice(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log("task completed")
//              reject("failed");
//         }
       
//         ,2000)
//     })
// }

//     try{
//     await asypractice();
//     console.log("task fullfilled")}
//     catch(error){
//       console.log(error)
//     }
   // to over come this 
function step1() {
  return new Promise((resolve, reject) => {
    console.log("task1 is started");
    setTimeout(() => {
      console.log("task1 is completed");
      resolve();
    }, 3000);
  });
}
function step2() {
  return new Promise((resolve, reject) => {
    console.log("task2 is started");
    setTimeout(() => {
      console.log("task2 is completed");
      reject();
    }, 2000);
  });
}
function step3() {
  return new Promise((resolve, reject) => {
    console.log("task3 is started");
    setTimeout(() => {
      console.log("task3 is completed");
      resolve();
    }, 1000);
  });
}
// async function run(){
//     try{
//         await step1();
//         await step2();
//         await step3();
//     }
//     catch{
//         console.log("unfulfilled")
//     }
// }
// run()

    try{
        await step1();
        await step2();
        await step3();
    }
    catch{
        console.log("unfulfilled")
    }
