
function loop(){
  _Host_Frame(0.03);
}
setInterval(loop,20);
console.log(inp=_getFrameBuffer());

var h="P6\n320 200\n255\n";
var out=new Buffer((320*200*3)+h.length);
function mk_img(){
o=0;
for(;o<h.length;o++){

out[o]=h.charCodeAt(o);
}
for(var i=0;i<320*200;i++){
out[o+i*3]=HEAP8[inp+i*4+2];
out[o+i*3+1]=HEAP8[inp+i*4+1];
out[o+i*3+2]=HEAP8[inp+i*4];
}
}

var http = require('http');

var server = http.createServer(function (request, response) {
  if(request.url==="/"){
      response.writeHead(200, {"Content-Type": "text/html"});
      response.end(fs.readFileSync("./payload.html","utf8"));
  }
  if(request.url==="/img.ppm"){
      mk_img();
      response.writeHead(200, {"Content-Type": "application/octet-stream"});
      response.end(out);
  }
  if(request.method === "POST") {
    if(request.url=== "/control_down"){
       
       request.on("data",function(a){
          console.log("down: "+a.toString())
          _Key_Event(parseInt(a.toString()),1);
       });
       response.end("blah");
   }
    if(request.url=== "/control_up"){
       
       request.on("data",function(a){
            console.log("up: "+a.toString())
            _Key_Event(parseInt(a.toString()),0);

       });

       response.end("blah");
   }

  }
});

server.listen(8000);

