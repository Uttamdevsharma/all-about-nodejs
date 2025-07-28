import http from 'http';

const server = http.createServer((req,res) => {

    const {url} = req;

    res.writeHead(200, {"content-type" : "text/plain"})
    

    if(url === "/"){
        res.end("Welcome to the Blog Home Page")
    } else if(url === "/blogs"){
        res.end("Displaying all blogs here...")
    } else if(url.startsWith("/blogs/")){
        const postId = url.split("/")[2]
        res.end(`"id" : ${postId} "title" : "Post Title" , "body" : "kdkjajkdkajdkjkbjdhd jhjhjhd"`)
    } else{
        res.end("404 - Not Found")
    }
})

const port = process.env.PORT || 3000;

server.listen(port, () => {
    console.log(`Server is running on ${port}`);

})