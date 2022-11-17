import { fetchDatos } from "./Pruebas/mod1.js"

async function holis () { 
    let resp = await fetchDatos();
    resp.push("d");
    return console.log(resp);
}

holis()