import { sequelize } from "../../index.js";
//import { Pokemon } from "./Pokemon.js";
//import { Type } from "./Type.js";

export const Pokemon_Type = sequelize.define("Pokemon_Type2", {}, { timestamps: false })

//Pokemon.belongsToMany(Type, { through: Pokemon_Type });
//Type.belongsToMany(Pokemon, { through: Pokemon_Type });

console.log("model_poke_type");