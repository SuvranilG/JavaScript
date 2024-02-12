const readline= require('readline-sync')
const checkAge= ()=> {  
    //JavaScript to illustrate 
    //Conditional operator 
    
    let age = 60 
    let result = (age > 59)? 
    "Senior Citizen":"Not a Senior Citizen"; 
    
    console.log(result); 
    }  
    // checkAge();
    // console.log(typeof checkAge);
    
const checkMark= () =>{  
    //JavaScript to illustrate
    //multiple Conditional operators

    let marks = Number(readline.question("What is ur mark ? "));
    let result = (marks < 40) ? "Unsatisfactory": 
                (marks < 60) ? "Average":
                (marks < 80) ? "Good":"Excellent";

    console.log(result);
    }  
    // checkMark();  


// Assigning a ternary operator to a variable
const AssigningTernaryToVariable= () =>{
    let marks = Number(readline.question("What is ur Total mark ? "));
    const result= (marks<35)? "You need to work hard":"Great u have cleared the exam";
    console.log(result);
}
AssigningTernaryToVariable();


