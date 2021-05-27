const boardMessage = require('../models/BoardMessage');

exports.getBoardMessage = (req, res) => {
    boardMessage.find({}, (err, message) => {
       res.send(message)
    })
}

exports.createBoardMessage = (req, res) => {
    const message = new boardMessage(req.body.boardMessage);
    message.save();
}