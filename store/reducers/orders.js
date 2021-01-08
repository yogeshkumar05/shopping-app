import Order from '../../models/order';
import { ADD_ORDER } from '../actions/orders';

const initialState = {
  orders: []
};

export default (state=initialState, action) => {

  switch(action.type) {
    case ADD_ORDER: 
        const date = new Date();
        const id = date.toString();
        const {
          items,
          amount
        } = action.orderData;
      const newOrder = new Order(id, items, amount, date);
      const orders = state.orders.concat(newOrder);
      
      return {
        ...state,
        orders
      }
  }
  return state;

}