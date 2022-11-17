import { DataTypes } from "sequelize";
import { sequelize } from "../../db.js";
//import { Pokemon } from "./Pokemon.js";
//import { Pokemon_Type } from "./Pokemon_Type.js";

export const Type = sequelize.define("type", {
      name: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,  
    }
);

