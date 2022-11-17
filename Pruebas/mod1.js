/*let sequelize1

export const Project = sequelize1.define(
  "projects",
  {
    name: {
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: false
  }
);*/


let array = ["a", "b", "c"];

const getDatos = () => {
  return new Promise ((res, rej) => {
    setTimeout(() => {
      res(array);
    }, 1000)
})}


//getDatos().then((data) => console.log(data))

/*export async function fetchDatos () {
  const respuesta = await getDatos();
  return respuesta;
}*/


//export const Filtrado = getDatos().filter((item, index) => item === "a");

export const Proyecto = getDatos();
