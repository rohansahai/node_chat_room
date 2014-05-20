var socketIo = require('socket.io');





function createChat (server) {
  var io = socketIo.listen(server);
  io.sockets.on('connection', function (socket) {
    // io.sockets.emit('message', { text: 'this is the text' })
    socket.on('message', function (data){
      //console.log(data);
      io.sockets.emit('message', { text: data })
    });
  });
};

module.exports = createChat;

// our application, we want listen for a message event and respond by broadcasting the message text to the chatroom. Use the same socket.on('event', callback) pattern to set a callback for the message event that will be raised when a message is sent.
//
// For now, all this callback has to do is emit the received message to all the connected sockets.