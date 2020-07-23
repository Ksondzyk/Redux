import store from "./store";
import { addUser, deleteUser } from "./users.actions";

console.log(store.dispatch(addUser));

// const add = [
//   { id: 77, name: "roma" },
//   { id: 78, name: "Masha" },
// ];

// const res = add.concat({ id: 76, name: "Sarah" });
// console.log(res);
// const result = res.filter(({ id }) => id !== 76);
// console.log(result);
