import PRODUCTS from '../../data/dummy-data';
import {
  ADD_PRODUCT
} from '../actions/products';

const initialState =  {
  availableProducts: PRODUCTS,
  userProducts: PRODUCTS.filter((product) => product.ownerId === 'u1'),
  products: []
}

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      console.log('action', action);
      const existingProducts = state.products;
      existingProducts.push(action.newProduct)

      return {
        ...state,
        products: existingProducts
      }
  }
  return state;
}