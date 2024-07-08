const readline = require('readline');
const inputNums = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let ops1 = '';
let A1 = 4;
let B1 = 3;
let count = 0;

console.log('Enter what you wanted to compute here (Example 1+1*2) ');

inputNums.on('line', (input) => {
    ops1 = input.trim();
    console.log(`You want to calculate this ${ops1}`);
}); // this code works - shows trimed inputs