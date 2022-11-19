import sequelize from "../../db.js";
import axios from "axios";
import { Pokemon } from "./Pokemon.js";
import { Type } from "./Type.js";

export const Pokemon_Type = sequelize.define("Pokemon_Type", {}, { timestamps: false })

Pokemon.belongsToMany(Type, { through: Pokemon_Type });
Type.belongsToMany(Pokemon, { through: Pokemon_Type });

axios.get('https://pokeapi.co/api/v2/type').then(res => {
    const types = res.data.results;
    types.forEach((i) => {
        Type.findOrCreate({where: { name: i.name }});
    });
});

  console.log("model_poke_type");