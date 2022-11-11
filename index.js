const http = require("http");

//import os from "os";

console.log("Hola mundo!");

//console.log(os.platform());

const server = http.createServer((req, res) => {
    res.end("<h1>Hola mundo</h1>");
});

server.listen(process.env.PORT || 3000, () => {
    console.log("Servidor prendido");
});