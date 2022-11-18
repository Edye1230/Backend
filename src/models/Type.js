import { DataTypes } from "sequelize";
import sequelize from "../../db.js";

export const Type = sequelize.define("type", {
      name: {
        type: DataTypes.STRING,
      },
    },
    {
      timestamps: false,  
    }
);

console.log("model_type");