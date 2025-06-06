<<<<<<< HEAD
const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://vibetz_user:vibetz2255@cluster0.isvxnjn.mongodb.net/vibetz_db?retryWrites=true&w=majority")
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((err) => console.error("❌ MongoDB connection failed:", err));
=======
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(express.json());

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

// Socket.io logic inside connection
io.on("connection", (socket) => {
  console.log("User connected");

  socket.on("sendMessage", (data) => {
    console.log("Message received:", data);
    io.emit("receiveMessage", data);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
>>>>>>> 43a294fbe3e8f7ee6a3acb98acad145775989dfa
