import Sequelize from "sequelize";
import express from "express";
import morgan from "morgan";
//import { sequelize } from "./db.js"
//import routes from "./src/routes.js"

export const server = express();

export const sequelize = new Sequelize('postgres://postgres:admin@localhost/pokemon2', {
    logging: false,
});

import("./src/models/Pokemon.js");
import("./src/models/Type.js");
import("./src/models/Pokemon_Type.js");
import("./src/routes.js");

//server.use("/", routes);
server.use(morgan("tiny"));
server.use(express.json());
server.use(express.static("public"));

sequelize.sync({ force: true }).then(() => {
    server.listen(process.env.PORT || 3000, () => {
        console.log("Servidor encendido!");
    })
});

console.log("index.js");