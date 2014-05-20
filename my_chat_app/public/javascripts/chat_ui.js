(function(root){
  var ChatApp = root.ChatApp = ( root.ChatApp || {} );

  $(document).ready(function () {
    console.log("Document ready")

    var socket = io.connect();
    var chat = new ChatApp.Chat(socket);

    $("#chat-form").submit(function (event) {
      console.log("form submited")
      event.preventDefault();
      var text = $('#message-text').val();
      var escaped = ("<div></div>").text(text);
      chat.sendMessage(text);
      $("#message-display").append(escaped);
    })

  })

})(this);

console.log("whatever")