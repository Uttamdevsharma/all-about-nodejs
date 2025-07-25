import {readFile} from 'node:fs';
import { writeFile } from 'node:fs';

readFile('./files/example.txt' , 'utf-8' ,(err,data) => {
    if(err) throw err;
    console.log(data);
})


//writeFile
const content = "Hello uttam Sharma";
writeFile('./files/message.txt' ,content , 'utf-8' , (err) => {
    if(err) throw err;
    console.log("File Created done")
} )