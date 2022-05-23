import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
`;
export const View = styled.View`
  flex-direction: row;
  padding-left: 20px;
  margin-top: 100px;
`;

export const Header = styled.ImageBackground`
  flex: 0.5;
  position: static;
`;

export const Texto = styled.Text`
  font-size: 27px;
  color: #ffffff;
  
`;

export const Avatar = styled.Image`
  height: 110px;
  width: 110px;
  border-radius: 55px;
  margin-right: 20px;
`;

export const Funcoes = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 300px;
  
`;

export const Adote = styled.TouchableOpacity`
  width: 170px;
  height: 100px;
  border: 2px;
  margin-right: 30px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;
export const Ajude = styled.TouchableOpacity`
  width: 170px;
  height: 100px;
  border: 2px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  
`;
export const Image = styled.Image`
  margin-bottom: 10px;
`;

export const Texto2 = styled.Text`
  font-size: 20px;
`;
