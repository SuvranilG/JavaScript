function User(name,age){
    // this={}
    this.name = name,
    this.age = age;
    // return{name,age}; // another way to create object 
    // return this;
}

const user1=new User("Prakash",100);
const user2=new User("Ashish",134);
const user3=new User("Bharat",150);
// const user4= User("Suvranil",99);

console.log(typeof user1);
console.log(typeof user1.name);
console.log(user1);
console.log(user2);
console.log(user3);
// console.log(user4);



