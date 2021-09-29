'use scrict';

//1. Create a function that takes in 2 parameters num1 and num2 and subtracts the two numbers.
subtract = function(num1, num2) {
    return num1 - num2;
}

let num1 = 10;
let num2 = 3;
console.log(`Suntracting ${num2} from ${num1} is ${subtract(num1, num2)}`);

//2. Create a function expression called welcome that take in name and age as a parameters. The outcome should be like so:
//e.g. "My name is Cameron, i am 28 years old"
welcome = (fullName, age) => console.log(`My name is ${fullName}, i am ${age} years old`);
welcome("neil", 21);

//3. Create an arrow function called powerUp that takes in two values n1 and n2. The arrow function will return the power of the two numbers.
powerUp = (n1, n2) => Math.pow(n1, n2);
num3 = 2;
num4 = 8;
console.log(`${num3}**${num4} is ${powerUp(num3, num4)}`);

//e.g:
//* n1=2, n2=3 will return 8 (2 x 2 x 2);
//* n1=3, n2=3 will return 27 (3 x 3 x 3);

//-> hint use Math.pow()