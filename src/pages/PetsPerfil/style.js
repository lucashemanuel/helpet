import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

export const Rolagem = styled.ScrollView`
  
`;

export const Header = styled.Image`
  width: 500px;
  height: 300px;
`;

export const View = styled.ScrollView`
  padding: 20px;
`;

export const Texto = styled.Text`
  font-size: 17px;
`;

export const Texto2 = styled.Text`
  font-weight: bold;
  font-size: 23px;
  margin-bottom: 7px;
`;

export const Titulo = styled.Text`
  margin-top: 10px;
  margin-bottom: 10px;
  font-size: 23px;
  font-weight: bold;
`;

export const Descricao = styled.Text`
  font-size: 17px;
  margin-top: 15px;
  margin-bottom: 15px;
  text-align: justify;
`;

export const Footer = styled.View`
  align-items: center;
  justify-content: space-evenly;
`;

export const Imagem = styled.Image`
  margin-top: 25px;
  margin-bottom: 20px;
`;

export const Botao = styled.TouchableOpacity`
  background-color: #f37a7a;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  width: 250px;
  height: 50px;
`;