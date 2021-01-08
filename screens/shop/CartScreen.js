import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList
} from 'react-native';
import {
  useSelector,
  useDispatch
} from 'react-redux';
import Colors from '../../constants/Colors';
import cart from '../../store/reducers/cart';
import CartItem from '../../components/shop/CartItem';
import * as orderActions from '../../store/actions/orders';

const CartScreen = props => {
  const {

  } = props;

  const dispatch = useDispatch();

  const {
    summary,
    summaryText,
    amount,
    screen,
    header,
    column,
    column2,
    lastColumn
  } = styles;

  const cartItems = useSelector(state => {
    const transformedCartItems = [];
    for (const key in state.cart.items) {
      transformedCartItems.push(state.cart.items[key])
    }
    return transformedCartItems;
  }
  );
  const cartAmount = useSelector(state => state.cart.totalAmount);
  return (
    <View style={screen}>
      <View style={summary}>
        <Text style={summaryText}>Total:
          <Text style={amount}> ₹{cartAmount.toFixed(2)}</Text>
        </Text>
        <Button 
          color={Colors.primary} 
          title='Buy now' 
          disabled = {cartItems.length <= 0}
          onPress = { () => {
            dispatch(orderActions.addOrder(cartItems, cartAmount));
            props.navigation.navigate('Oders');
          }}
        />
      </View>
      <View style={header}>
          <View style={column2}><Text>TITLE</Text></View>
          <View style={column}><Text>PRICE</Text></View>
          <View style={column}><Text>QTY</Text></View>
          <View style={column}><Text>SUM</Text></View>
          <View style={lastColumn}/>
      </View>
      <FlatList 
        data={cartItems} 
        renderItem={itemData => <CartItem product = {itemData.item}/>}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    margin: 20
  },
  summary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#fff',
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOpacity: 0.26,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
  },
  summaryText: {
    fontSize: 18,
    fontWeight: 'bold'
  },
  amount: {
    color: Colors.secondary,
    fontWeight: 'bold'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 10,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingBottom: 2
  },
  column2: {
    flex: 2
  },
  column: {
    flex: 1
  },
  lastColumn: {
    flex: 1,
    alignItems: 'flex-end'
  }
});

export default CartScreen;



