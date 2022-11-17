import { Router } from "express";
import { getPokemons } from "./controllers/pokemon.controllers.js";
import { getTypes } from "./controllers/type.controllers.js";
import { server } from "../index.js"

const router = Router();


//pokemons
router.get("/pokemons", getPokemons);

//types
router.get("/types", getTypes);

server.use("/", router)

console.log("routes.js");

export default router;