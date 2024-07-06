const readline = require('readline');
const inputNums = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let num1, num2;
let count = 0;
let operatorChosen;
let sum = (num1 + num2);

console.log('Enter first number: ');

inputNums.on('line', (input) => {
  if (count === 0){
    num1 = parseFloat(input.trim());
    console.log(`First number is: ${num1}`);
    console.log(`Enter second number: `);
    count++;
  } else if (count === 1) {
    num2 = parseFloat(input.trim());
    console.log(`The second number is: ${num2}`);
    console.log('Choose an operation: enter number 1 - 4');
    console.log('1. Add');
    console.log('2. Subtract');
    console.log('3. Multiply');
    console.log('4. Divide');
    count++;
    
  } else if (count === 2) {
    operatorChosen = input.trim();
    console.log(`You choose the operator: ${operatorChosen}`);
        console.log(`The answer is:`);
        count++;
        if (count === 3 && operatorChosen === '1'){
            addOp();
          }  else if (count === 3 && operatorChosen === '2'){
            subOp();
          } else if (count === 3 && operatorChosen === 2){
                subOp();
            } else if (count === 3 && operatorChosen === 3){
                mulOp();
            } else if (count === 3 && operatorChosen === 4){
                divOp();
               
            } 
    
    inputNums.close();
  } 
  
  
//   else if (operatorChosen === 2){
//     subOp();
//   } else if (operatorChosen === 3){
//     mulOp();
//   } else if (operatorChosen === 4){
//     divOp();
   
//   } 

else {
    console.log('Invalid input: run the script again!');
  }
});



const addOp = () => {
    console.log(num1 + num2);
}


const subOp = () => {
  console.log (num1 - num2);
};

const mulOp = () => {
  console.log (num1 * num2);
};

const divOp = () => {
  console.log (num1 / num2);
};



