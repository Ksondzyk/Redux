import store from "./store";
import { addUser, deleteUser } from "./users.actions";

store.dispatch(addUser({ id: 12, name: "roman" }));
store.dispatch(addUser({ id: 13, name: "masha" }));
store.dispatch(addUser({ id: 14, name: "colia" }));
store.dispatch(deleteUser({ id: 14, name: "colia" }));
store.dispatch(deleteUser({ id: 12, name: "roman" }));

console.log(store.getState());
console.log(store);
// const add = [
//   { id: 77, name: "roma" },
//   { id: 78, name: "Masha" },
// ];

// const res = add.concat({ id: 76, name: "Sarah" });
// console.log(res);
// const result = res.filter(({ id }) => id !== 76);
// console.log(result);
