const { compose, pipe } = require('lodash/fp');


let input = 'JavaScript'
let output = "<div>" + input.trim() + "</div>";


// convert above to functional programming
const trim = str => str.trim();
const wrapInDiv = str => `<div>${str}</div>`;
const toLowerCase = str => str.toLowerCase();

// Now we can compose the functions, it reads the code from right to left.
// to solve the problem we use pipe
const transform = compose(wrapInDiv, toLowerCase, trim);
console.log(transform(`${input} using compose`))


//pipe from left to right
const transformPipe = pipe(trim, toLowerCase, wrapInDiv, );
console.log(transform(`${input} using pipe`))

// Now we can compose the functions
const result = wrapInDiv(toLowerCase(trim(input)));

console.log(result); // <div>JavaScript</div>  

// This is a simple example of composition. We can use a library like Ramda  or lodash to make it more powerful.



