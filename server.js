const express = require('express');
const app = express();
var io = require('socket.io').listen(4567);
const DeviceModel = require('./model/device');
require('./db');
const axios = require('axios');
const request = require('request');
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

    var alarm=val>120?"Low":val>80?"Normal":val>40?"Warning":"High";

    // axios.post('http://smartbin.solidaridadasia.com/api/garbage-collection', {
    //     "phone_number": 1234567891,
    //     "alarm": alarm,
    //     "garbage_length": val,
    //     "garbage_length_unit": "centimeter"
    // })
    //     .then((res) => {
    //         console.log(`statusCode: ${res.statusCode}`)
    //         console.log(res)
    //     })
    //     .catch((error) => {
    //         console.error(error)
    //     })

    request.post('http://smartbin.solidaridadasia.com/api/garbage-collection', {
        json: {
        "phone_number": 1234567891,
        "alarm": alarm,
        "garbage_length": val,
        "garbage_length_unit": "centimeter"
    }
    }, (error, res, body) => {
        if (error) {
            console.error(error)
            return
        }
        console.log(`statusCode: ${res.statusCode}`)
        //console.log(body)
    })




});


app.listen(6666);

