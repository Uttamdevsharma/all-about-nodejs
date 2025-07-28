import fs, { createReadStream } from 'fs';

const readableStream = createReadStream('files/large-file.txt',{
    encoding:'utf-8',
    highWaterMark : 1024
})

readableStream.on('data' ,(chunk) => {
    console.log(`Recieved Chunk : ${chunk.length} bytes`)

})

readableStream.on('end' , () => {
    console.log("Read All successfully");
})

