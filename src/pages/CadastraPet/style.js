import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
 width: 500px;
 height: 250px;
 background-color: grey;
 align-items: center;
 justify-content: center;
`;

export const HeaderImage = styled.Image`
  width: 30%;
  height: 50%;
  margin-top: 45px;
  margin-bottom: 15px;
`;

export const Texto = styled.Text`
  margin-bottom: 5px;
  font-size: 17px;
  font-weight: 700;
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
  border: 1.5px solid #000;
  border-radius: 7px;
  justify-content: center;
  height: 35px;
  padding-left: 15px;
  margin-bottom: 15px;
`;


export const Form = styled.View`
  margin-top: 10px;
  flex-direction: column;
  padding: 25px;
`;

export const View = styled.View`
  align-items: center;
  margin-top: 20px;
`;

export const Texto3 = styled.Text`
  color: #f37a7a;
  margin-bottom: 10px;
`;