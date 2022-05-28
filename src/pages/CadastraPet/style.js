import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
 flex: 0.35;
 background-color: grey;
 align-items: center;
 justify-content: center;
`;

export const HeaderImage = styled.Image`
  width: 30%;
  height: 50%;
  margin-bottom: 15px;
`;

export const Texto = styled.Text`

`;

export const Texto2 = styled.Text`
  font-size: 20px;
  color: #ffffff;
`;

export const Botao = styled.TouchableOpacity`
  background-color: #f37a7a;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  width: 250px;
  height: 50px;
`;

export const Input = styled.TextInput`
  border: 1px solid #000000;
  border-radius: 7px;
  justify-content: center;
  height: 35px;
  padding-left: 15px;
`;


export const Form = styled.View`
  flex: 0.65;
  flex-direction: column;
  justify-content: space-around;
  padding: 20px;
`;

