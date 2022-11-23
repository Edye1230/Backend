import express from "express";
import morgan from "morgan";
import routes from "./src/routes.js"

const server = express();

server.use(morgan("dev"));
server.use(express.json());

server.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    next();
  });

server.use("/", routes);

export default server;

console.log("app.js");
