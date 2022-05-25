import * as React from 'react';
import { Botao, Container, Descricao, Footer, Header, Imagem, Rolagem, Texto, Texto2, Titulo, View } from './style';
import { FontAwesome } from '@expo/vector-icons';

export default function PetsPerfil() {
  return (
    <Container>
      <Rolagem contentContainerStyle={{ flexGrow: 1 }}> 
        <Header source={require('../../images/dog1.jpg')}/>
      
        <View>
          <Texto2>Flayka, 2 anos</Texto2>
          <Texto><FontAwesome name="map-marker" size={20}/>  Gama, Brasília - DF, Brasil</Texto>

          <Descricao>Flayka foi resgatada através de uma denúncia que fizeram para o Lar Dos Anjos, seu ex tutor saia para trabalhar e deixava Flayka em um espaço pequeno, sem ração e sem abrigo de chuva ou sol, além de deixar ela presa na corrente. Era alimentada pelo vizinho, que jogava a ração da varanda...</Descricao>

          <Texto>Agora Flayka está em busca de uma família responsável que a possa dar muito amor e todo o cuidado que merece.</Texto> 

          <Titulo>Informações do Pet:</Titulo>
          <Texto>- Fêmea</Texto>
          <Texto>- Aproximadamente 8 meses</Texto>
          <Texto>- Porte grande</Texto>
          <Texto>- Super dócil</Texto>
          <Texto>- Aceita muito bem cães e gatos </Texto>

          <Titulo>ONG: Lar dos Anjos</Titulo>

          <Footer>
            <Imagem source={require('../../images/LardosAnjos.png')}/>
            <Botao activeOpacity={0.5}><Texto style={{color:'#ffffff'}}>Quero Adotar</Texto></Botao>
          </Footer>
          
        </View>
      </Rolagem>
    </Container>
  );
}