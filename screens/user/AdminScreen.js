import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button
} from 'react-native';
import * as productActions from '../../store/actions/products';
import {
  useSelector,
  useDispatch
} from 'react-redux';
import {
  HeaderButtons,
  Item
} from 'react-navigation-header-buttons';
import CustomHeaderButton from '../../components/UI/HeaderButton';

const AdminScreen = props => {
  const {

  } = props;

  const {
    textInput
  } = styles;

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [cost, setCost] = useState('');

  const dispatch = useDispatch();

  const newProduct = {
    name,
    description,
    cost
  };

  // useEffect(() => {
  //   props.navigation.addListner('willFocus', () => {
  //     setName('');
  //     setDescription('');
  //     setCost('');
  //   })
  // }, [])

  return (
    <View>
      <View>
        <Text>Name</Text>
        <TextInput
          style={textInput}
          defaultValue={name}
          onChangeText={text => setName(text)}
        />
        <View>
          <Text>Description</Text>
          <TextInput
            style={textInput}
            defaultValue={description}
            onChangeText={text => setDescription(text)}
          />
        </View>
      </View>
      <View>
        <Text>Cost</Text>
        <TextInput
          style={textInput}
          defaultValue={cost}
          onChangeText={text => setCost(text)}
        />
      </View>
      <Button
        title='Add product'
        onPress={() => dispatch(productActions.addProduct(newProduct))}
      />

      <Button
        title='View products'
        onPress={() => dispatch(productActions.viewProducts())}
      />

      <Button
        title='Edit product'
        onPress={() => dispatch(productActions.updateProduct(newProduct))}
      />

      <Button
        title='Delete product'
        onPress={() => dispatch(productActions.deleteProduct())}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1
  }
});

AdminScreen.navigationOptions = navData => {
  return {
    headerTitle: 'Add product',
    headerLeft: <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title='Menu'
        iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
        onPress={() => { navData.navigation.toggleDrawer() }}
      />
    </HeaderButtons>
  }
}

export default AdminScreen;
