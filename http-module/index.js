import http from 'http';
import { text } from 'stream/consumers';

const server = http.createServer((req,res) => {
    res.writeHead(200,{'content-type': 'text/plain'});
    res.end("The Server is running!")
})

//start the server

server.listen(3000, () => {
    console.log("The server is listening on port 3000")
})