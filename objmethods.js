let info={
    name :"vedha",
    age:34,
    salary: 1222.22
};
1.//typeof(what type it will display)
console.log(typeof(info));
2.//keys(displays the keys of the objects)
console.log(Object.keys(info));
3.//values(displays the values of the objects)
console.log(Object.values(info))
4.//entries(displaces the entire keys and the values)
console.log(Object.entries(info))
5.//freeze(it will freeeze some keys and the values then we cannot change it later)
Object.freeze(info);
info.name="shanmugam";
console.log(info.name);
6.//assigns(merge or copy the objects)
let info2={
    name : "shanmugam"
};
let result=Object.assign({},info,info2);
console.log("when we use the assign method it will merge them",result);
7.//seal (we can modify the data ,but we cannot the values to it)
info2.age=24;
console.log(Object.entries(info2));
Object.seal(info2);

info2.name="vedha";
info2.age=25;
info2.sal=240000
console.log(Object.entries(info2));
8.//hasownproperty(checks if the key exists)
console.log(info2.hasOwnProperty("name"));
console.log(info2.hasOwnProperty("sal"));
console.log(info2.hasOwnProperty("age"));

