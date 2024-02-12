console.log("Hello World");
// Import the readline module
const readline = require('readline');

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Ask a question and wait for user input
rl.question('What is your name? ', (name) => {
  // Handle the user input
  console.log(`Hello, ${name}.`);

  // Close the readline interface
  rl.close();
});