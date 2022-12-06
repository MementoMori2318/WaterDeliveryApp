import { createStackNavigator } from "react-navigation-stack";
import WelcomeScreen from '../screens/WelcomeScreen';
import LoginForm from "../screens/LoginForm";
import Registerform from "../screens/Registerform";

const screens = {
    Welcome: {
        screen: WelcomeScreen,
        navigationOptions: {
            title: 'Water Delivery App',
            headerTitleStyle: {
                alignSelf: 'center',
              },
        }
    },
    Login: {
        screen: LoginForm,
        navigationOptions: {
            title: 'Login',
        } 
    },
    Register: {
        screen: Registerform,
        navigationOptions: {
            title: 'Register',
        } 
    },
}

const WelcomeLoginStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#fff',
       
        headerStyle: {backgroundColor: '#1f76b4', height: 80},
       
    }
});

export default WelcomeLoginStack;