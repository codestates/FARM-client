import dummy from "../userDummy.json";
import { CREATE_FARM } from "../actions/actions";

const myPageReducer = (state = dummy, action) => {
  console.log(`state`, state);
  switch (action.type) {
    case CREATE_FARM:
      return Object.assign({}, state, {
        projectList: [
          ...state.projectList,
          {
            farm_id: action.payload.id,
            farm_name: action.payload.name,
            image: action.payload.image,
          },
        ],
      });
    default:
      return state;
  }
};

export default myPageReducer;
