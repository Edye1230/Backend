import server from "./app.js"
import sequelize from "./db.js"
import axios from "axios";
import { Type } from "./src/models/Type.js";
//import { postear } from "./Pruebas/mod3.js"

const index = async () => {
    await sequelize.sync({ force: true });
    const res = await axios.get("https://pokeapi.co/api/v2/type");
    await res.data.results.forEach((i) => {
        Type.findOrCreate({ where: { name: i.name } });
    });
    //postear()

    server.listen(process.env.PORT || 3001, () => {
        console.log("Servidor encendido!")})

};

index();

console.log("index.js");