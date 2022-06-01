import * as React from 'react';
import { Avatar, Container, Card, Funcoes, Header, Texto, View, Image, Texto2 } from './style';

export default function Menu({ navigation }) {
  return (
    <Container>

      <Header source={require('../../images/fundo.png')} resizeMode="cover">
        <View>
          <Avatar source={require('../../images/usuario.jpg')}/>
          <Texto>Olá, Posso te ajudar?</Texto>
        </View>
      </Header>
      
      <Funcoes>
          <Card activeOpacity={0.7} onPress={() => navigation.navigate('Pets')} style={{ shadowOffset: {width: 0, height: 2}, shadowColor: '#000000', shadowOpacity: 0.25, shadowRadius: 3.85, elevation: 10}}>
            <Image source={require('../../images/adote.png')}/>
            <Texto2>Quero Adotar</Texto2>
          </Card>

          <Card activeOpacity={0.7} onPress={() => navigation.navigate('Ajude')} style={{ shadowOffset: {width: 0, height: 2}, shadowColor: '#000000', shadowOpacity: 0.25, shadowRadius: 3.85, elevation: 10}}>
            <Image source={require('../../images/ajude.png')}/>
            <Texto2>Ajude a ONG</Texto2>
          </Card>

          <Card activeOpacity={0.7} onPress={() => navigation.navigate('CadastraPet')}style={{ shadowOffset: {width: 0, height: 2}, shadowColor: '#000000', shadowOpacity: 0.25, shadowRadius: 3.85, elevation: 10}}>
            <Image source={require('../../images/cadastre.png')}/>
            <Texto2>Cadastrar Pet</Texto2>
          </Card>

          <Card activeOpacity={0.7} onPress={() => navigation.navigate('CadastraUsuario')}style={{ shadowOffset: {width: 0, height: 2}, shadowColor: '#000000', shadowOpacity: 0.25, shadowRadius: 3.85, elevation: 10}}>
            <Image source={require('../../images/cadastre.png')}/>
            <Texto2>Cadastrar Usuário</Texto2>
          </Card>
        </Funcoes>

    </Container>
  );
}