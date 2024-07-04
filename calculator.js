const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function displayMenu() {
    console.log('Choose:');
    console.log('1. +');
    console.log('2. -');
    console.log('3. *');
    console.log('4. /');

// test call function
displayMenu();