export const ADD_CROPS = "ADD_CROPS";
export const DELETE_SEED = "DELETE_SEED";

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

export const deleteSeed = (farmerId, seedId) => {
  return {
    type: DELETE_SEED,
    payload: {
      farmerId: farmerId,
      seedId: seedId,
    },
  };
};
