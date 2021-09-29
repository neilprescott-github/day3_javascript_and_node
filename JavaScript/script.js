'use scrict';

// 1. Create a IF statement that satifies the following:
// * Declare a variable age
// * Write a condition that checks if age is between 18 AND 65
// * Return a value in each case where the condition is satisfied and not satisfied.
// * Extra: Consider the case where age is less than 18 - return 'underage'.


checkAge = function(age) {
    if (age < 18) {
        return 'underage';
    }
    else if (age >= 18 && age <=65) {
        return 'adult';
    }
    //Must be > 65
    else {
        return 'retired';
    }
}

let ageToCheck = 50;

console.log(`Age ${ageToCheck} is ${checkAge(ageToCheck)}`);

// 2. Using ternary-if syntax, write code that checks if age is above 50.
 ageToCheck > 50 ? console.log(`Above 50.`) : console.log(`50 or below`);