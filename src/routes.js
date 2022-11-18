import { Router } from "express";
import { getPokemons } from "./controllers/pokemon.controllers.js";
import { getTypes } from "./controllers/type.controllers.js";

const router = Router();

//pokemons
router.get("/pokemons", getPokemons);

//types
router.get("/types", getTypes);

export default router;

console.log("routes.js");