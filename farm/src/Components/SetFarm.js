import axios from "axios";

export default async function SerFarm(id, name, strAccessToken) {
  const objHeader = {
    headers: {
      Authorization: `Bearer ${strAccessToken}`,
      "Content-Type": "application/json",
    },
    withCredentials: true,
  };
  const objCrops = await axios.get(
    `http://localhost:80/crop/info/${id}`,
    objHeader
  );
  const objFarmers = await axios.get(
    `http://localhost:80/farm/userinfo/${id}`,
    objHeader
  );
  const objStorage = await axios.get(
    `http://localhost:80/storage/info/${id}`,
    objHeader
  );
  const objSeeds = await axios.get(
    `http://localhost:80/seed/info/${id}`,
    objHeader
  );
  const arrIcon = ["🍎", "🍏", "🍐", "🍊", "🍋"].filter((el) => {
    if (objCrops.data.data.length === 0) {
      return true;
    }
    for (let crop of objCrops.data) {
      if (crop.icon === el) {
        return false;
      }
    }
    return true;
  });
  const objFarm = {
    farmId: id,
    farmName: name,
    crops: [...objCrops.data.data],
    iconList: arrIcon,
    farmers: [
      ...objFarmers.data.data.map((el) => {
        if (objSeeds.data.data.length === 0) {
          el.seeds = [];
          return el;
        }
        for (let seeds of objSeeds.data.data) {
          if (el.user_id === seeds.user_id) {
            el.seeds = seeds.seeds;
          }
        }
        return el;
      }),
    ],
    storage: [...objStorage.data.data],
  };
  return objFarm;
}
