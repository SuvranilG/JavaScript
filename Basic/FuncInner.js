function outerFunc() {
    function innerFunc1() {
        console.log("innerFunc1");
        function innerFunc1Within1() {
            console.log("innerFunc1 within 1");
            
        }
        return {innerFunc1Within1}
    }
    function innerFunc2() {
        console.log("innerFunc2");
    }
    function innerFunc3() {
        console.log("innerFunc3");
    }
    return{
        innerFunc1,
        innerFunc2,
        innerFunc3
    }    
}


outerFunc().innerFunc1().innerFunc1Within1();