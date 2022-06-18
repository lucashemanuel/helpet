import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CadastraUsuario from "../pages/CadastraUsuario";
import Login from "../pages/Login";
import App from '../../App';


const StackInicial = createNativeStackNavigator();

export default function StackInicialRoute() {
  return(
    <StackInicial.Navigator>
      <StackInicial.Screen name="App" component={App}/>
      <StackInicial.Screen name="CadastraUsuario" component={CadastraUsuario} options={{headerTransparent: true, headerTitle:''}}/>
      <StackInicial.Screen name="Login" component={Login} options={{headerTransparent: true, headerTitle:''}}/>
    </StackInicial.Navigator>
  );
}