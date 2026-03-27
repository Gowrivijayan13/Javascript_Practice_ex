// //fetch("https://catfact.ninja/breeds")
// // .then((res)=>console.log(res))
// // .catch(()=> console.log("api is failed to fetch "))
// // fetch("https://catfact.ninja/breedsssss")
// // fetch("https://catfact1.ninja/breeds")
// fetch("https://catfact.ninja/breeds")
// .then((res)=>res.text())
// .then(
//     txt=>{console.log(txt),
//     console.log(JSON.parse(txt))}
// )
// .catch(()=> console.log("api is failed to fetch "))


//asyn await  function
async function exmp(){
    let data =await fetch("https://catfact.ninja/fact");
    const text =await data.json()
    console.log(text)
    const j=JSON.stringify(text)
    console.log(j)
}
exmp();