var express = require('express');
var path = require('path');
var http = require('http');
var https = require('https');
var app = express();
var port = process.env.PORT || 8080;
app.use(express.static(path.join(__dirname, '/')))
app.get('/', function(res, res){
  res.sendFile(path.join(__dirname + '/index.html'));
}) 
app.listen(port, function(){
    console.log('app is listening on port: ' + port)
})
