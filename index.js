import server from "./app.js"
import sequelize from "./db.js"

sequelize.sync({ force: true }).then(() => {
    server.listen(process.env.PORT || 3001, () => { 
        console.log("Servidor encendido!");
    })
});

console.log("index.js");