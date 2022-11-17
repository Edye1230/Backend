import { sequelize } from "./db.js"
import express from "express";
import morgan from "morgan";
import routes from "./src/routes.js"

export const server = express();

server.use("/", routes);
server.use(morgan("tiny"));
server.use(express.json());
server.use(express.static("public"));

sequelize.sync({ force: true }).then(() => {
    server.listen(process.env.PORT || 3000, () => {
        console.log("Servidor encendido!");
    })
});

//console.log("asdas", sequelize.models);