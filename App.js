import { StyleSheet } from 'react-native';
import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import Home from './src/screens/HomeScreen';
import { createStackNavigator } from '@react-navigation/stack';
import Details from './src/screens/DetailScreen';
import { Provider } from 'react-redux';
import {init} from "././src/db/index"
import store from "./redux/store/store"
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainNavigator from "./navigation"
import BottomTabNavigator from './navigation/BottomTabNavigator';

init()
  .then(() => console.log("Base de datos iniciada"))
  .catch(err => {
    console.log("Base de datos no creada");
    console.log(err.message);
  });

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <BottomTabNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
      <MainNavigator />
    </Provider>
  );
}