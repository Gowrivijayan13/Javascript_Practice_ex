let city="kumbakonam"
function showtemperature(){
    let temp=36
    let needjacket=true
    if(temp>32){
        
        console.log(`the temperature ${temp} in the city ${city}`);
        console.log("whethere need an jacket" ,needjacket)
    }
    console.log(needjacket)
}
function greet(){
    console.log(`welcome to our ${city} city`)
}
showtemperature();
greet();