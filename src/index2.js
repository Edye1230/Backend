import express, { application } from "express";
import morgan from "morgan";
const server = express();

import { hola, hola2 } from "./modulo.js";

hola();
hola2();

let _db_ = "nada";

server.use(express.json());
server.use(morgan("tiny"))

server.get("/", (req, res) => {
    res.send("Bienvenido!");
});

server.get("/hola", (req, res) => {
    res.send("Entrasta a ¡Hola Mundo!");
});

server.get("/hola/:id", (req, res) => {
    res.send(`Entraste a ¡Hola mundo! con el ID: ${req.params.id} y ${_db_}`);
    console.log(req.params);
    _db_ = "algo";
});

server.post("/hola", (req, res) => {
    res.send("Hola mundo POST!");
    console.log("el body", req.body);
    console.log(typeof req.body);
});

server.put("/hola", (req, res) => {
    res.send("Hola mundo PUT!");
});

server.delete("/hola", (req, res) => {
    res.send("Hola mundo DELETE!");
});



server.listen(process.env.PORT || 3000, () => {
    console.log("Server activo!");
});

