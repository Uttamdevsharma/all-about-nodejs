import {readFile} from 'node:fs';

readFile('./files/example.txt' , 'utf-8' ,(err,data) => {
    if(err) throw err;
    console.log(data);
})