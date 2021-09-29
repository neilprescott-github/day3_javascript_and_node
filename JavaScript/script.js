'use scrict';

//1. Recreate the following flowcharts as loops.
for(let a = 100; a <= 200; a++) {
    console.log(`${a}`);
 }

 a = 100;
 do  {
     if(a%2) {
         console.log(` - `)
     }
     else {
        console.log(` * `)
     }
     a++;
} while (a <= 200);


//2. Create a method that can print out the numbers 1-10 10 times each.
tenTimes = function() {
    for(let i1=1;i1<=10;i1++) {
        for(let i2=1;i2<=10;i2++) {
          console.log(`number: ${i2}`);
        }    
    }
 }

tenTimes();
//3. If you have used a while loop at any point in these exercises, replace them with for loops.
for (a = 100; a <= 200; a++) {
    if(a%2) {
        console.log(` - `)
    }
    else {
       console.log(` * `)
    }
}


//4. Write a switch case statement which uses the current day as its expression and matches with the relevant case.
//Criteria:
//* Omit a break statement if it is a weekday, until the last day
//* Use a default case to handle an invalid range.
let d = new Date();
let weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

let n = d.getDay();

let day = weekday[n];

console.log(`Today is ${day}.`);

switch(n) {
    case 0:
    case 6:
        console.log(`Today (${day}) NOT a weekday`);
        break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log(`Today (${day}) is a weekday`);
        break;
    default:
        console.warn(`Unregognised day: ${n}`);
}

