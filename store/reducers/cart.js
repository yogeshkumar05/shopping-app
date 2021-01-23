import CartItem from '../../models/cart-item';
import {
  ADD_TO_CART,
  REMOVE_FROM_CART
} from '../actions/cart';
import {
  ADD_ORDER
} from '../actions/orders';

const initialState = {
  items: {},
  totalAmount: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const addedProduct = action.product;
      const {
        title,
        price,
        id
      } = addedProduct;

      let updatedCartItem;

      if (state.items[id]) {
        // product already exists in cart
        updatedCartItem = new CartItem(
          id,
          state.items[id].quantity + 1,
          price,
          title,
          state.items[id].sum + price
        );

      } else {
        updatedCartItem = new CartItem(id, 1, price, title, price);
      }

      return {
        ...state,
        items: {
          ...state.items,
          [id]: updatedCartItem
        },
        totalAmount: state.totalAmount + price
      }

    case REMOVE_FROM_CART:
      const removedProductId = action.productId;
      const currentQty = state.items[removedProductId].quantity;
      const updatedCartItems = { ...state.items };

      if (currentQty > 1) {
        updatedCartItems[removedProductId].quantity--;
      } else {
        delete updatedCartItems[removedProductId];
      }
      return {
        ...state,
        items: updatedCartItems,
        totalAmount: state.totalAmount - state.items[removedProductId].price
      }

      case ADD_ORDER:
        return initialState;

    default:
      return state;
  }
}
