var net = require('net');
const express = require('express');
const app = express();
const https = require('https'); 


// app.listen(1112);

var tcp = net.createServer(function (soc) {
    console.log("CONNECTED");
    soc.setKeepAlive(true);
    soc.on('data', function (data) {
        // console.log(data);
        console.log(parseFloat(data.toString()));
        https.get('https://api.thingspeak.com/update?api_key=5ACCSSP1X1S2WSCN&field1=' + parseFloat(data.toString())).on("error", (err) => {
            console.log("Error: " + err.message);
        });;
    });
}).listen(1111);
console.log("SERVER STARTED");




