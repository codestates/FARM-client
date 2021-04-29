import { combineReducers } from "redux";
import farmReducer from "./farmReducer";
import myPageReducer from "./myPageReducer";

const rootReducer = combineReducers({
  farmReducer,
  myPageReducer,
});

export default rootReducer;
