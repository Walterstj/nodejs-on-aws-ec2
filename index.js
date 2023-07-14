var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('You are  in AWS  Cloud. This is BRIDGELEARN2, Please share and Subscribe and like my Videos'); //write a response to the client
  res.end(); //end the response
}).listen(6000); //the server object listens on port 6000
