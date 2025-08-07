const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();
const userRoutes = require("./routes/userRoutes");
const messageRoute=require("./routes/messagesRoute");
const socket=require("socket.io");
require("dotenv").config();
const dbURI = 'mongodb://localhost:27017/chat';
app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));


app.use("/api/auth",userRoutes);
app.use("/api/messages",messageRoute);

mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("DB Connected");
}).catch((err) => {
    console.log(err.message);
});

const PORT = process.env.PORT || 5000; // Changed port to 4000 (or any available port)

const server = app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
});

const io =socket(server,{
    cors:{
        origin:"http://localhost:3000",
        credentials:true,
    },
});

global.onlineUsers=new Map();

io.on("connection",(socket)=>{
    global.chatSocket=socket;
    socket.on("add-user",(userId)=>{
        onlineUsers.set(userId,socket.id);
    });
   socket.on("send-msg",(data)=>{
      const sendUserSocket=onlineUsers.get(data.to);
      if(sendUserSocket){
        socket.to(sendUserSocket).emit("msg-receive",data.message);
      }
   });
});