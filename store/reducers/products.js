import PRODUCTS from '../../data/dummy-data';
import {
  ADD_TO_CART
} from '../actions/cart';

const initialState =  {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter((product) => product.ownerId === 'u1')
}

export const productsReducer = (state = initialState, action) => {
  return state;
}