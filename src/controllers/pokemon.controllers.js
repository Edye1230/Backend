import "../models/Pokemon_Type.js";
import { Pokemon } from "../models/Pokemon.js"
import { Type } from "../models/Type.js"
import axios from "axios";

export async function getPokemons(req, res) {

    const respApi = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=30');
    let urlData = [];

    for (let i = 0; i < respApi.data.results.length; i++) {
        let respUrl = await axios.get(respApi.data.results[i].url)
        urlData.push({
            id: respUrl.data.id,
            name: respUrl.data.name, 
            types: respUrl.data.types.map((i) => i.type.name),
            stats_attack: respUrl.data.stats[1].base_stat,
            stats_speed: respUrl.data.stats[5].base_stat,
            img_url: respUrl.data.sprites.versions["generation-v"]["black-white"].animated.front_default
        })
    }

    const respDB = await Pokemon.findAll( {include: Type} );

    const dbResult = respDB.map((i) => {
        return ( { id: i.id, name: i.name, stats_attack: i.stats_attack, stats_speed: i.stats_speed, types: i.types.map(i=> i.name), img_url: i.img_url } )

    });

    const apiDbResult = urlData.concat(dbResult);
    res.send(apiDbResult)

};

//export async function 

console.log("poke.control.js");