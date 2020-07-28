const mongoose = require('mongoose');
var ObjectIdSchema = mongoose.Schema.ObjectId;
var ObjectId = mongoose.Types.ObjectId;

const DeviceSchema = new mongoose.Schema({
    _id: { type: ObjectIdSchema, default: function () { return new ObjectId() } },
    deviceID: String,
    value: Number

}, {
    timestamps: true
});


module.exports = mongoose.model('Device', DeviceSchema);