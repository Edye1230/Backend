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
          //logging: false,
        });

console.log(process.env);

/*sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
  }).catch(err => {
    console.error('Unable to connect to the database:', err);
});*/

/*export const sequelize = new Sequelize('postgres://ttlxyvkiwhmfsh:3496ee01ae3d4a6886404336e42a3f625376a2416057ed8c145a9d712694c1a2@ec2-52-1-17-228.compute-1.amazonaws.com:5432/d25rnefv34vjs4', {
    //logging: false,
    dialectOptions: {
        ssl: {
          require: true,
          rejectUnauthorized: false
        }
      }
});
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });*/

export default sequelize;

console.log("db.js");