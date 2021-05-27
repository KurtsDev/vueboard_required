const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;


const BoardMessage = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
    },
    headline: {
        type: String,
        required: true
    },
    message: {
        type: String,
    },
}, {
    versionKey: false,
    timestamps: true
});


module.exports = model('BoardMessage', BoardMessage)