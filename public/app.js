var url="http://localhost:3001/";
var socket = io(url)
var tex = document.getElementById("tex")
var list = document.getElementById("list")
var text = document.getElementById("text")
// var arr=[]

let send=()=>{
    const message=tex.value
    socket.emit('send-message',message)
    var li = document.createElement("li")
    var litext= document.createTextNode(message)
    list.appendChild(li)
    li.appendChild(litext)  
    console.log(message);
// var a= arr.push("1",message)
// console.log(a);
}

socket.on('chat-connect',(user)=> {
    var li = document.createElement("li")
    var litext= document.createTextNode(user)
    list.appendChild(li)
    li.appendChild(litext)
    console.log(user);
//     var a= arr.push("2",user)
// console.log(a);  
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








