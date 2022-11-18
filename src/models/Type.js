import { DataTypes } from "sequelize";
import sequelize from "../../db.js";
import { Pokemon } from "./Pokemon.js";
import { Pokemon_Type } from "./Pokemon_Type.js";

export const Type = sequelize.define("type", {
      name: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,  
    }
);

Pokemon.belongsToMany(Type, { through: Pokemon_Type });
Type.belongsToMany(Pokemon, { through: Pokemon_Type });

console.log("model_type");