import store from "./store";
import { setLanguage } from "./language.actions";
import { addProduct, removeProduct } from "./cart.actions";

import { setUser, removeUser } from "./users.actions";

store.subscribe(() => console.log(store.getState()));
store.dispatch(setUser("roman"));
console.log(store.dispatch(setLanguage()));
console.log(store.dispatch(addProduct({ id: 1, name: "milk" })));

// store.dispatch(
//   addUser({
//     id: 2,
//     name: "Bob",
//   })
// );
// store.dispatch(deleteUser(2));
// store.dispatch(updateUser(1, { name: "Bob Martin", age: 25 }));
