

var net = require('net');
const express = require('express');
const app = express();
const https = require('https');
const DeviceModel = require('./model/device');

// app.listen(1112);

var tcp = net.createServer(function (soc) {
    console.log("CONNECTED");
    soc.setKeepAlive(true);
    soc.on('data',async function (data) {
        // console.log(data.toString('utf8'));
        //var val=parseInt(data.toString('hex'),16);
        var val = parseFloat(data.toString('utf8'));
        console.log(val);
        https.get('https://api.thingspeak.com/update?api_key=5ACCSSP1X1S2WSCN&field1=' + val).on("error", (err) => {
            console.log("Error: " + err.message);
        });;


        const Device = new DeviceModel({
            deviceID: "Device001",
            value: val
        });

        try {
            const savedDevice = await Device.save();
        } catch (error) {
            console.log(error.message );

        };



    });
}).listen(1111);
console.log("SERVER STARTED");




