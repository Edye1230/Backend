import express, { application } from "express";
const server = express();

let resultado = 0;

server.use(express.json());

server.get("/suma", (req, res) => {
    resultado++;
    res.send(`Sumando ${resultado}`);
});

server.get("/resta", (req, res) => {
    resultado--;
    res.send(`Restando ${resultado}`);
});

server.get("/multi", (req, res) => {
    resultado = resultado * resultado;
    res.send(`Multiplicando ${resultado}`);
});

server.get("/divi", (req, res) => {
    resultado = resultado / 2;
    res.send(`Dividiendo ${resultado}`);
});


/*server.listen(process.env.PORT || 3000, () => {
    console.log("Servidor con express ejecutadose...");
});*/