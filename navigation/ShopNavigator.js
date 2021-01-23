import {
  createStackNavigator
} from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import ProductsOverviewScreen from '../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../screens/shop/ProductDetailScreen';
import CartScreen from '../screens/shop/CartScreen';
import OrderScreen from '../screens/shop/OrderScreen';
import Colors from '../constants/Colors';
import { Platform } from 'react-native';
import { createDrawerNavigator } from 'react-navigation-drawer';
import {Ionicons} from '@expo/vector-icons';
import React from 'react';
import AdminScreen from '../screens/user/AdminScreen';
import AuthScreen from '../screens/user/AuthScreen';

const {
  primary,
  secondary,
  white
} = Colors;

const isAndroid = Platform.OS === 'android';

const defaultNavigationOptions = {
  headerStyle: {
    backgroundColor: isAndroid ? primary : ''
  },
  headerTintColor: isAndroid ? white : primary
}

const isSignedIn = false;

const ProductsNavigator = createStackNavigator(
  {
    ProductsOverview: ProductsOverviewScreen,
    ProductDetail: ProductDetailScreen,
    Cart: CartScreen,
    // Oders: OrderScreen
  },
  {
    navigationOptions: {
      drawerIcon: drawerConfig => 
      <Ionicons 
        name= {Platform.OS ==='android' ? 'md-cart'  :'ios-cart' }
        size={23}
        color={drawerConfig.tintColor}
      />
  },
    defaultNavigationOptions
  }
)

const OrdersNavigator = createStackNavigator(
  {
    Oders: OrderScreen
  },
  {
    navigationOptions: {
      drawerIcon: drawerConfig => 
      <Ionicons 
        name= {Platform.OS ==='android' ? 'md-list'  :'ios-list' }
        size={23}
        color={drawerConfig.tintColor}
      />
  },
    defaultNavigationOptions
  }
);

const AdminNavigator = createStackNavigator(
  {
    Admin: AdminScreen
  },
  {
    navigationOptions: {
      drawerIcon: drawerConfig => 
      <Ionicons 
        name= {Platform.OS ==='android' ? 'md-list'  :'ios-list' }
        size={23}
        color={drawerConfig.tintColor}
      />
  },
    defaultNavigationOptions
  }
);

const AuthNavigator = createStackNavigator(
  {
    Auth: AuthScreen
  },
  {
    navigationOptions: {
      drawerIcon: drawerConfig => 
      <Ionicons 
        name= {Platform.OS ==='android' ? 'md-list'  :'ios-list' }
        size={23}
        color={drawerConfig.tintColor}
      />
  },
    defaultNavigationOptions
  }
);

const signedInNavigator = createDrawerNavigator(
  {
    Products:ProductsNavigator,
    Orders: OrdersNavigator,
    Admin:  AdminNavigator
  },
  {
    contentOptions: {
      activeTintColor: primary
    }
    
  }
);

const signedOutNavigator = createDrawerNavigator(
  {
    Auth: AuthNavigator
  },
  {
    contentOptions: {
      activeTintColor: primary
    }
    
  }
);

const MainNavigator = isSignedIn ? signedInNavigator : signedOutNavigator;

export default createAppContainer(MainNavigator);