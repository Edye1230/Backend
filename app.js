import express from "express";
import morgan from "morgan";
import routes from "./src/routes.js"

const server = express();

server.use("/", routes);
server.use(morgan("tiny"));
server.use(express.json());
server.use(express.static("public"));

export default server;

console.log("app.js");
