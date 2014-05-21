var socketIo = require('socket.io');
var guestNumber = 0;
var guests = {};

function createChat (server) {
  var io = socketIo.listen(server);
  io.sockets.on('connection', function (socket) {
    guestNumber++;
    guests[socket.id] = "guest" + guestNumber;

    io.sockets.emit('nicknamesList', { nameList: getNickNames() });

    socket.on('message', function (data){
      io.sockets.emit('message',
                      { text: guests[socket.id] + ": " + data })
    });

    socket.on('nicknameChangeRequest', function (data) {
      //check valid nickname, if valid send success true message, if not success false message
      var taken = false;
      for (var socketId in guests) {
        if (guests[socketId] == data) {
          taken = true;
        }
      }

      if (!taken) {
        guests[socket.id] = data;
        socket.emit('nicknameChangeResult', { success: true, message: "Nickname updated" });
        io.sockets.emit('nicknamesList', { nameList: getNickNames() });
      } else {
        socket.emit('nicknameChangeResult', { success: false, message: "Can't use that one" });
      }

    })
  });
};

function getNickNames() {
  var nameList = [];
  for (var socketId in guests) {
    nameList.push(guests[socketId]);
  }
  return nameList;
}

module.exports = createChat;
