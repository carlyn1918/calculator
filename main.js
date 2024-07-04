// first attempt

document.getElementById('calculatorForm').addEventListener('submit', function(event) {
    event.preventDefault();

let number1 = parseFloat(document.getElementById('number1').value);
let number2 = parseFloat(document.getElementById('number2').value);



let add = number1 + number2;
document.getElementById('result').innerHTML = `<p>The result of ${number1} + ${number2} is ${add}</p>`;
