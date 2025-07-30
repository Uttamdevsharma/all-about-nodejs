const {add,multiply} = require("../src/utils/math.js");

 test('add two number' , () => {
    let a =10;
    let b= 20;
    expect(add(a,b)).toEqual(30);

 })

 