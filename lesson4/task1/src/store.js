import { createStore } from "redux";

import { conterReducer } from "./conter.reducer";

const store = createStore(
  conterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
