import dummy from "../dummy.json";
// import {} from "../actions/actions";

const farmReducer = (state = dummy, action) => {
  // switch (action.type) {
  //   case ADD_TARGET:
  //     return Object.assign({}, state, {
  //       targetCnt: state.targetCnt + 1,
  //       target: [...state.target, action.payload],
  //     });
  // default:
  return state;
};

export default farmReducer;
