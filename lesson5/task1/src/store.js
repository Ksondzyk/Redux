import { createStore, combineReducers } from "redux";
import { conterReducer } from "./currentPage.reducer";
import { increment, decrement } from "./currentPage.action";
import { usersReducer } from "./users.reducer";

const users = combineReducers({
  usersList: usersReducer,
  currentPage: conterReducer,
});

const store = createStore(
  users,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch(increment());
store.dispatch(decrement());

console.log(store.getState());

export default store;
