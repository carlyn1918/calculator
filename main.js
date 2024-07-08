const readline = require('readline');
const inputNums = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let ops1 = '';
let A1 = 4;
let B1 = 3;
let count = 0;
let results = eval(ops1);
let choice = 0; 

console.log('Enter what you wanted to compute here (Example 1+1*2) ');

inputNums.on('line', (input) => {
    if (count === 0) {
    ops1 = input.trim();
    console.log(`You want to calculate this ${ops1}`);
    count++;
    console.log('testing to skip the prompt for enter key');
    let results = eval(ops1);
    console.log(`the results is ${results}`);
    console.log(`Do you want to try again? Press 1 to try again`);
    choice = parseFloat(input.trim());
    } else if (count === 1) {
        choice = parseFloat(input.trim());
        console.log(`you press ${choice}`);
        count = 0;
        
        
    } 
}); // this code works - shows trimed inputs


