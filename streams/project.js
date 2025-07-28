import fs from 'fs';

const source = fs.createReadStream('files/large-file.txt');
const destination = fs.createWriteStream('files/copy-large-file.txt');


source.pipe(destination)


source.on('end' ,() => {
    console.log("file copied succesfully");
})

destination.on('finish' , () => {
    console.log("file writing succesfully")
})