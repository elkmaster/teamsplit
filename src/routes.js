import HomeScreen from './containers/HomeScreen.js'
import SplitScreen from './containers/SplitScreen.js'
import {StackNavigator,} from 'react-navigation';

export default StackNavigator({
    Home: { screen: HomeScreen },
    SplitScreen: { screen: SplitScreen },
});