import store from "./store";
import { addUser, deleteUser } from "./users.actions";

store.dispatch(addUser());
store.dispatch(addUser());
store.dispatch(addUser());

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
