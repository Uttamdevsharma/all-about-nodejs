import fs from 'fs';

//read image file and embaded image into html file
fs.readFile("images/me.jpg" , (err,data) => {
    if(err) {
        console.log("Error reading the image file", err)
        return;
    }

    
    //convert the data to base64
    const base64Image = data.toString("base64");
    

    //data:[MIME type] ; [encoding] , [data]
    const imgSrc = `data:image/jpeg;base64,${base64Image}`


    //create a html file
    const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style> 
    body{
    text-align:center;
    margin:50px
    }

    img{
      width:300px;
      border:2 px solid #000;
      border-radius:10px
    }
    
    </style>

    </head>
    <body>
    <h1>Image Embaded in Html</h1>
    <img src="${imgSrc}" alt="ME">
    </body>
    </html>
    
    `;

    //create a html file using fs File
    fs.writeFile("index.html" , htmlContent, (err) => {
        if(err){
            console.log("Error writing a html file", err)
        }

        console.log("Html file with embaded image saved succes fully done")

    })
   
    
})