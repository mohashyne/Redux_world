const { compose, pipe } = require('lodash/fp');


// // Regular function
// function add(a) {
//     return function(b) {
//         return a + b;
//     }
// }

// // Arrow function   
// const add = a => b => a + b; // (a, b) => a + b


// add(1)(3); // add(1, 3);


//
let input = 'JavaScript'

const trim = str => str.trim();
const wrap = type => str => `<${type}>${str}</${type}>`;
const toLowerCase = str => str.toLowerCase();

const transform = pipe(trim, toLowerCase, wrap("span"));
console.log(transform(input)); // <span>javascript</span> 