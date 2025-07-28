import http from 'http';

const server = http.createServer( (req,res) => {
    res.writeHead(200 , {"content-type" : "text/plain"})
    res.end("Welcome to my server")
    
})

const port = 3000;

server.listen(port , () => {
    console.log(`The server is running ${port}`)
})