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
    : new Sequelize(process.env.DATABASE_URL, {
          logging: false,
        });
        
export default sequelize;

console.log("db.js");