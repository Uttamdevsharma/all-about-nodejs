import http from 'http';

const server = http.createServer((req,res) => {

    const {url} = req;

    res.writeHead(200, {"content-type" : "text/plain"})
    

    if(url === "/"){
        res.end("Welcome to the Blog Home Page")
    } else if(url === " /blogs"){
        res.end("Display")
    }
})

const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log(`Server is running on ${port}`);

})