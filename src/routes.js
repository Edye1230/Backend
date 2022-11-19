import { Router } from "express";
import { getPokemons, getPokemonById, getPokemonByName, postPokemon } from "./controllers/pokemon.controllers.js";
import { getTypes } from "./controllers/type.controllers.js";

const router = Router();

//pokemons
router.get("/pokemons", getPokemons);
router.get("/pokemon/:id", getPokemonById);
router.get("/pokemon", getPokemonByName);
router.post("/pokemon", postPokemon);

//types
router.get("/types", getTypes);

export default router;

console.log("routes.js");