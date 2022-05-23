import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Pets from '../pages/Pets';
import PetsPerfil from '../pages/PetsPerfil';

const StackPets = createNativeStackNavigator();

export default function StackPetsRoute() {
  return(
    <StackPets.Navigator>
      <StackPets.Screen name="Pets Screen" component={Pets} options={{headerShown: false}}/>
      <StackPets.Screen name="PetsPerfil" component={PetsPerfil} options={{headerTransparent: true, headerTintColor:'#ffffff', headerTitle: '' }}/>
    </StackPets.Navigator>
  );
}