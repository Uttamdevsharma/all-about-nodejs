const {chunk} = require('utilitex')

const array = [1,2,3,4,5,6,7];

const res = chunk(array,2);
console.log(res);