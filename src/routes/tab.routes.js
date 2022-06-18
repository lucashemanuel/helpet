import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5 } from '@expo/vector-icons';
import StackMenuRoute from './stack.routes';
import StackPetsRoute from './stackpets.routes';

const Tab = createBottomTabNavigator();

export default function TabRoutes() {
  return (
     <Tab.Navigator screenOptions={{
       headerShown: false,
       tabBarActiveTintColor:'#f37a7a'
       }}>

       <Tab.Screen name='Menu' component={StackMenuRoute} 
       options={{
         tabBarLabel:'Home', 
         tabBarIcon:({color, size}) => (
           <FontAwesome5 name='home' color={color} size={size}/>
        )}}/>

       <Tab.Screen name='Pets' component={StackPetsRoute} 
       options={{
         tabBarLabel:'Pets', 
         tabBarIcon:({color, size}) => (
           <FontAwesome5 name='clinic-medical' color={color} size={size}/>
        )}}/>
       
     </Tab.Navigator>
  )
}