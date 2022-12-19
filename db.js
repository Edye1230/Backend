import Sequelize from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize =
  process.env.NODE_ENV === "production"
    ? new Sequelize("postgres://lyfppwwh:DI24Lv6XqXueaRemcxoGsPEubqjLuqhn@babar.db.elephantsql.com/lyfppwwh", {
        //logging: false,
        dialectOptions: {
            ssl: {
              require: true,
              rejectUnauthorized: false
            }
          }
    })
    : new Sequelize("postgres://lyfppwwh:DI24Lv6XqXueaRemcxoGsPEubqjLuqhn@babar.db.elephantsql.com/lyfppwwh", {
      //logging: false,
      dialectOptions: {
          ssl: {
            require: true,
            rejectUnauthorized: false
          }
        }
  });

export default sequelize;

console.log("db.js");//CREANDO LOS TIPOS
/*const createTypes = async () => {
    await axios.get('https://pokeapi.co/api/v2/type').then(res => {
        const types = res.data.results;
        types.forEach((i) => {
            Type.findOrCreate({where: { name: i.name }});
        });
    });
    console.log("tipos creados");
};

createTypes();*/