//A palindrome is used to verify a sequence of numbers,
// strings, or letters that are read left to right and right to left 
//to match the same characters or return the same sequence of characters

//initializing a variable
let word = "1234566543";

//using the split method and putting it into an array 

const arr = word.split([]);
console.log(arr);
// I put it that in the array so that i can use the reverse method which only works on arrays
const reversed = arr.reverse();
console.log(reversed);
// const rev = reversed.join();
// console.log(rev)
//now the compare the two
console.log(JSON.stringify(arr) === JSON.stringify(reversed));