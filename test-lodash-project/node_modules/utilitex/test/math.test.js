// test/math.test.js
const { add, formatSmartNumber } = require("../src/utils/math.js");

test('add two number', () => {
  let a = 10;
  let b = 20;
  expect(add(a, b)).toEqual(30);
});

test("smart number create", () => {
  expect(formatSmartNumber(1234567)).toEqual("1.23M");
});
