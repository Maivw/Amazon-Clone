import { baseUrl } from "../config";

export const ADDING_TO_CART = "la_mode/cartActions/ADDING_TO_CART";
export const REMOVING_PRODUCT = "la_mode/cartActions/REMOVING_PRODUCT";
export const SUB_QUANTITY = "la_mode/cartActions/SUB_QUANTITY";
export const ADD_QUANTITY = "la_mode/cartActions/ADD_QUANTITY";
export const ADD_SHIPPING = "la_mode/cartActions/ADD_SHIPPING";

//ACTION CREATOR

export const setToken = (token) => ({ type: SET_TOKEN, token });

export const addingToCart = (id) => ({ type: ADD_TO_CART, id });
export const removingProduct = (id) => ({ type: REMOVING_PRODUCT, id });
export const subQuantity = (id) => ({ type: SUB_QUANTITY, id });
export const addQuantity = (id) => ({ type: ADD_QUANTITY, id });
export const addShipping = (id) => ({ type: ADD_SHIPPING, id });
