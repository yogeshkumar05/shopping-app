import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Platform
} from 'react-native';
import {
  useSelector,
  useDispatch
} from 'react-redux';
import ProductItem from '../../components/shop/ProductItem';
import * as cartActions from '../../store/actions/cart';
import {
  HeaderButtons,
  Item
} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../../components/UI/HeaderButton';

const ProductsOverview = props => {
  const {

  } = props;

  const {

  } = styles;

  const dispatch = useDispatch();

  const products = useSelector(state => state.products.availableProducts);

  return (
    <FlatList
      // onRefresh={} // function to execute on pull down - pull to refresh
      // refreshing={} // this will be a boolean state
      data={products}
      renderItem={itemData => {
        return <ProductItem
          itemData={itemData}
          onViewDetails={
            () => {
              props.navigation.navigate('ProductDetail', {
                productId: itemData.item.id,
                productTitle: itemData.item.title
              })
            }
          }
          onAddToCart={
            () => {
              dispatch(cartActions.addToCart(itemData.item))
            }
          }
        />
      }}
    />
  )
}

const styles = StyleSheet.create({

});

ProductsOverview.navigationOptions = navData => {
  return {
    headerTitle: 'All products',
    headerRight: <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title='Cart'
        iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
        onPress={() => {navData.navigation.navigate('Cart') }}
      />
    </HeaderButtons>,
    headerLeft: <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title='Menu'
        iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
        onPress={() => {navData.navigation.toggleDrawer() }}
      />
    </HeaderButtons>
  }
}

export default ProductsOverview;



