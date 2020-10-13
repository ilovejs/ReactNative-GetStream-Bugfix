/**
 * @format
 */

// https://github.com/LinusU/react-native-get-random-values#readme
import 'react-native-get-random-values';
import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
