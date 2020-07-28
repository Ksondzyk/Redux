import { createStore, combineReducers } from "redux";

import { conterReducer } from "./conter.reducer";
import { usersReducer } from "./users/users.reducer";

const reducer = combineReducers({
  users: usersReducer,
  counter: conterReducer,
});

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
