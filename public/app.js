var url="http://localhost:3001/";
var socket = io(url)
var usertext= document.getElementById("usertext")

let send=()=>{
    const message=usertext.value
    socket.emit('send-message',message)
    var li = document.createElement("li")
    var litext= document.createTextNode(message)
    list.appendChild(li)
    li.appendChild(litext)  
    console.log(message);
   }
//    const Http = new XMLHttpRequest();
//    Http.open("POST", "http://localhost:3001/");
//    Http.setRequestHeader("Content-Type", "application/json");
//    Http.send(JSON.stringify(arr));
//    Http.onreadystatechange = (e) => {
//        let data = JSON.parse((Http.responseText));
//     console.log(data);
   
//            }


socket.on('chat-connect',(user)=> {
    var li = document.createElement("li")
    var litext= document.createTextNode(user)
    list.appendChild(li)
    li.appendChild(litext)
    console.log(user);
});
socket.on('disconnect',()=> {
    console.log("disconnect")
});

// socket.on("NOTIFICATION", function(){
//     console.log("notification received");
// })

// socket.on("COMMON_TOPIC", function(message){
//     console.log("comon topic received", message);
// })








