import "./index.scss";
import store, { increment, decrement, reset } from "./store";

const resultElem = document.querySelector(".counter__result");
const incrementBtn = document.querySelector('[data-action="increment"]');
const resetBtn = document.querySelector('[data-action="reset"]');
const decrementBtn = document.querySelector("[data-action='decrement']");

const onIcrement = () => {
  store.dispatch(increment());
};
const onDecrement = () => {
  store.dispatch(decrement());
};
const onReset = () => {
  store.dispatch(reset());
};
incrementBtn.addEventListener("click", onIcrement);
decrementBtn.addEventListener("click", onDecrement);
resetBtn.addEventListener("click", onReset);

store.subscribe(() => {
  console.log(store.getState());
  const state = store.getState();
  const currentValue = state.history.reduce((acc, value) => acc + +value, 0);
  const historyString = state.history.join("");
  resultElem.textContent =
    state.history.length === 0 ? "" : `${historyString} = ${currentValue}`;
});
