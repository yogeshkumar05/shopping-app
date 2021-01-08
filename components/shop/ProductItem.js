import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Button,
  TouchableOpacity,
  Platform,
  TouchableNativeFeedback
} from 'react-native';
import Colors from '../../constants/Colors';

const ProductItem = props => {
  const {
    title,
    price,
    imageUrl
  } = props.itemData.item;

  const {
    onViewDetails,
    onAddToCart
  } = props;

  const {
    primary
  } = Colors;

  const {
    product,
    image,
    titleStyle,
    priceStyle,
    buttons,
    textContainer,
    imageContainer
  } = styles;

  const isAndroid = Platform.OS === 'android';
  const TouchableComponent = isAndroid && Platform.Version >= 21 ? TouchableNativeFeedback : TouchableOpacity;

  return (
    <View style={product}>
      <View>
        <TouchableComponent onPress={onViewDetails} useForeground>
          <View>
            <View style={imageContainer}>
              <Image
                style={image}
                source={{ uri: imageUrl }}
              />
            </View>

            <View style={textContainer}>
              <Text style={titleStyle}>
                {title}
              </Text>
              <Text style={priceStyle}>
                ₹{price.toFixed(2)}
              </Text>
            </View>

            <View style={buttons}>
              <Button
                color={primary}
                title='View details'
                onPress={onViewDetails}
              />

              <Button
                color={primary}
                title='Add to cart'
                onPress={onAddToCart}
              />

            </View>
          </View>
        </TouchableComponent>
      </View>
    </View>


  )
}

const styles = StyleSheet.create({
  product: {
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
    height: 300,
    margin: 20,
    overflow: 'hidden',
  },
  imageContainer: {
    height: '60%',
    width: '100%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    overflow: 'hidden'
  },
  image: {
    height: '100%',
    width: '100%'
  },
  textContainer: {
    alignItems: 'center',
    height: '10%'
  },
  titleStyle: {
    fontSize: 18,
    // height: '5%'
  },
  priceStyle: {
    fontSize: 14,
    color: '#888',
  },
  buttons: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // margin: 10,
    height: '30%',
    padding: 10
  }
});

export default ProductItem;



