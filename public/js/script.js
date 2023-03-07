const display = document.getElementById('result');
// const middleOperators = document.getElementsByClassName('middleOperator');
// const operators = [...middleOperators];
const firstValue = document.getElementById('firstNumber');
const secondValue = document.getElementById('secondNumber');
// const calculate = document.getElementById('calculate');
const operator = document.getElementById('operator');
// const calc = document.getElementById('calc');

// display.addEventListener('load', (e) => {
//   e.preventDefault();
//   display.value = 0;
// });

firstValue.addEventListener('input', (e) => {
  e.preventDefault();
  display.innerHTML = firstValue.value;
});

secondValue.addEventListener('input', (e) => {
  e.preventDefault();
  display.innerHTML = secondValue.value;
});

operator.addEventListener('input', (e) => {
  e.preventDefault();
  display.innerHTML = operator.value;
});

// calc.addEventListener('click', (e) => {
//   e.preventDefault();
//   const firstInput = parseInt(firstValue.value, 10);
//   const secondInput = parseInt(secondValue.value, 10);

//   if (operator.value === '+') {
//     display.innerHTML = firstInput + secondInput;
//   } else {
//     display.innerHTML = 'ERROR';
//   }
//   firstValue.value = '';
//   secondValue.value = '';
//   operator.value = '';
// });

// operators.forEach((operator) => {
//   operator.addEventListener('click', (e) => {
//     e.preventDefault();
//     console.log(operator.innerHTML);
//     display.innerHTML += operator.innerHTML;
//   });
// });

// calculate.addEventListener('click', () => {
//   display.innerHTML = parseInt(firstValue.value, 10) + parseInt(secondValue.value, 10);
// });
