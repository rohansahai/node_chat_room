(function(root){
  var ChatApp = root.ChatApp = ( root.ChatApp || {} );

  var Chat = ChatApp.Chat = function (socket) {
    this.socket = socket;
  };

  Chat.prototype.sendMessage = function (text) {
    socket.emit("message", text);
  };

  Chat.prototype.nicknameChangeRequest = function (text) {
    socket.emit("nicknameChangeRequest", text);
  };

})(this);


// In a new file public/javascripts/chat.js, make a class constructor Chat that saves a Socket.IO socket as an attribute.
//
// Add a sendMessage method to the Chat class for transmitting a message to all users.
// Use the emit method to emit the message event with the text of the message.