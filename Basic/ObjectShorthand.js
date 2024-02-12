function createObject(name, city){
    return {
        name,
        city
    }
}

let Person1 = createObject("Prakash","Mumbai");
console.log(Person1);
console.log(typeof Person1);