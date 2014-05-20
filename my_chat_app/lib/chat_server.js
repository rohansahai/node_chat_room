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
