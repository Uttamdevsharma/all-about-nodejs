import http from 'http';

const server = http.createServer((req,res) => {
     
    //Destructure url
    const {url} = req;
    console.log(url);


   //response header
   res.writeHead(200 , {"content-type" : "text/plain"})
   

   //basic routing
   if(url === "/"){
    res.end("Welcome to Home page");
   }else if(url === "/about"){
    res.end("This is About Page")
   }else{
    res.end("404 - Not Found");
   }
})

const port = process.env.PORT || 3000

server.listen(port , () => {
    console.log(`Server is running on ${port}`)
})