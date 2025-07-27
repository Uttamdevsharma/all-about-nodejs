
import { Duplex } from 'stream';

const duplexStream = new Duplex({

    write(chunk , encoding , callback) {
        console.log(`Writing: ${chunk.toString()}`)
        callback()
    },

    read(){
        this.push("Hello from duplex... \n")
        this.push(null)
    }

})

duplexStream.on('data', (chunk) => {
    console.log(`Reading : ${chunk.toString()}`)
})

duplexStream.write("This is test Writing....")
duplexStream.end("Writind End..");



//custom class
// import { Duplex } from 'stream';

// // Custom class বানানো
// class MyDuplexStream extends Duplex {
//   constructor(options) {
//     super(options);
//   }

//   // Write method override
//   _write(chunk, encoding, callback) {
//     console.log('Writing:', chunk.toString());
//     callback();
//   }

//   // Read method override
//   _read(size) {
//     this.push('Hello from custom class duplex stream!\n');
//     this.push(null); // end of data
//   }
// }

// // Object বানানো
// const duplexStream = new MyDuplexStream();

// // data read করলে...
// duplexStream.on('data', (chunk) => {
//   console.log('Reading:', chunk.toString());
// });

// // Write করা
// duplexStream.write('Writing test 1...\n');
// duplexStream.end('Writing test 2...\n');
