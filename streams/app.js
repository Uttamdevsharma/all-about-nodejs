import fs, { createReadStream } from 'fs';

//tradionally read data FROM A File
fs.readFile('files/large-file.txt','utf-8', (err,data) => {
    if(err) throw err;
    console.log(data.length + " bytes read");
})

//streaming to a file

const readableStream = createReadStream('files/large-file.txt' , {
    encoding:'utf-8',
    highWaterMark:1024
})

readableStream.on('data' , (chunk) => {
    console.log (`Processing : ${chunk.length} bytes`)
})