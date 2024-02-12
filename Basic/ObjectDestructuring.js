const employees={

    engineers:{
        em1: {
            id:1,
            name:"Prakash",
            city:"Mumbai",
            occupation:"front-end engineer"
        },
        em2: {
            id:2,
            name:"Sakari",
            city:"Delhi",
            occupation:"back-end engineer"
        }
    },
    scientists:{
        em3: {
            id:3,
            name:"John",
            city:"New York",
            occupation:"data scientist"
        }
    },
    youtubes:{
        em4: {
            id:4,
            name:"Satish",
            city:"Pune",
            occupation:"Comedian"
        }
    }
}

let{engineers}=employees;
// console.log(engineers.em1.id,engineers.em1.occupation,engineers.em2.id,engineers.em2.occupation+"\n");

let{scientists:{em3:{occupation,name,id}}}=employees;
console.log(id,name,occupation);