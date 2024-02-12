// function outer() { 
//     function inner() {
//         console.log("hi");
//     }
//     return inner;
// }

// outer()();


function outer() {
    this.inner1=()=>{

        console.log("hi from inner1");
    };

    this.inner2=()=>{

        console.log("hi from inner2");
    };

}


new outer().inner1();
new outer().inner2();