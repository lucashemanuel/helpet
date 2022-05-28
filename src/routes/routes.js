import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabRoutes from './tab.routes';
import { StatusBar } from 'react-native';

export default function Routes() {
  return (
     <NavigationContainer>
       <StatusBar barStyle='light-content'/>
       <TabRoutes/>
     </NavigationContainer>
  )
}


