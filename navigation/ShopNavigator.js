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

const {
  primary,
  secondary,
  white
} = Colors;

const isAndroid = Platform.OS === 'android';

const ProductsNavigator = createStackNavigator(
  {
    ProductsOverview: ProductsOverviewScreen,
    ProductDetail: ProductDetailScreen,
    Cart: CartScreen,
    Oders: OrderScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: isAndroid ? primary : ''
      },
      headerTintColor: isAndroid ? white : primary
    }
  }
)

export default createAppContainer(ProductsNavigator);