import { DataTypes } from "sequelize";
import sequelize from "../../db.js";

export const Pokemon = sequelize.define("pokemon", {
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV1,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      stats_hp: {
        type: DataTypes.INTEGER,
        allowNull: true,
        validate: {
          min: 0,
          max: 200,
        },
      },
      stats_attack: {
        type: DataTypes.INTEGER,
        validate: {
          min: 0,
          max: 200,
        },
      },
      stats_defense: {
        type: DataTypes.INTEGER,
        validate: {
          min: 0,
          max: 200,
        },
      },
      stats_speed: {
        type: DataTypes.INTEGER,
        validate: {
          min: 0,
          max: 200,
        },
      },
      height: {
        type: DataTypes.INTEGER,
        validate: {
          min: 0,
          max: 50,
        },
      },
      weight: {
        type: DataTypes.INTEGER,
        validate: {
          min: 0,
          max: 2000,
        },
      },
      img_url: {
        type: DataTypes.STRING
      },
    },
    {
      timestamps: false
    }
);

console.log("model_poke");