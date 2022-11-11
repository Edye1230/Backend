const http = require("http");

//import os from "os";

console.log("Hola mundo!");

//console.log(os.platform());

const server = http.createServer((req, res) => {
    res.status = 200;
    res.setHeader("Content-Type", "text/plain")
    res.end("Hola mundo");
});

server.listen(3000, () => {
    console.log("Servidor prendido");
});