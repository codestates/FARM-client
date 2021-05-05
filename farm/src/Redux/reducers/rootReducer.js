import { combineReducers } from "redux";
import farmReducer from "./farmReducer";
import myPageReducer from "./myPageReducer";
import authReducer from "./authReducer";
import loginSignupReducer from "./loginSignupReducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/session";

const persistConfig = {
  key: "root",
  storage,
  // whitelist: ["authReducer"],
};

const rootReducer = combineReducers({
  farmReducer,
  myPageReducer,
  authReducer,
  loginSignupReducer,
});

// export default rootReducer;
export default persistReducer(persistConfig, rootReducer);
