import store from "./store";
import { setLanguage } from "./language.actions";
import { addProduct, removeProduct } from "./cart.actions";

import { setUser, removeUser } from "./users.actions";

store.subscribe(() => console.log(store.getState()));
store.dispatch(setUser("roman"));
store.dispatch(setLanguage());
store.dispatch(addProduct({ id: 1, name: "milk" }));
