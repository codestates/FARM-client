import dummy from "../dummy.json";
import {
  ADD_CROPS,
  ADD_SEEDS,
  DELETE_SEED,
  MOVE_TO_STORAGE,
  GIVE_SEED,
  SET_FARM,
} from "../actions/actions";

const farmReducer = (state = dummy, action) => {
  switch (action.type) {
    case SET_FARM:
      console.log(`action.payload.obj`, action.payload.obj);
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
      // 추가된 작물종류가 이미 존재하면, seeds안에 추가만 해주고
      // 작물종류가 곳간에 존재하지 않으면, CropIcon이랑 seeds 모두 추가.
      const numIdx = state.storage.findIndex(
        (crop) => crop.CropIcon === cropIcon
      );

      if (numIdx !== -1) {
        // 동일한 작물종류가 이미 존재한다면
        const arrCopiedStorage = state.storage.slice();
        arrCopiedStorage[numIdx].seeds.push({
          seedId: seedId,
          name: seedName,
        });
        return Object.assign({}, state, {
          storage: arrCopiedStorage,
        });
      } else {
        // 동일한 작물종류가 없다면 CropIcon까지 추가
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
