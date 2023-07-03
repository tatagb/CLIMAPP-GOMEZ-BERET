import React from 'react';
import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../src/screens/HomeScreen';
import FavoritosScreen from '../src/screens/FavoritosScreen';
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
            tabBarIcon: () => (
              <View>
                <Ionicons name="Home" size={30} color="black" />
                <Text>Home</Text>
              </View>
            ),
          }}
      />
      <Tab.Screen
        name="Favoritos"
        component={FavoritosScreen}
        options={{
            tabBarIcon: () => (
              <View>
                <Ionicons name="Home" size={30} color="black" />
                <Text>Favoritos</Text>
              </View>
            ),
          }}
      />
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
