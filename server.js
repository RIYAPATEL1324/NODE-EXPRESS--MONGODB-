var http = require('http')// http is core module

http.createServer((req,res)=>{
    res.end("hello node")
    }).listen(3000)

    console.log("server has started on http://127.0.0.1:3000")
