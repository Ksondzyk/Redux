import { createStore, combineReducers } from "redux";

import { conterReducer } from "./conter.reducer";
import usersReducer from "./users.reducer";

const appReducer = combineReducers({
  counter: conterReducer,
  users: usersReducer,
});
const store = createStore(appReducer);

export default store;
