var http = require('http')
var fs= require('fs')

var server=http.createServer(function(req,res){
    console.log(req.url);
    res.writeHead(200,{'Content-Type':'text/plain'});
    var readStream = fs.createReadStream(__dirname+'/read.txt','utf8');
    readStream.pipe(res)
    
})

server.listen(3000,'127.0.0.1');
console.log('server ready')