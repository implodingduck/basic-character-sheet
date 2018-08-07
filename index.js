const express = require('express');  
const app = express();
const server = require('http').createServer(app);


app.use(express.static(__dirname + '/gh-pages/'));
app.get('/', function(req, res,next) {  
    res.sendFile(__dirname + '/gh-pages/index.html');
});



server.listen(4200);