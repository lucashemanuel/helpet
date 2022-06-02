import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import  Ajude  from '../pages/Ajude';
import Menu from '../pages/Menu';
import CadastraPet from '../pages/CadastraPet';
import StackPetsRoute from './stackpets.routes';


const StackMenu = createNativeStackNavigator();

export default function StackMenuRoute() {
  return(
    <StackMenu.Navigator>
      <StackMenu.Screen name="Stack Menu" component={Menu} options={{headerShown: false}}/>
      <StackMenu.Screen name="Stack Pets" component={StackPetsRoute} />
      <StackMenu.Screen name="Ajude" component={Ajude} options={{headerTransparent: true, headerTitle:''}}/>
      <StackMenu.Screen name="CadastraPet" component={CadastraPet} options={{headerTransparent: true, headerTitle:''}}/>
    </StackMenu.Navigator>
  );
}
