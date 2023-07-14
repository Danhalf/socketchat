import { io } from 'https://cdn.socket.io/4.4.1/socket.io.esm.min.js';

const socket = io('http://localhost:3000');

const btn = document.getElementById('btn');
const input = document.getElementById('input');
const chat = document.querySelector('.chat');

btn.addEventListener('click', (e) => {
   e.preventDefault();
   const { value } = input
   socket.emit('message', value);
});

socket.on('date', (date) => {
   console.log('date: ', date);
});

socket.on('message', (msg) => {
   const message = document.createElement('div');
   message.classList.add('message');
   message.textContent = msg;
   chat.appendChild(message);
   chat.scrollTop = chat.scrollHeight;
   input.value = '';
});

