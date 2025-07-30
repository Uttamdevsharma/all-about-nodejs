const {chunk, add, multiply, formatSmartNumber} = require('utilitex')


const array = [1,2,3,4,5,6,7];

const res = chunk(array,2);
console.log(res);


//math function
console.log(add(2,3));

console.log(multiply(40,20));

console.log(formatSmartNumber(12345678))
