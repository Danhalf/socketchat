import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
   // options
});

io.on("connection", (socket) => {
   // ...
   console.log('connect on: ', socket.id)
   socket.emit('<h2>Hello</h2>')
});

httpServer.listen(3000);