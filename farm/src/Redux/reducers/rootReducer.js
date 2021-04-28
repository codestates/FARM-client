import { combineReducers } from "redux";
import farmReducer from "./farmReducer";

const rootReducer = combineReducers({
  farmReducer,
});

export default rootReducer;
