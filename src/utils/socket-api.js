import clientSocket from 'socket.io-client';

export const API_URL = 'http://localhost:5555';
const socket = clientSocket(`${API_URL}/queue`);

export const subscribe = (newCallback) => {
  socket.on('queue', (result) => {
    newCallback(result);
  });
};
