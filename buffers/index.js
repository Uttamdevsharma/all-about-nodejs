//importing bufFER

const buffer = Buffer.from("Hello World",'utf-8')
console.log(buffer)

console.log(buffer.toString())

//Encoding buffer('utF8, "base64")
const bufferutF8 = Buffer.from("Hello ",'utf-8')
console.log(bufferutF8)

//converting bueFFr to base64
const buffer64 = bufferutF8.toString('base64')
console.log(buffer64)

//decoding base 64 to original
const decodebuFFer = Buffer.from(buffer64,'base64')
console.log(decodebuFFer.toString('utf-8'))

