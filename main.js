import { io } from 'https://cdn.socket.io/4.4.1/socket.io.esm.min.js';

const socket = io('http://localhost:3000');

btn.addEventListener('click', (e) => {
   socket.emit('message', 'ss')
});
socket.on('connection', (arg) => {
   console.log('arg: ', arg);
   document.body.innerHTML += arg;
});