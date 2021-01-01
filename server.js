var express = require("express");
var path = require("path");
var cors = require('cors');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var http = require("http");
var socketIO = require('socket.io');


var app= express()
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json())

var PORT = process.env.PORT || 3001


app.get('/',(res,req,next)=>{
    req.send("<h1>Server</h1>")

})

app.use("/", express.static(path.resolve(path.join(__dirname,'public'))))
var server = http.createServer(app);

const io = socketIO(server);

// io.on('connection', user=> {console.log("clint id",user.id);});
// io.on('disconnect', user=>{console.log("dissconect id",user.id);});

io.on('connection', user => {
        
console.log("connection id",user.id);

user.on('send-message',(message)=>{
    console.log("message",message);
    user.broadcast.emit("chat-connect",message)

})

user.on('disconnect', () => { console.log("disconnect id",user.id);});
});

server.listen(PORT,()=>{
console.log("Server",PORT);
})