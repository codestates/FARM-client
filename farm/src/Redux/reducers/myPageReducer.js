import dummy from "../userDummy.json";
import {} from "../actions/actions";

const myPageReducer = (state = dummy, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default myPageReducer;
