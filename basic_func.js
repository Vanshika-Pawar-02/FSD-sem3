// const mod = (a, b) => ((a % b) + b) % b;

// console.log(15/5.1);
// console.log(10 % undefined);
// console.log(10 % null);
// console.log(10 % Infinity);
// console.log(10 % NaN);
// console.log(mod(2, 5));


// // relational operators

 
// function checkLeapYear(year) {
//   if (year % 4 === 0) {
//     if (year % 100 === 0) {
//       if (year % 400 === 0) {
//         console.log(`${year} is a leap year.`);
//       } else {
//         console.log(`${year} is NOT a leap year.`);
//       }
//     } else {
//       console.log(`${year} is a leap year.`);
//     }
//   } else {
//     console.log(`${year} is NOT a leap year.`);
//   }
// }


// checkLeapYear(2024);
// checkLeapYear(1900); 
// checkLeapYear(2000); 
// checkLeapYear(2026); 



// // selection or decision Statement
// // if
// // if-else
// // nested if-else
// // else-if ladder
// // conditional (ternary)operaor
// // switch case


// let x = 10;
// let y = 5;
// let operator = "+"; 

// let result;

// switch (operator) {
//   case "+":
//     result = num1 + num2;
//     console.log(`${x} + ${y} = ${result}`);
//     break;

// }

// // logical operator
 
// let year = 2024;

// if (( year % 100 !== 0) || (year % 400 === 0)) {
//   console.log(`${year} is a leap year.`);
// } else {
//   console.log(`${year} is NOT a leap year.`);
// }

// loop(sum of 5-digits of a number)

function calculateSum(num) {
  let str = num.toString();
  let sum = 0;

  for (let i = 0; i < str.length; i++) {
    sum += Number(str[i]);
  }


  console.log("Sum of digits:", sum);
}


calculateSum(12345); 

// reverse a number(loop)
function reverseNumber(num) {
  let str = num.toString();
  let reversed = str.split("").reverse().join("");

  console.log("Reversed number:", reversed);
}

reverseNumber(12345); 

// fibonacci series(loop)
function printFibonacci(terms = 5) {
  let a = 0, b = 1;
  let sequence = [];

  for (let i = 0; i < terms; i++) {
    sequence.push(a);
    let next = a + b;
    a = b;
    b = next;
  }

  console.log("Fibonacci series:", sequence.join(", "));
}

printFibonacci(5); 


let num = 12345;
let isPrime = true;

for (let i = 2; i < num; i++) {
  if (num % i === 0) {
    isPrime = false;
    break;
  }
}

console.log("Is Prime:", isPrime); 

let sum=0;
for (let i = 0;i<=9;i++,sum +=i)
console.log(sum);

//tribonacci series 
const userInput = prompt("Enter a number to get its Tribonacci value:");
const n = parseInt(userInput);
if (isNaN(n) || n < 0) {
  console.log("Please enter a valid non-negative number.");
} else {
  
  let a = 0, b = 1, c = 1;

  if (n === 0) {
    console.log(`Tribonacci(${n}) = 0`);
  } else if (n === 1 || n === 2) {
    console.log(`Tribonacci(${n}) = 1`);
  } else {
    for (let i = 3; i <= n; i++) {
      let next = a + b + c;
      a = b;
      b = c;
      c = next;
    }
    console.log(`Tribonacci(${n}) = ${c}`);
  }
}