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
    if (count === 0) {
    ops1 = input.trim();
    console.log(`You want to calculate this ${ops1}`);
    count++;
    inputNums.close();
    } else if (count === 1) {
        let results = eval(ops1);
        console.log(`the results is ${results}`);

        
    }
}); // this code works - shows trimed inputs
console.log (count); //shows that count is still 0 hmm

