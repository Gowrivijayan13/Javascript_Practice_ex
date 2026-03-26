// let use = "Fetching the data";
// function loadingDashboard(id, callback) {
//   let error;

//   setTimeout(() => {
//     if (error) {
//       return callback(errorHandling);
//     }

//     console.log(`${use} the user data`);
//     setTimeout(() => {
//       if (error) {
//         return callback(errorHandling);
//       }

//       console.log(`${use} the friend list`);
//       setTimeout(() => {
//         if (error) {
//           return callback(errorHandling);
//         }

//         console.log(`${use}the user post`);
//         setTimeout(() => {
//         error = "fething the commments is error pleawse try again";
//           if (error) {
//             return callback(errorHandling);
//           }

          
//           console.log(`${use}the user comments`);
//         }, 2000);
//       }, 2000);
//     }, 2000);
//   }, 2000);
// }
// function errorHandling(error) {
//   console.log("error has occured");
// }

// loadingDashboard(101,errorHandling);



// // to overcome this that is called dthe pyramid of doom we move on with the promises

// let prm=new Promise(()=>{
//     console.log("the fetching the data")
// })
// console.log(prm);
// //o/p
// //the fetching the data
// //Promise { <pending> }
// let prm1=new Promise((reject)=>{
//     console.log("the fetching the data")
//     reject()
// })
// console.log(prm1);
// // o/p
// // the fetching the data
// // Promise { undefined }
// let prm2=new Promise((reject)=>{
//     console.log("the fetching the data")
//     reject("success")
// })
// console.log(prm2);
// // o/p
// // the fetching the data
// // Promise { 'success' }
let prm3=new Promise((reject,resolve)=>{
    setTimeout( ()=>{console.log("the fetching the data");
    console.log("the fetching the data")
    reject("failure")
    resolve("success")},2000)
    
})
// prm3.then((result)=>{
//    console.log(result)
// })
//o/p
// the fetching the data
// success


prm3
.then((result)=>{console.log(result)})
.catch((result)=>{console.log(result)})
setTimeout(()=>{console.log('macro task')},1000)