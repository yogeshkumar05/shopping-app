import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  Button
} from 'react-native';
import { 
  useSelector,
  useDispatch
} from 'react-redux';
import Colors from '../../constants/Colors';
import * as cartActions from '../../store/actions/cart';

const {
  primary
} = Colors;

const ProductDetailScreen = props => {
  const {

  } = props;

  const dispatch = useDispatch();

  const {
    image,
    buttonContainer,
    textContainer,
    priceStyle
  } = styles;

  const productId = props.navigation.getParam('productId');
  const selectedProduct = useSelector(state => state.products.availableProducts.find(prod => prod.id === productId))
  const {
    title,
    imageUrl,
    description,
    price,
  } = selectedProduct;

  return (
    <View>
      <Image style={image} source={{ uri: imageUrl }} />
      <View style={textContainer}>
        <Text>{description}</Text>
        <Text style={priceStyle}>₹{price}</Text>
      </View>

      <View style={buttonContainer}>
        <Button title='Add to cart' color={primary} 
          onPress={() => dispatch(cartActions.addToCart(selectedProduct))}/>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  image: {
    height: '50%',
    width: '100%',
    marginBottom: 20
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    // marginVertical: 20
  },
  textContainer: {
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 20,
  },
  priceStyle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#555',
    marginVertical: 10
  }
});

ProductDetailScreen.navigationOptions = navData => {
  const productTitle = navData.navigation.getParam('productTitle');
  return {
    headerTitle: productTitle
  }

}

export default ProductDetailScreen;



