const numbers = [1, 2, 3];

// Adding
const addedEnd = [...numbers, 4];
console.log(addedEnd);

const addedBeg = [4, ...numbers];
console.log(addedBeg);

// add within (spcify)
const index = numbers.indexOf(2)
const addedMid = [
    ...numbers.slice(0, index),
4, ...numbers.slice(index)];

console.log(addedMid);

// Remove
const numRm = numbers.filter(num => num !== 2)

console.log(numRm);

//Updating
const numUpdate = numbers.map(num => num === 2 ? num * 25 : num); // 2 * 25
console.log(numUpdate);