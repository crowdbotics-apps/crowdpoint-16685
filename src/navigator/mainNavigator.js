import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import NotificationList39325Navigator from '../features/NotificationList39325/navigator';
import Settings39324Navigator from '../features/Settings39324/navigator';
import Settings39316Navigator from '../features/Settings39316/navigator';
import UserProfile39314Navigator from '../features/UserProfile39314/navigator';
import Maps39266Navigator from '../features/Maps39266/navigator';
import ArticleList39263Navigator from '../features/ArticleList39263/navigator';
import MessengerNavigator from '../features/Messenger/navigator';
import TutorialNavigator from '../features/Tutorial/navigator';
import MapsNavigator from '../features/Maps/navigator';
import CalendarNavigator from '../features/Calendar/navigator';
import CameraNavigator from '../features/Camera/navigator';
import EmailAuthNavigator from '../features/EmailAuth/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
    SplashScreen: {
      screen: SplashScreen
    },
    //@BlueprintNavigationInsertion
NotificationList39325: { screen: NotificationList39325Navigator },
Settings39324: { screen: Settings39324Navigator },
Settings39316: { screen: Settings39316Navigator },
UserProfile39314: { screen: UserProfile39314Navigator },
Maps39266: { screen: Maps39266Navigator },
ArticleList39263: { screen: ArticleList39263Navigator },
Messenger: { screen: MessengerNavigator },
Tutorial: { screen: TutorialNavigator },
Maps: { screen: MapsNavigator },
Calendar: { screen: CalendarNavigator },
Camera: { screen: CameraNavigator },
EmailAuth: { screen: EmailAuthNavigator },

    /** new navigators can be added here */
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu,
    initialRouteName: 'SplashScreen',
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
