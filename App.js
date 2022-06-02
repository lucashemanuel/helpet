/*import * as React from 'react';
import Routes from './src/routes/routes';

export default function App() {
  return (  
    <Routes/>
  );
}*/

import React from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { Video } from "expo-av";
import CadastraUsuario from "./src/pages/CadastraUsuario";
import Login from "./src/pages/Login";

export default function App({ navigation }) {
  return(
    
      <View style={styles.view}>
        <Video style={styles.video} source={require('./src/video/video.mp4')} resizeMode="cover" isLooping isMuted shouldPlay/>


        <View style={styles.rodape}>
          <View style={styles.mensagem}>
            <Text style={styles.texto}>Bem vindo à Helpet - O maior aplicativo de doação e adoção de pets do Brasil</Text>
          </View>

          <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('CadastraUsuario')}>
            <Text style={styles.texto}>Cadastre-se</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.botao} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.texto}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    
  );
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
  },
  video: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0
    
  },
  rodape: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    marginBottom: 50
  },
  mensagem: {
    alignItems: "center",
    justifyContent: "center",
    width: 480,
    height: 60,
    backgroundColor: '#f37a7a',
  },
  texto: {
    color: '#ffffff',
    fontSize: 17
  },
  botao: {
    marginTop: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#f37a7a',
    width: 450,
    height: 55,
    borderRadius: 35,
  }
});