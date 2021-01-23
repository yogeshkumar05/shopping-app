import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Platform
} from 'react-native';
import {
  useSelector
} from 'react-redux';
import {
  HeaderButtons,
  Item
} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../../components/UI/HeaderButton';
import OrderItem from '../../components/shop/OrderItem';

const OrderScreen = props => {
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
        itemData => <OrderItem itemData={itemData}/>
      }
    />
  )
}

const styles = StyleSheet.create({

});

OrderScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Your Orders',
    headerLeft: <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title='Menu'
        iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
        onPress={() => { navData.navigation.toggleDrawer() }}
      />
    </HeaderButtons>
  }
}

export default OrderScreen;