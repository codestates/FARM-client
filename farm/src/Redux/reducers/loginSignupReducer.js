import dummy from "../userDummy.json";
import { HANDLE_SIGNUP } from "../actions/actions";

const loginSignupReducer = (state = dummy, action) => {
  switch (action.type) {
    case HANDLE_SIGNUP:
      return Object.assign({}, state, {
        isClickSignUp: action.payload.boolean,
      });

    default:
      return state;
  }
};

export default loginSignupReducer;
