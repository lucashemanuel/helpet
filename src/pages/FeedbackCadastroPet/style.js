import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;

export const Fundo = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
`;

export const Adesivo = styled.Image`
  margin-bottom: 10%;
`;

export const Texto = styled.Text`
  font-weight: bold;
  font-size: 40px;
`;

export const Texto2 = styled.Text`
  font-size: 20px;
`;

export const Texto3 = styled.Text`
  color: #ffffff;
  font-size: 18px;
`;

export const Botao = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  margin-top: 30%;
  margin-bottom: 20%;
  background-color: #f37a7a;
  width: 55%;
  height: 7%;
`;