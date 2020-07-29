import { createSelector } from "reselect";

export const optionsListSelector = (state) => {
  return Object.values(state.options.optionsList);
};
export const selectedIdSelector = (state) => {
  return Object.values(state.options.selected);
};
export const selectedOptionSelector = createSelector(
  [optionsListSelector, selectedIdSelector],
  (allOptionsList, selectedIds) => {
    return allOptionsList.filter(({ id }) => selectedIds.includes(id));
  }
);

// export const selectedOptionSelector = (state) => {
//   const allOptionsList = optionsListSelector(state);
//   const selectedIds = selectedIdSelector(state);
//   return allOptionsList.filter(({ id }) => selectedIds.includes(id));
// };
export const avialableOptionSelector = createSelector(
  [optionsListSelector, selectedIdSelector],
  (allOptionsList, selectedIds) => {
    return allOptionsList.filter(({ id }) => !selectedIds.includes(id));
  }
);

// export const avialableOptionSelector = (state) => {
//   const allOptionsList = optionsListSelector(state);
//   const selectedIds = selectedIdSelector(state);
//   return allOptionsList.filter(({ id }) => !selectedIds.includes(id));
// };
