// program to find the ASCII value of a character
const readline = require('readline-sync');

// Create readline interface

// take input from the user
let question1 = readline.question('Enter a character: ');
question1= String(question1);
// convert into ASCII value
let result = question1.charCodeAt(0);

console.log(`The ASCII value is: ${result}`);

