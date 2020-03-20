import {createSwitchNavigator, createAppContainer} from 'react-navigation';

import {createStackNavigator} from 'react-navigation-stack';

import HomeScreen from './pages/Home/HomeScreen';
import Sueca from './pages/Sueca/Sueca';
import Regras from './pages/Sueca/Regras';

const Routes = createAppContainer(
  createStackNavigator({
    HomeScreen,
    Sueca,
    Regras
  }),
);

export default Routes;
