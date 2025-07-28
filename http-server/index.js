//again for req and res handle

import http from 'http';

//create a server

const server = http.createServer((req,res) => {
    console.log("Request type:" , req.method)
    //set headers
    res.writeHead(200, {'content-type' : 'text/plain'});

    //handle request based on request method
    if(req.method === "GET"){
        res.end("YOu made a get request")
    } else if(req.method == "POST"){
        res.end("YOu made POST request")
    } else if(req.method === "PUT"){
        res.end("YOU made put request")
    }else {
        // res.writeHead (404 ,{'content-type' : 'text/plain'});
        res.end("404 - Not Found the request method")
    }
})

//start server

const port = 3000;
server.listen(port, () => {
    console.log(`Server is running at port on ${port}`);
})