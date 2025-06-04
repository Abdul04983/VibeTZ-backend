import messageRoutes from "./routes/messageRoutes.js";
   socket.on("sendMessage", (data) => {
  const { receiverId } = data;
  socket.to(receiverId).emit("receiveMessage", data);
});
app.use("/api/messages", messageRoutes);
