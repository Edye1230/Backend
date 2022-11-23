import axios from "axios";

export const postear = () => {
  axios.post(`http://localhost:3001/pokemon`, {
    name: "activador",
    stats_hp: 20,
    stats_attack: 20,
    stats_defense: 20,
    stats_speed: 20,
    height: 20,
    weight: 20,
    types: 20,
    img_url: "holis",
  });
};
