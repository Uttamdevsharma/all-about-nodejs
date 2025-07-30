# Utilitex

A lightweight and simple utility library, inspired by Lodash, to provide helpful and practical functions for everyday JavaScript development.

## Installation

Install the package with npm:

```bash
npm install utilitex
```

## Usage

```javascript
const { chunk } = require('utilitex');

const array = [1, 2, 3, 4, 5, 6, 7];

// Split the array into chunks of size 2
const chunkedArray = chunk(array, 2);
console.log(chunkedArray);
// => [[1, 2], [3, 4], [5, 6], [7]]
```

## API

### `chunk(array, size)`

-   `array` (Array): The array to process.
-   `size` (number): The length of each chunk.

Returns a new array containing the chunked arrays.

### `add(a, b)`

-   `a` (number): The first number.
-   `b` (number): The second number.

Returns the sum of the two numbers.

### `multiply(a, b)`

-   `a` (number): The first number.
-   `b` (number): The second number.

Returns the product of the two numbers.

## Testing

To run the tests for this project, use the following command:

```bash
npm test
```

## Author

Uttam kumar devsharma

## License

ISC
