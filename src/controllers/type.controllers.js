import { Pokemon } from "../models/Pokemon.js"
import { Type } from "../models/Type.js"


export async function getTypes(req, res) {
    console.log("Hola");
    res.send("asdads")
    res.render("regular")
}