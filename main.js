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
let choice = 1; 

console.log('Enter what you wanted to compute here: (Example 1+1*2) ');

inputNums.on('line', (input) => {

    
    if (count === 0 && choice === 1) {
    ops1 = input.trim();
    
    count++;
    let results = eval(ops1);
    console.log(`the results is ${results}`);
    console.log(`Press 1 then enter to try again, then type the problem below: `);
    



    } else if (count === 1 ) {
        
        choice = parseFloat(input.trim());
        
        
        count = 0;

        if ( choice !== 1 ){
            console.log('Thank you for using advance Calcu');
            inputNums.close();
          };
     

   
    }
        
        
        
        
     else {
        console.log('ending the scripts!');
        inputNums.close();
        console.log(choice);
    } 
}); // this code works - shows trimed inputs


