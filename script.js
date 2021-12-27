
var messages = document.getElementById("messages");
var textbox = document.getElementById("textbox");
var button = document.getElementById("button");
var button2 = document.getElementById("button2");

button.addEventListener("click", function(){
     var newMessage = document.createElement("li");
     newMessage.innerHTML = textbox.value;
     messages.appendChild(newMessage);
     textbox.value = "";

});


