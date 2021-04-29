export const ADD_CROPS = "ADD_CROPS";
export const ADD_SEEDS = "ADD_SEEDS";

export const addCrops = (name, icon, idx) => {
  return {
    type: ADD_CROPS,
    payload: {
      name,
      icon,
      idx,
    },
  };
};

export const addSeeds = (id, name) => {
  return {
    type: ADD_SEEDS,
    payload: {
      id,
      name,
    },
  };
};
