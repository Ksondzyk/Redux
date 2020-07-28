import { createStore } from "redux";
import store from "./store";

import { conterReducer } from "./conter.reducer";
const reducer = combineReducers({
  users: usersReducer,
  counter: conterReducer,
});

const store = createStore(
  conterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
