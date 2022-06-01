const app = require ('express')()
const http = require('http').createServer(app);
const io = require('socket.io')(http);

// const io = require ('socket.io')(http,{
//     cors: {origin: '*'}
// });

io.on('connection', (socket) => {
    socket.on('message', (message) => {
        io.emit('message', message);
    });
});

const port = 8080;
http.listen(port, () => console.log('listening on port '+port));