import store, { increment } from "./store";
console.log(increment());
const resultElem = document.querySelector(".counter__result");
const incrementBtn = document.querySelector('[data-action="increment"]');
const resetBtn = document.querySelector('[data-action="reset"]');
const decrementBtn = document.querySelector("[data-action='decrement']");

const onIcrement = () => {
  store.dispatch(increment());
};

incrementBtn.addEventListener("click", onIcrement);

store.subscribe(() => {
  const state = store.getState();
  const currentValue = state.value;
  const historyString = state.history.join(" ");
  resultElem.textContent = `${historyString} = ${currentValue}`;
});
