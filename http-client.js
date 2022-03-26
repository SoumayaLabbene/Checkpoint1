var http = require('http');

http.get(process.argv[2],function(a){
    a.setEncoding("utf8");
    a.on("data",function(b){
        console.log(b);
    })
})