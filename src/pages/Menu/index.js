import * as React from 'react';
import { Avatar, Container, Funcoes, Header, Texto, View, Adote, Ajude, Image, Texto2 } from './style';

export default function Menu({ navigation }) {
  return (
    <Container>

      <Header source={require('../../images/fundo.png')} resizeMode="cover">
        <View>
          <Avatar source={require('../../images/usuario.jpg')}/>
          <Texto>Olá, Posso te ajudar?</Texto>
        </View>

        <Funcoes>
          <Adote activeOpacity={0.4} onPress={() => navigation.navigate('Pets')}>
            <Image source={require('../../images/adote.png')}/>
            <Texto2>Quero Adotar</Texto2>
          </Adote>

          <Ajude activeOpacity={0.4} onPress={() => navigation.navigate('Ajude')}>
            <Image source={require('../../images/ajude.png')}/>
            <Texto2>Ajude a ONG</Texto2>
          </Ajude>
        </Funcoes>

      </Header>

    </Container>
  );
}