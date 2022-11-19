import "../models/Pokemon_Type.js";
import { Pokemon } from "../models/Pokemon.js"
import { Type } from "../models/Type.js"
import axios from "axios";
import { Op } from "sequelize";

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

export const getPokemonById = async (req, res) => {
    let { id } = req.params;
    let apiResult, dbResultFormated, finalDbResult;

    try{

    if (id.length > 8) {

        const dbResult = await Pokemon.findAll({ where: { id: id }, include: Type }); //1
        dbResultFormated = Object.values(dbResult)[0]; //2
        finalDbResult = {   id: dbResultFormated.id,
                            name: dbResultFormated.name,
                            stats_hp: dbResultFormated.stats_hp,
                            stats_attack: dbResultFormated.stats_attack,
                            stats_defense: dbResultFormated.stats_defense,
                            stats_speed: dbResultFormated.stats_speed,
                            height: dbResultFormated.height,
                            weight: dbResultFormated.weight, 
                            types: dbResultFormated.types.map(i => i.name), 
                            img_url: dbResultFormated.img_url
                        }; //3
            
        res.send(finalDbResult)

    } else {
                    
        const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);

          apiResult = { id: resp.data.id,
                      name: resp.data.name,
                      stats_hp: resp.data.stats[0].base_stat,
                      stats_attack: resp.data.stats[1].base_stat,
                      stats_defense: resp.data.stats[2].base_stat,
                      stats_speed: resp.data.stats[5].base_stat,
                      height: resp.data.height,
                      weight: resp.data.weight, 
                      types: resp.data.types.map((i) => i.type.name), 
                      img_url: resp.data.sprites.versions["generation-v"]["black-white"].animated.front_default };
  
        res.send(apiResult);
    };

    } catch(e) {res.json([])}

};

export const getPokemonByName = async (req, res) => {
    let { name } = req.query;
    let apiResult = [];
    
    let dbResult = await Pokemon.findAll({
        include: Type,
        where: { name: { [Op.iLike]: `%${name}%` } }
    });

    let dbResultFormated = await dbResult.map((i) => {
        return ({ 
            id: i.id,
            name: i.name, 
            types: i.types.map(i => i.name),
            stats_attack: i.stats_attack,
            stats_speed: i.stats_speed,
            img_url: i.img_url
        })
    });

    try{

        const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    
            apiResult = [resp.data].map((i) => {
                return ({ 
                    id: i.id,
                    name: i.name, 
                    types: i.types.map(i => i.type.name),
                    stats_attack: i.stats[1].base_stat,
                    stats_speed: i.stats[5].base_stat,
                    img_url: i.sprites.versions["generation-v"]["black-white"].animated.front_default
                })
            });
            
        } catch(error) { return res.json(dbResultFormated) }


    let apiDbResult = dbResultFormated.concat(apiResult);
  
    res.send(apiDbResult)

};

export const postPokemon = async (req, res) => {

    let { name } = req.params;
    let apiResult = [];
    
    let dbResult = await Pokemon.findAll({
        include: Type,
        where: { name: { [Op.iLike]: `%${name}%` } }
    });

    let dbResultFormated = await dbResult.map((i) => {
        return ({ 
            id: i.id,
            name: i.name, 
            types: i.types.map(i => i.name),
            stats_attack: i.stats_attack,
            stats_speed: i.stats_speed,
            img_url: i.img_url
        })
    });

    try{

        const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
    
            apiResult = [resp.data].map((i) => {
                return ({ 
                    id: i.id,
                    name: i.name, 
                    types: i.types.map(i => i.type.name),
                    stats_attack: i.stats[1].base_stat,
                    stats_speed: i.stats[5].base_stat,
                    img_url: i.sprites.versions["generation-v"]["black-white"].animated.front_default
                })
            });
            
        } catch(error) { return res.json(dbResultFormated) }


    let apiDbResult = dbResultFormated.concat(apiResult);
    res.send(apiDbResult)

};

console.log("poke.control.js");