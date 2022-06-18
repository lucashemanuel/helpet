import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
`;

export const Footer = styled.View`
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 5%;
`;

export const View = styled.View`
  align-items: center;
  justify-content: center;
  background-color: #f37a7a;
  width: 100%;
  height: 8%;
`;

export const Texto = styled.Text`
  color: #ffffff;
  font-size: 17px;
`;

export const Botao = styled.TouchableOpacity`
  margin-top: 5%;
  align-items: center;
  justify-content: center;
  background-color: #f37a7a;
  width: 70%;
  height: 7%;
  border-radius: 35px;
`;