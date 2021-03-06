import dummy from "../dummy.json";
import {
  ADD_CROPS,
  CHANGE_CROPS_NAME,
  ADD_SEEDS,
  DELETE_SEED,
  MOVE_TO_STORAGE,
  GIVE_SEED,
  SET_FARM,
  INVITE_FARMERS,
  SET_STORAGE,
  DELETE_SEED_FROM_CROP,
} from "../actions/actions";

const farmReducer = (state = dummy, action) => {
  switch (action.type) {
    case SET_FARM:
      return action.payload.obj;

    case ADD_CROPS:
      let crops = {
        crops_id: action.payload.id,
        name: action.payload.name,
        Kind: action.payload.icon,
        Seeds: [],
      };
      let icon = state.iconList.filter((el, idx) => {
        if (idx !== action.payload.idx) {
          return el;
        }
      });
      return Object.assign({}, state, {
        iconList: icon,
        crops: [...state.crops, crops],
      });

    case CHANGE_CROPS_NAME:
      return {
        ...state,
        crops: state.crops.map((crop) => {
          if (crop.crops_id === action.payload.crops_id) {
            return { ...crop, name: action.payload.newName };
          }
          return crop;
        }),
      };

    case DELETE_SEED:
      return Object.assign({}, state, {
        farmers: [
          ...state.farmers.map((farmer) => {
            if (farmer.user_id === action.payload.farmerId) {
              farmer.seeds = farmer.seeds.filter(
                (seed) => seed.seed_id !== action.payload.seedId
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
            if (el.crops_id === action.payload.id) {
              el.Seeds = [
                ...el.Seeds,
                {
                  seed_id: action.payload.seedID,
                  seed_name: action.payload.name,
                  isHarvested: true,
                },
              ];
              return el;
            } else {
              return el;
            }
          }),
        ],
      });

    case MOVE_TO_STORAGE:
      const cropIcon = action.payload.icon;
      const seedId = action.payload.id;
      const seedName = action.payload.name;
      // ????????? ??????????????? ?????? ????????????, seeds?????? ????????? ?????????
      // ??????????????? ????????? ???????????? ?????????, CropIcon?????? seeds ?????? ??????.
      const numIdx = state.storage.findIndex(
        (crop) => crop.CropIcon === cropIcon
      );

      if (numIdx !== -1) {
        // ????????? ??????????????? ?????? ???????????????
        const arrCopiedStorage = state.storage.slice();
        arrCopiedStorage[numIdx].seeds.push({
          seedId: seedId,
          name: seedName,
        });
        return Object.assign({}, state, {
          storage: arrCopiedStorage,
        });
      } else {
        // ????????? ??????????????? ????????? CropIcon?????? ??????
        return Object.assign({}, state, {
          storage: [
            ...state.storage,
            {
              CropIcon: cropIcon,
              seeds: [
                {
                  seedId: seedId,
                  name: seedName,
                },
              ],
            },
          ],
        });
      }

    case GIVE_SEED:
      let objSeed = {};
      return Object.assign({}, state, {
        crops: [
          ...state.crops.map((el) => {
            if (el.crops_id === action.payload.cropsId) {
              el.Seeds = [
                ...el.Seeds.filter((data) => {
                  if (data.seed_id === action.payload.seedId) {
                    objSeed = {
                      seed_id: data.seed_id,
                      seedname: data.seed_name,
                      kind: el.Kind,
                    };
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
            if (el.user_id === action.payload.userId) {
              el.seeds = [...el.seeds, objSeed];
              return el;
            } else {
              return el;
            }
          }),
        ],
      });

    case INVITE_FARMERS:
      return Object.assign({}, state, {
        farmers: [
          ...state.farmers,
          {
            user_id: action.payload.strId,
            name: action.payload.strUsername,
            email: action.payload.strEmail,
            seeds: [],
          },
        ],
      });

    case SET_STORAGE:
      return Object.assign({}, state, {
        storage: action.payload.arrStorage,
      });

    case DELETE_SEED_FROM_CROP:
      return Object.assign({}, state, {
        crops: state.crops.map((crop) => {
          if (crop.crops_id === action.payload.cropsId) {
            return {
              ...crop,
              Seeds: crop.Seeds.filter((seed) => {
                return seed.seed_id !== action.payload.seedId;
              }),
            };
          } else {
            return crop;
          }
        }),
      });

    default:
      return state;
  }
};

export default farmReducer;
