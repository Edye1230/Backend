import { Type } from "./src/models/Type.js"
import axios from "axios";
//CREANDO LOS TIPOS

export const creatingTypes = async () => {
  await axios.get("https://pokeapi.co/api/v2/type").then((res) => {
    const types = res.data.results;
    types.forEach((i) => {
      Type.findOrCreate({ where: { name: i.name } });
    });
  });
  console.log("tipos creados");
};