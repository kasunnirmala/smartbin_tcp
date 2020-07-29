

// const server = require('http').createServer();
// const io = require('socket.io')(server);
var io = require('socket.io').listen(3000);
io.on('connection', client => {
    console.log("CONNECTED");
    client.emit('new-message', "ASD");
    console.log("SEND");

});
// server.listen(3000);