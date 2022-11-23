import Sequelize from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize =
  process.env.NODE_ENV === "production"
    ? new Sequelize(process.env.DATABASE_URL, {
        //logging: false,
        dialectOptions: {
            ssl: {
              require: true,
              rejectUnauthorized: false
            }
          }
    })
    : new Sequelize("postgres://ttlxyvkiwhmfsh:3496ee01ae3d4a6886404336e42a3f625376a2416057ed8c145a9d712694c1a2@ec2-52-1-17-228.compute-1.amazonaws.com:5432/d25rnefv34vjs4", {
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