import { ADD_PRODUCT, DELETE_PRODUCT } from "./cart.actions";

const initialState = {
  products: [],
};
export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT: {
      return {
        ...state,
        products: state.products.concat(action.payload.productData),
      };
    }
    case DELETE_PRODUCT: {
      const newList = state.products.filter(
        (user) => user.id !== action.payload.productId
      );
      return {
        ...state,
        products: newList,
      };
    }

    default:
      return state;
  }
};

export default productReducer;
