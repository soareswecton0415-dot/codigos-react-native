import React from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';

// import Feather from 'react-native-vector-icons/Feather';

import Stack from './stack';
import sobre from '../pages/sobre';
import contato from '../pages/contato';

import customDrawer from '../components/customDrawer';

const Drawer = createDrawerNavigator();

export default function Routes(){
  return(
    <Drawer.Navigator
    drawerContent={customDrawer}
    // esconder o menu hamburguer de cima
    screenOptions={{
      headerShown: false,

      drawerStyle: {
        backgroundColor: '#121212'
      },

      drawerActiveBackgroundColor: '#3B3DBF',
      drawerActiveTintColor: '#FFF',

      drawerInactiveBackgroundColor: '#CCC',
      drawerInactiveTintColor: '#000'
    }}
    
    >
      <Drawer.Screen 
      name="HomeStack"
      component={Stack}
      options={{
        title: 'Início'
      }}
      />

        <Drawer.Screen 
      name="Sobre"
      component={sobre}
      />

        <Drawer.Screen 
      name="Contato"
      component={contato}
      />
    </Drawer.Navigator>
  )
}