import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform
} from 'react-native';
import {
  Ionicons
} from '@expo/vector-icons';
import * as cartActions from '../../store/actions/cart';
import {
  useDispatch
} from 'react-redux';
const CartItem = props => {
  const {

  } = props;

  const dispatch = useDispatch();

  const {
    details,
    header,
    column,
    column2,
    lastColumn
  } = styles;

  const {
    product: {
      price,
      quantity,
      sum,
      title,
      id
    }
  } = props;

  const isAndroid = Platform.OS === 'android';

  return (
    <View>
      <View style={details}>
        
          <View style={column2}><Text>{title}</Text></View>
          <View style={column}><Text>{price}</Text></View>
          <View style={column}><Text>{quantity}</Text></View>
          <View style={column}><Text>{sum}</Text></View>
          <View style={lastColumn}>
            <TouchableOpacity onPress={() => {
              dispatch(cartActions.removeFromCart(id))
            }}>
              <Ionicons
                name={isAndroid ? 'md-trash' : 'ios-trash'}
                color='red'
              />
            </TouchableOpacity>
          </View>
        
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  column2: {
    flex: 2,
    marginBottom: 10,
    alignItems: 'flex-start'
  },
  column: {
    flex: 1,
    marginBottom: 10,
    alignItems: 'flex-start'
  },
  lastColumn: {
    flex: 1,
    marginBottom: 10,
    alignItems: 'flex-end'
  }
});

export default CartItem;



