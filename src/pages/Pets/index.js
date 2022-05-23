import PetsPerfil from "../PetsPerfil";
import { Area, Container, Texto, Bichos, View, Texto2 } from "./style";

export default function Pets({ navigation }) {
  return (
    <Container>
      <Texto>Olá, Seja bem-vindo!</Texto>
      <Texto>Escolha um Pet para adotar!</Texto>

      <Area>

        <View>
          <Bichos source={require('../../images/dog1.jpg')} imageStyle={{ borderRadius: 15}}>
            <Texto2 onPress={() => navigation.navigate(PetsPerfil)}>Flayka</Texto2>
          </Bichos>

          <Bichos source={require('../../images/dog2.jpg')} imageStyle={{ borderRadius: 15}}>
            <Texto2>Alfred</Texto2>
          </Bichos>
        </View>
        <View>
          <Bichos source={require('../../images/dog3.jpg')} imageStyle={{ borderRadius: 15}}> 
            <Texto2>Adele</Texto2>
          </Bichos>

          <Bichos source={require('../../images/dog4.jpg')} imageStyle={{ borderRadius: 15}}>
            <Texto2>Bob</Texto2>
          </Bichos>
        </View>
      </Area>

    </Container>
  );
}