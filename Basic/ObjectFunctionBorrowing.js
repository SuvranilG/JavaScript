const user1={
    name: "Prakash",
    age: 100,
    //displayAge:()=>{this.age} //We cann't use arrow function as this reffers to window object.
    displayAge(){return (this.age)}
}

const user2={
    name: "Sakari",
    age: 199
}

const user3={
    name: "Ashima",
    age: 76
}

function sayHello(degree, yearOfGraduation) {
    //console.log( this);
    console.log(`Hello... My name is ${this.name} and I have done ${degree} in ${yearOfGraduation}`);
}

//Implicit Binding
console.log(user1.displayAge()); 
//Explicit Binding ways
// sayHello(user1);//undefined
sayHello.call(user1,"B.Tech",1995);
sayHello.apply(user2,["B.Arts",2023]);
let bindResult= sayHello.bind(user3, "MBBS");
//console.log(typeof bindResult); // bindResult is a function
bindResult(2021);
