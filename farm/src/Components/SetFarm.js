import axios from "axios";

export default async function SetFarm(id, name, strAccessToken) {
  const objHeader = {
    headers: {
      Authorization: `Bearer ${strAccessToken}`,
      "Content-Type": "application/json",
    },
    withCredentials: true,
  };
  const objCrops = await axios.get(
    `${process.env.REACT_APP_API_URL}/crop/info/${id}`,
    objHeader
  );
  const objFarmers = await axios.get(
    `${process.env.REACT_APP_API_URL}/farm/userinfo/${id}`,
    objHeader
  );
  const objStorage = await axios.get(
    `${process.env.REACT_APP_API_URL}/storage/info/${id}`,
    objHeader
  );
  const objSeeds = await axios.get(
    `${process.env.REACT_APP_API_URL}/seed/info/${id}`,
    objHeader
  );
  const arrIconList = await axios.get(
    `${process.env.REACT_APP_API_URL}/crop/kinds`,
    objHeader
  );
  const arrIcon = arrIconList.data.data.filter((el) => {
    if (objCrops.data.data.length === 0) {
      return true;
    }
    for (let crop of objCrops.data.data) {
      if (crop.Kind === el) {
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
