function createObject(name, city){
    return {
        name,
        city
    }
}
//way 01
let Person1 = createObject("Prakash","Mumbai");
console.log(Person1);

//way 02
let Person2 = {
    name: "Sakari",
    city: "Delhi"
}
console.log(Person2);

//way 03
let name = "John";
let city = "New York";
let Person3={name, city};

console.log(Person3);