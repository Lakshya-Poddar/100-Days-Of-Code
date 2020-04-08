var http= require('http')
var fs=require('fs')

var server =http.createServer((req,res)=>{
    console.log(req.url)
    if(req.url==='/home' || req.url==='/'){
     res.writeHead(200,{'Content-type':'text/html'})
     fs.createReadStream(__dirname+'/index.html').pipe(res)
    }
    else if(req.url==='/contact'){
        res.writeHead(200,{'Content-type':'text/html'})
     fs.createReadStream(__dirname+'/contact.html').pipe(res)
    }
    else if(req.url==='/api/ninjas')
    {
        var ninjas=[{name:'lakshya',age:'20'},{name:'Poddar',age:'21'}]
        res.writeHead(200,{'Content-Type':'application/json'})
        res.end(JSON.stringify(ninjas))
    }
    else{
        res.writeHead(404,{'Content-type':'text/html'})
     fs.createReadStream(__dirname+'/404.html').pipe(res)
    }
})

server.listen(3000,'127.0.0.1')
console.log("server Ready")