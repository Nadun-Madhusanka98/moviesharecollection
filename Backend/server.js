var express = require('express');
var app = express();
var mongoose = require('mongoose');
mongoose.set('strictQuery', false);
var routes = require('./route/routes');
const cors = require('cors');
app.use(cors(
    {
        origin: "http://localhost:4200"
    }
));

// For the Community message part
var path = require("path");
var http = require("http");
var socketIo = require("socket.io");

var server = http.createServer(app);

//Configure to use statics.
app.use(express.static(path.join(__dirname, "resources")));

// Set up the websocket.
let io = socketIo(server);

io.on("connection", function(socket) {
    socket.on("send message", function(msg) {
        socket.broadcast.emit("received message", msg);
    });
});

// Continue on the creating server and connecting mongodb
const PORT = 9000;
const HOST = 'localhost';

app.listen(PORT, HOST, function check(error)
{
    if(error)
    {
        console.log("error connecting to server");
    }
    else
    {
        console.log(`Server Started! at http://${HOST}:${PORT}`);
    }
});

mongoose.connect("mongodb+srv://movieshareLibrary:movieshareLibrary123Nadun@clustermoviesharelibrar.kayl27l.mongodb.net/MovieShareLibrary?retryWrites=true&w=majority",{useNewUrlParser: true, useUnifiedTopology: true },
function checkDB(error)
{
    if(error)
    {
        console.log("DB Connection error");
    }
    else
    {
        console.log("DB Connected Successfully!!");
    }
});

app.use(express.json());
app.use(routes);