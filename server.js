import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
   // options
});

io.on("connect", (socket) => {

   socket.on("error", (err) => {
      console.log('connection error: ', err)
   })

   socket.on("close", () => {
      console.log('connection closed')
   })
   socket.on("disconnect", () => {
      console.log('connection disconnected ', socket.id)
   })
   socket.on("reconnect", () => {
      console.log('connection reconnected')
   })
   socket.on("reconnecting", () => {
      console.log('connection reconnected')
   })
   socket.on("reconnect_failed", () => {
      console.log('connection reconnected')
   })
   socket.on("reconnect_error", () => {
      console.log('connection reconnected')
   })


   socket.on('message', (message) => {
      console.log(`message via: ${socket.id}, ${message}`)
      socket.emit('message', `${socket.id}: ${message}`);
   })

   socket.emit('date', new Date().toDateString());

});




httpServer.listen(3000);