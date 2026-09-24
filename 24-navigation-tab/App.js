import React from "react";

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Feather from 'react-native-vector-icons/Feather';

import home from './src/pages/home';
import sobre from './src/pages/sobre';
import contato from './src/pages/contato';

const Tab = createBottomTabNavigator();

export default function App(){
  return(
    <NavigationContainer>
    <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#ffa1a1',
      tabBarStyle:{
        backgroundColor: '#680209',
        borderTopWidth: 0
      }
    }}>


      <Tab.Screen name='Home' component={home} 
      options={{
        tabBarIcon:({ color, size }) => {
          return <Feather name="home" color={color} size={size} />
        }
      }}
      
      />
      <Tab.Screen name='Sobre' component={sobre} 
        options={{
        tabBarIcon:({ color, size }) => {
          return <Feather name="file-text" color={color} size={size} />
        }
      }}
      
      />
      <Tab.Screen name='Contato' component={contato} 
        options={{
        tabBarIcon:({ color, size }) => {
          return <Feather name="phone-call" color={color} size={size} />
        }
      }}
      
      />
    </Tab.Navigator>
    </NavigationContainer>
  )
}