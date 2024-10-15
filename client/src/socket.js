import { io } from 'socket.io-client';

const url = 'http://localhost';

export const socket = io(url);