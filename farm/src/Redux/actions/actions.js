export const ADD_CROPS = "ADD_CROPS";

export const DELETE_SEED = "DELETE_SEED";

export const ADD_SEEDS = "ADD_SEEDS";

export const MOVE_TO_STORAGE = "MOVE_TO_STORAGE";

export const GIVE_SEED = "GIVE_SEED";

export const CREATE_FARM = "CREATE_FARM";

export const SET_USERINFO = "SET_USERINFO";

export const SET_NO_AUTH = "SET_NO_AUTH";

export const SET_AUTH = "SET_AUTH";

export const SET_FARM = "SET_FARM";

export const INVITE_FARMERS = "INVITE_FARMERS";

export const SET_STORAGE = "SET_STORAGE";

export const addCrops = (id, name, icon, idx) => {
  return {
    type: ADD_CROPS,
    payload: {
      id,
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
      farmerId,
      seedId,
    },
  };
};

export const addSeeds = (id, seedID, name) => {
  return {
    type: ADD_SEEDS,
    payload: {
      id,
      seedID,
      name,
    },
  };
};

export const moveToStorage = (icon, id, name) => {
  return {
    type: MOVE_TO_STORAGE,
    payload: {
      icon,
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

export const createFarm = (id, name, image) => {
  return {
    type: CREATE_FARM,
    payload: {
      id,
      name,
      image,
    },
  };
};

export const setUserInfo = (objUserInfo, arrProjectList) => {
  return {
    type: SET_USERINFO,
    payload: {
      objUserInfo,
      arrProjectList,
    },
  };
};

export const setAuth = (accessToken) => {
  return {
    type: SET_AUTH,
    payload: {
      accessToken,
    },
  };
};

export const setNoAuth = () => {
  return {
    type: SET_NO_AUTH,
    payload: {},
  };
};

export const setFarm = (obj) => {
  return {
    type: SET_FARM,
    payload: {
      obj,
    },
  };
};

export const inviteFarmers = (strId, strUsername, strEmail) => {
  return {
    type: INVITE_FARMERS,
    payload: {
      strId,
      strUsername,
      strEmail,
    },
  };
};

export const setStorage = (arrStorage) => {
  return {
    type: SET_STORAGE,
    payload: {
      arrStorage,
    },
  };
};
