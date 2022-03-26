var http =require('http');
var bl = require('bl');

http.get(process.argv[2], function(response){
    var ret = "";
    response.setEncoding("utf8");
    response.on("data", function(data){
        ret+=data;
    });
    response.on("end", function(){
        console.log(ret.length);
        console.log(ret);
    });
}).on("error",function(e){console.log(e);});