import { Type } from "../models/Type.js";

export async function getTypes(req, res) {
    
    const dbTypes = await Type.findAll();
    const typesResult = dbTypes.map((i) => {
      return ({
        id: i.id,
        name: i.name
      })
    })
    res.send(typesResult);
};

console.log("type.control.js");