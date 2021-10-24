import io from 'socket.io-client';

export const API_URL = 'http://localhost:5555';
const socket = io.connect('http://localhost:5555');

export const subscribe = (newCallback) => {
  socket.on('queue', (result) => {
    console.log(result)
    console.log("test")
    newCallback(result);
  });
};
