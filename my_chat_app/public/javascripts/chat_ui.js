(function(root){
  var ChatApp = root.ChatApp = ( root.ChatApp || {} );

  $(document).ready(function () {

    var socket = io.connect();
    var chat = new ChatApp.Chat(socket);

    $("#chat-form").submit(function (event) {
      event.preventDefault();
      var text = $('#message-text').val();
      var escaped = $("<div></div>").text(text);
      chat.sendMessage(text);
      $("#message-display").append(escaped);
    })

  })

})(this);
