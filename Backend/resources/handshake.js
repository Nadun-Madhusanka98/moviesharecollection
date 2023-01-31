$(function() {
    let socket = io("http://localhost:9000");

    socket.on("received message", function(msg) {
        $("#board").append("<p class=\"message\">" + msg + "</p>");
    });

    $("#send").click(function() {
        let msg = $("#msg").val();
        socket.emit("send message", msg);
        $("#board").append("<p class=\"message sent\">" + msg + "</p>");
        $("#msg").val("");
    });
});