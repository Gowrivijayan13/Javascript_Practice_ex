//this function hass name as add and the length as 2and the behaviour as the call(),bind(),apply()
function add(a,b){
    return a+b;
}
// console.log(add(10,100));
console.log(add.name);
console.log(add.length);
add.call();
