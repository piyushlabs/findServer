var http = require('http');

//create a server object:
http.createServer(function (req, res) {
  res.write('Unit testing via mock server with status code 200'); //write a response to the client
  res.end(); //end the response
}).listen(8089); //the server object listens on port 8089
