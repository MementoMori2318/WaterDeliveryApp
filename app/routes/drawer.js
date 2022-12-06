import { createDrawerNavigator } from "react-navigation-drawer";
import { createAppContainer } from 'react-navigation';

import WelcomeLoginStack from "./welcome_loginStack";
import ShopStack from "./shopStack";

const RootDrawerNavigation = createDrawerNavigator({
    Logout: {
        screen: WelcomeLoginStack
    },
    WaterShop: {
        screen: ShopStack
    }
});

export default createAppContainer(RootDrawerNavigation);