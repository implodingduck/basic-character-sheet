const express = require('express');  
const app = express();
const server = require('http').createServer(app);


app.use(express.static(__dirname + '/docs/'));
app.get('/', function(req, res,next) {  
    res.sendFile(__dirname + '/docs/index.html');
});



server.listen(4200);