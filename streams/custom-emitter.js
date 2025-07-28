import fs from 'fs';
import EventEmitter from 'events';

const source = fs.createReadStream('files/large-file.txt');
const destination = fs.createWriteStream('files/copy1-large-file.txt');

source.pipe(destination);

source.on('copy',() => {
    console.log("Copied Succesfully");
})

destination.on('finish' , () => {
    source.emit('copy');
})