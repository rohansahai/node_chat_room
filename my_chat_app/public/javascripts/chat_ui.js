(function(root){
  var ChatApp = root.ChatApp = ( root.ChatApp || {} );

  $(document).ready(function () {

    var socket = io.connect();
    var chat = new ChatApp.Chat(socket);

    $("#chat-form").submit(function (event) {
      event.preventDefault();
      var text = $('#message-text').val();
      $('#message-text').val("");
      var nickName = checkIfNickName(text);
      if (nickName){
        chat.nicknameChangeRequest(nickName);
      } else {
        chat.sendMessage(text);
      }
    })

  })

  function checkIfNickName(text){
    var prefix = text.slice(0,6);
    if (prefix === "/nick "){
      return text.slice(6)
    }
    return false
  }

})(this);
