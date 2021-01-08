import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Platform
} from 'react-native';
import {
  HeaderButton
} from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';
import Colors from '../../constants/Colors';


const CustomHeaderButton = props => {
  const {

  } = props;

  const {

  } = styles;

  const isAndroid = Platform.OS === 'android';

  return (
    <HeaderButton
      {...props}
      IconComponent={Ionicons}
      iconSize={23}
      color={isAndroid ? '#fff' : Colors.primary}
    />
  )
}

const styles = StyleSheet.create({

});

export default CustomHeaderButton;



