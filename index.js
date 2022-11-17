import Sequelize from "sequelize";
import express from "express";
import morgan from "morgan";
//import { sequelize } from "./db.js"
//import routes from "./src/routes.js"

export const server = express();

export const sequelize = new Sequelize('postgres://ttlxyvkiwhmfsh:3496ee01ae3d4a6886404336e42a3f625376a2416057ed8c145a9d712694c1a2@ec2-52-1-17-228.compute-1.amazonaws.com:5432/d25rnefv34vjs4', {
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
process.env ? console.log(process.env) : console.log("No hay process");