#!/usr/bin/env node

const { chunk } = require("./utils/array.js");
const {add,multiply, formatSmartNumber} = require('./utils/math.js')

module.exports={
    chunk,
    add,
    multiply,
    formatSmartNumber
}