import React from 'react'
import { NavigationContainer } from "@react-navigation/native";

// stacks
import StackNavigator from './StackNavigator'

export default () => (
    <NavigationContainer>
        <StackNavigator />
    </NavigationContainer>
)