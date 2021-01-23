import React from 'react';
import {
  View,
  Text,
  StyleSheet
} from 'react-native';

const OrderItem = props => {
  const {
    itemData
  } = props;
  console.log('itemData', itemData.item);
  const {
    totalAmount,
    date,
    items
  } = itemData.item;

  const {
    orderItem
  } = styles;

  return (
    <View style={orderItem}>
      <Text>{totalAmount}</Text>
      <Text>{date.readableDate}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  orderItem: {
    shadowColor: '#000',
    shadowOpacity: 0.26,
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: '#fff',
    // height: 300,
    margin: 20,
    overflow: 'hidden',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
});

export default OrderItem;
 