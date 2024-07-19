const express = require("express");
const app = express();
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: true,
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join_room", (data) => {
    try {
      socket.join(data);
      console.log(`User with ID: ${socket.id} joined room: ${data}`);
    } catch (error) {
      console.error(`Error joining room: ${error.message}`);
      // Handle error (e.g., send an error event to the client)
    }
  });

  socket.on("send_message", (data) => {
    try {
      socket.to(data.room).emit("receive_message", data);
    } catch (error) {
      console.error(`Error sending message: ${error.message}`);
      // Handle error (e.g., send an error event to the client)
    }
  });

  socket.on("disconnect", () => {
    console.log("User Disconnected", socket.id);
  });

  // Error handling for unexpected errors
  socket.on("error", (error) => {
    console.error("Socket error:", error);
    // Handle error (e.g., log, send an error event to the client)
  });
});

server.listen(3001, () => {
  console.log("SERVER RUNNING");
});
