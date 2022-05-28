import PetsPerfil from "../PetsPerfil";
import { Area, Container, Texto, Bichos, View, Texto2, Toque } from "./style";

export default function Pets({ navigation }) {
  return (
    <Container>
      <Texto>Olá, Seja bem-vindo!</Texto>
      <Texto>Escolha um Pet para adotar!</Texto>

      <Area>

        <View>
          <Toque onPress={() => navigation.navigate(PetsPerfil)} activeOpacity={0.9} style={{ shadowOffset: {width: 0, height: 2}, shadowColor: '#000000', shadowOpacity: 0.25, shadowRadius: 3.85, elevation: 10}}>
            <Bichos source={require('../../images/dog1.jpg')} imageStyle={{ borderRadius: 15}}>
              <Texto2>Flayka</Texto2>
            </Bichos>
          </Toque>

          <Toque onPress={() => navigation.navigate(PetsPerfil)} activeOpacity={0.9}>
            <Bichos source={require('../../images/dog2.jpg')} imageStyle={{ borderRadius: 15}}>
              <Texto2>Alfred</Texto2>
            </Bichos>
          </Toque>  
        
          <Toque onPress={() => navigation.navigate(PetsPerfil)} activeOpacity={0.9}>
            <Bichos source={require('../../images/dog3.jpg')} imageStyle={{ borderRadius: 15}}>
              <Texto2>Adele</Texto2>
            </Bichos>
          </Toque>

          <Toque onPress={() => navigation.navigate(PetsPerfil)} activeOpacity={0.9}>
            <Bichos source={require('../../images/dog4.jpg')} imageStyle={{ borderRadius: 15}}>
              <Texto2>Bob</Texto2>
            </Bichos>
          </Toque>
        </View>

      </Area>

    </Container>
  );
}