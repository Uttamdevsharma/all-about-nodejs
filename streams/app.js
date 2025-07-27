import fs from 'fs';

//tradionally read data FROM A File
fs.readFile('files/large-file.txt','utf-8', (err,data) => {
    if(err) throw err;
    console.log(data);
})