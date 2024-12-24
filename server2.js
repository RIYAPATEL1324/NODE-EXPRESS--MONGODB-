var http = require('http')
var a = 10
var b = 20
var c = a+b
var msg 
if(c==30){
    msg ="sum is 30"
}else{
    msg ="sum is not 30"
}


http.createServer((req,res)=>{

    res.writeHead(200,{'content-type':'text/html'})
    res.write("a value is"+a)
    res.write("b value is"+b)
    res.write("sum"${a+b})
    res.end("done")

}).listen(3000)

console.log("server is staretd on http://127.0.0.1.3000")