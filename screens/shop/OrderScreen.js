import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList
} from 'react-native';
import {
  useSelector
} from 'react-redux';

const CategoryTile = props => {
  const {

  } = props;

  const orders = useSelector(state => state.orders.orders);
  console.log('orders', orders);

  const {

  } = styles;

  return (
    <FlatList
      data={orders}
      renderItem={
        itemData => <Text>{itemData.item.totalAmount}</Text>
      }
    />
  )
}

const styles = StyleSheet.create({

});

export default CategoryTile;