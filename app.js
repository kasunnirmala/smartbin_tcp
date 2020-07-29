
var net = require('net');
const express = require('express');
const app = express();
require('./db');
var io = require('socket.io').listen(4567);
const https = require('https');
const DeviceModel = require('./model/device');

var socket;

io.on('connection', sockt => {
    console.log("CONNECTED");
    socket = sockt;
    socket.emit('new-message', 123);
});



var tcp = net.createServer(function (soc) {
    console.log("CONNECTED");
    soc.setKeepAlive(true);
    soc.on('data', async function (data) {
        // console.log(data.toString('utf8'));
        //var val=parseInt(data.toString('hex'),16);
        var val = parseFloat(data.toString('utf8'));
        console.log(val);

        const Device = new DeviceModel({
            deviceID: "Device001",
            value: val
        });

        try {
            const savedDevice = await Device.save();
            console.log(savedDevice);
        } catch (error) {
            console.log(error.message);

        };
        if (socket) {
            socket.emit('new-message', val);
        }
        // https.get('https://api.thingspeak.com/update?api_key=5ACCSSP1X1S2WSCN&field1=' + val).on("error", (err) => {
        //     console.log("Error: " + err.message);
        // });;






    });
}).listen(1111);
console.log("SERVER STARTED");


