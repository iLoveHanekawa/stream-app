"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('<h1>Hi mom</h1>');
});
const port = Number(process.env.PORT) || 5000;
const start = (port) => {
    app.listen(port, () => {
        process.stdout.write('Server Deployed on:');
        console.log(`\x1b[33m`, `http://localhost:${port}/`);
    });
};
start(port);
