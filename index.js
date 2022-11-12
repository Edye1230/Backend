/*import http from "http";
import path from 'path';
import fs from "fs";
import { fileURLToPath } from 'url';
import data from "./data.js"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer((req, res) => {
    switch(req.url) {

    case "/":
        fs.readFile(__dirname + "/index.html", (err, data) => {
            res.end(data)});
        break;
    case "/books":
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify({Libro: "Algún libro"}));
        break;
    case "/authors":
        res.setHeader("Content-Type", "application/json");
        res.end(JSON.stringify(data.authors));
        break;
    default:
        res.end("Página no encontrada");
        break;
    }

    console.log("Se solicitó la ruta:", req.url);

});

server.listen(process.env.PORT || 3000, () => {
    console.log("Servidor ejecutandose...")
});*/

import express from "express";
const server = express();

server.get("/", (req, res) => {
    res.send("Bienvenido");
})

server.get("/hola", (req, res) => {
    res.send("Hola mundo");
})

server.listen(3000, () => {
    console.log("Servidor con express ejecutado...");
});