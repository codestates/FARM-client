import dummy from "../dummy.json";
import {
  ADD_CROPS,
  ADD_SEEDS,
  DELETE_SEED,
  GIVE_SEED,
} from "../actions/actions";

const farmReducer = (state = dummy, action) => {
  switch (action.type) {
    case ADD_CROPS:
      let crops = {
        id: state.cropsCnt,
        name: action.payload.name,
        icon: action.payload.icon,
        seedsCnt: 1,
        seeds: [],
      };
      let icon = state.iconList.filter((el, idx) => {
        if (idx !== action.payload.idx) {
          return el;
        }
      });
      return Object.assign({}, state, {
        iconList: icon,
        cropsCnt: state.cropsCnt + 1,
        crops: [...state.crops, crops],
      });
    case DELETE_SEED:
      return Object.assign({}, state, {
        farmers: [
          ...state.farmers.map((farmer) => {
            if (farmer.id === action.payload.farmerId) {
              farmer.seeds = farmer.seeds.filter(
                (seed) => seed.id !== action.payload.seedId
              );
            }
            return farmer;
          }),
        ],
      });

    case ADD_SEEDS:
      return Object.assign({}, state, {
        crops: [
          ...state.crops.map((el) => {
            if (el.id === action.payload.id) {
              el.seeds = [
                ...el.seeds,
                { id: el.seedsCnt, name: action.payload.name },
              ];
              el.seedsCnt++;
              return el;
            } else {
              return el;
            }
          }),
        ],
      });
    case GIVE_SEED:
      let objSeed = {};
      return Object.assign({}, state, {
        crops: [
          ...state.crops.map((el) => {
            if (el.id === action.payload.cropsId) {
              el.seeds = [
                ...el.seeds.filter((data) => {
                  if (data.id === action.payload.seedId) {
                    objSeed = { ...data, CropIcon: el.icon };
                    return false;
                  } else {
                    return true;
                  }
                }),
              ];
              return el;
            } else {
              return el;
            }
          }),
        ],
        farmers: [
          ...state.farmers.map((el) => {
            if (el.id === action.payload.userId) {
              el.seeds = [...el.seeds, objSeed];
              return el;
            } else {
              return el;
            }
          }),
        ],
      });
    default:
      return state;
  }
};

export default farmReducer;
