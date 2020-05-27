var net = require('net');
const express = require('express');
const app = express();

app.get('/getBy/:txt', (request, response) => {

    client.get(request.params.txt, function (error, result) {
        if (error) {
            console.log(error);
            response.send([]);
        }
        response.send(result);
    });
});

app.listen(1112);

var tcp = net.createServer(function (soc) {
    console.log("CONNECTED");
    soc.setKeepAlive(true);
    soc.on('data', function (data) {
        console.log(data);
        
    });
}).listen(1111);
console.log("SERVER STARTED");




