import { createStore, combineReducers } from "redux";
import { lenguageReducer } from "./language.reducer";
import { productReducer } from "./cart.reducer";
import { usersReducer } from "./user.reducer";

const appReducer = combineReducers({
  language: lenguageReducer,
  user: usersReducer,
  cart: productReducer,
});
const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
