/*import * as React from 'react';
import Routes from './src/routes/routes';

export default function App() {
  return (  
    <Routes/>
  );
}*/

import React from "react";
import { StyleSheet } from "react-native";
import { Video } from "expo-av";
import { Botao, Container, Footer, Texto, View } from "./appstyle";

export default function App({ navigation }) {
  return(
    
      <Container>

        <Video style={styles.video} source={require('./src/video/video.mp4')} resizeMode="cover" isLooping isMuted shouldPlay/>


        <Footer>
          <View>
            <Texto>Bem vindo à Helpet - O maior aplicativo de doação e adoção de pets do Brasil</Texto>
          </View>

          <Botao activeOpacity={0.9} onPress={() => navigation.navigate('CadastraUsuario')}>
            <Texto>Cadastre-se</Texto>
          </Botao>

          <Botao activeOpacity={0.9} onPress={() => navigation.navigate('Login')}>
            <Texto>Login</Texto>
          </Botao>
        </Footer>

      </Container>
    
  );
}

const styles = StyleSheet.create({
  video: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
    
  }
});

  

