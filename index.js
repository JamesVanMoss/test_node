const http = require ('http'). createServer();

const io = require ('socket.io')(http,{
    cors: {origin: '*'}
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('message', (message) => {
        console.log(message);
        io.emit('message', message);
    });
});

const port = 8080;
http.listen(port, () => console.log('listening on port '+port));