import { createStackNavigator } from "react-navigation-stack";
import WaterShop from '../screens/watershop';

const screens = {
    Shop: {
        screen: WaterShop,
        navigationOptions: {
            title: 'Water Delivery App',
            headerTitleStyle: {
                alignSelf: 'center',
              },
        }
    },
  
}

const ShopStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#fff',
       
        headerStyle: {backgroundColor: '#1f76b4', height: 80},
       
    }
});

export default ShopStack;