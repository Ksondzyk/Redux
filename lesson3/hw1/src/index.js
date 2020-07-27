import store from "./store";
import { setLanguage } from "./language.actions";
import { addProduct, removeProduct } from "./cart.actions";

import { setUser, removeUser } from "./user.actions";

store.subscribe(() => console.log(store.getState()));
store.dispatch(setUser());
store.dispatch(setLanguage());
store.dispatch(addProduct({ id: 1, name: "milk" }));
