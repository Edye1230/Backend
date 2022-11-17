import Sequelize from "sequelize";


export const sequelize = new Sequelize('postgres://postgres:admin@localhost/pokemon2', {
    //logging: console.log,                  // Default, displays the first parameter of the log function call
    //logging: (...msg) => console.log(msg), // Displays all log function call parameters
    logging: false,                        // Disables logging
    //logging: msg => logger.debug(msg),     // Use custom logger (e.g. Winston or Bunyan), displays the first parameter
    //logging: logger.debug.bind(logger)     // Alternative way to use custom logger, displays all messages
});
//import { Pokemon } from "./src/models/Pokemon.js";
//import { Type } from "./src/models/Type.js";
