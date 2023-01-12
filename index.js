"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const socket_io_1 = require("socket.io");
const peer_1 = require("peer");
const http = __importStar(require("http"));
require("dotenv/config");
const app = (0, express_1.default)();
const server = http.createServer(app);
const io = new socket_io_1.Server(server, {
    cors: {
        origin: ['http://127.0.0.1:5173'],
        methods: ['GET', 'POST'],
        credentials: true
    }
});
const peerServer = (0, peer_1.PeerServer)({ port: 3000, path: '/peerjs' });
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('<h1>Hi mom</h1>');
});
const port = Number(process.env.PORT) || 5000;
const start = (port) => {
    server.listen(port, () => {
        process.stdout.write('Server Deployed on:');
        console.log(`\x1b[33m`, `http://localhost:${port}/`);
    });
};
io.on('connect', (socket) => {
    console.log(`User connected with socketId: ${socket.id}`);
    socket.on('disconnect', () => {
        console.log(`User disconnected with socketId: ${socket.id}`);
    });
    socket.on('join-room', (roomId, userId) => {
        socket.join(roomId);
        socket.broadcast.to(roomId).emit('user-connected', userId);
    });
});
start(port);
