'use strict';

//This is a simple console logging statement
console.log("Hello World");

//Different kinds of console logging
const msg = `this is a message`;

console.log(msg);

console.info(msg);

console.warn(msg);

console.error(msg);

//to make the console log look uniquie you can insert CSS
console.log(`%c` + msg, "color: black; background-color: white; font-size: 20px; padding: 5px;");
console.log(`%c` + msg + `%c` + msg, 'color: red;', 'color:green');

const firstName = "Neil";
const secondname = "Prescott";
const iAmFrom = "Chester";
const starSign = "Aries";

console.log(`%c` + `My name is ${firstName} ${secondname}`, 'color:yellow;');
console.log(`%c` + `I am from ${iAmFrom}`, "color: red;");
console.log(`%c` + `and my start sigb is ${starSign}`, `color: green;`)