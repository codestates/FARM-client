export const ADD_CROPS = "ADD_CROPS";

export const DELETE_SEED = "DELETE_SEED";

export const ADD_SEEDS = "ADD_SEEDS";

export const GIVE_SEED = "GIVE_SEED";

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

export const addSeeds = (id, name) => {
  return {
    type: ADD_SEEDS,
    payload: {
      id,
      name,
    },
  };
};

export const giveSeed = (cropsId, seedId, userId) => {
  return {
    type: GIVE_SEED,
    payload: {
      cropsId,
      seedId,
      userId,
    },
  };
};
