const express = require('express');
const app = express();
var io = require('socket.io').listen(4567);
const DeviceModel = require('./model/device');
require('./db');

var socket;

io.on('connection', sockt => {
    console.log("IO CONNECTED");
    socket = sockt;
    socket.emit('new-message', 123);
});




app.get('/value/:valu', async (req, res) => {
  
    var val = parseFloat(req.params.valu.toString('utf8'));
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

    io.emit('new-message', val);

});


app.listen(6666);

