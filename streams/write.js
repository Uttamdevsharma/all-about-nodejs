import fs from 'fs';

const writeableStream = fs.createWriteStream('files/output.txt')


writeableStream.write("This is the 1st Chuck")
writeableStream.write("This is the 2st Chuck")
writeableStream.write("This is the 3st Chuck")

writeableStream.end("This is the final Chunk")

writeableStream.on('finish' ,() => {
    console.log("Finished writing...")
})