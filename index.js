const express = require('express');  
const app = express();
const server = require('http').createServer(app);


app.use(express.static(__dirname + '/dist/'));
app.get('/', function(req, res,next) {  
    res.sendFile(__dirname + '/dist/index.html');
});



server.listen(4200);