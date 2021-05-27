var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http, {
    cors: {
        origin: '*',
    }
    });

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
    });
});

http.listen(5000, () => {
    console.log('listening on *:3000');
});

const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const urlEncodedParser = bodyParser.urlencoded({extended: false});

io.on("connection", socket => {
    console.log(123);
});





const boardController = require('./controllers/boardController')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/board/index', boardController.getBoardMessage);
app.post('/api/board/create', boardController.createBoardMessage);


;(async () => {
    try {
        await mongoose.connect('mongodb+srv://kurts:GFJ84en8U@cluster0.qxoje.mongodb.net/app?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
})();




