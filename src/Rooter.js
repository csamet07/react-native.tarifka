
import React from 'react';
import {
  SafeAreaView
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, HeaderBackground } from '@react-navigation/stack';
import Categories from './pages/Categories';
import Meals from './pages/Meals';
import Details from './pages/Details';

const Stack = createStackNavigator();

const Router = () => {
 

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Categories" component={Categories}  options={{
          headerStyle: {
            backgroundColor: '#eceff1'
          },
          headerTitleStyle: {
            color:'#ffa500',
            fontFamily: 'Arial',
            fontWeight: 'bold'
          },
          headerTitleAlign: 'center'
        }}/>
        <Stack.Screen name="Meals" component={Meals} options={{
          headerStyle: {
            backgroundColor: '#eceff1'
          },
          headerTitleStyle: {
            color:'#ffa500',
            fontFamily: 'Arial',
            fontWeight: 'bold'
          },
          headerTitleAlign: 'center',
          headerTintColor:'#ffa500'
        }}/>
        <Stack.Screen name="MealDetails" component={Details} options={{
          headerStyle: {
            backgroundColor: '#eceff1'
          },
          headerTitleStyle: {
            color:'#ffa500',
            fontFamily: 'Arial',
            fontWeight: 'bold'
          },
          headerTitleAlign: 'center',
          headerTintColor:'#ffa500'
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
