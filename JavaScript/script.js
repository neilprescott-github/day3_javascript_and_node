'use scrict';
//1. Create an array with the name myArray with 2 elements hello,everyone..
let myArray = ["hello", "everyone"];

//2. Next print the length of the array
console.log(`myArray has a length of ${myArray.length}`);

//3. Next use the push() method to add 3 elements to the array
myArray.push(`today`, `is`, `Wednesday`);

//4. Next print the length of the array
console.log(`myArray now has a length of ${myArray.length}`);

//5. Next use shift() to remove an element
myArray.shift();

//6. Finally print the contents of the array using a for of loop.
for (item of myArray) {
    console.log(`${item}`);
}
