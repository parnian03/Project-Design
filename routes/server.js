var express = require('express');
var app = express();

app.get('/', function(req, res){
    res.send("Hello World from server.js");
    });
    app.listen(3000);
    console.log("Server running on the port 3000");