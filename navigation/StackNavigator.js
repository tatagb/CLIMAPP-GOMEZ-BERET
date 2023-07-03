import { StyleSheet } from 'react-native';
import * as React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Details from '../src/screens/DetailScreen';
import Home from '../src/screens/HomeScreen';
import Favoritos from '../src/screens/FavoritosScreen';


const Stack = createStackNavigator();

const StackNavigator = () => (
    <Stack.Navigator
    initialRoute="Home"
    screenOptions={{
        headerShown: false,
     }}>


<Stack.Screen
       name="Home"
       component={Home}
       options={{headerShown: false}}
       
/>
<Stack.Screen
   name="Details"
   component={Details}
   options={{headerShown: false}}
/>
<Stack.Screen
   name="Favoritos"
   component={Favoritos}
   options={{headerShown: false}}
/>
</Stack.Navigator>
);

export default StackNavigator;

  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
