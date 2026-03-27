// A student has:
// name: "Arun"
// age: 20
// marks: [85, 90, 78] ← (array)
// address: { city: "Chennai", pincode: 600001 } ← (object)

// Then:

// Convert the JSON string into a JavaScript object
// Print:
// Student name
// Second mark
// City
// Cletonvert the object back into a JSON string


let studdetails=`{"name":"vijayan","age":24,
"marks":[8,20,60],"address":{"city":"kumbakonam","pincode":612001}
}`
let javaobject=JSON.parse(studdetails);
console.log(javaobject)
console.log(javaobject.name);
console.log(javaobject.marks[1]);
console.log(javaobject.address.city);
let jsonstring=JSON.stringify(javaobject);
console.log(jsonstring);