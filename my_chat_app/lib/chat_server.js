var socketIo = require('socket.io');
var guestNumber = 0;
var guests = {};

function createChat (server) {
  var io = socketIo.listen(server);
  io.sockets.on('connection', function (socket) {
    guestNumber++;
    guests[socket.id] = "guest" + guestNumber;
    socket.on('message', function (data){
      io.sockets.emit('message',
                      { text: guests[socket.id] + ": " + data })
    });

    socket.on('nicknameChangeRequest', function (data) {
      //check valid nickname, if valid send success true message, if not success false message
      var taken = false;
      for (var name in guests) {
        if (guests[name] == data) {
          taken = true;
        }
      }

      if (!taken) {
        guests[socket.id] = data;
        socket.emit('nicknameChangeResult', { success: true, message: "Nickname updated" });
      } else {
        socket.emit('nicknameChangeResult', { success: false, message: "Can't use that one" });
      }

    })
  });

  // io.sockets.on('disconnect', function () {
  //   guestNumber--;
  // })
};

module.exports = createChat;
