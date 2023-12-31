import React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StackNavigator from './StackNavigator';
import FavoritosScreen from '../src/screens/FavoritosScreen';
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Inicio"
        component={StackNavigator}
        options={{
            headerShown: false,
            tabBarIcon: () => (
              <View>
                <Ionicons name="home" size={30} color="black" />
              </View>
              
            ),
            
          }}
      />
      <Tab.Screen
        name="Favoritos"
        component={FavoritosScreen}
        options={{
            headerTintColor: "Red",
            tabBarIcon: () => (
              <View>
                <Ionicons name="heart" size={30} color="black" />
              </View>
            ),
          }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
