//file encoding and decoding project

import fs from "fs";

//read the file and encode it

fs.readFile("files/example.txt" , (err,data) => {
    if(err) throw err;

    //encoding file

    const encodedData = data.toString("base64")
    fs.writeFile('files/output.txt' ,encodedData , (err) => {
        console.log(err);
    })

    //decoding
    const decodedData = Buffer.from(encodedData,"base64")
    const decodesReal = decodedData.toString('utf-8')
    fs.writeFile("files/decoding-data.txt", decodedData , (err) => {
        console.log(err);
    })
}); 
