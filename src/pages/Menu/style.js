import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #ffffff;
  
`;
export const View = styled.View`
  flex-direction: row;
  justify-content: flex-start;
  margin-left: 15px;
  margin-top: 65px;
`;

export const Header = styled.ImageBackground`
  flex: 0.5;
`;

export const Texto = styled.Text`
  font-size: 27px;
  color: #ffffff;
`;

export const Avatar = styled.Image`
  height: 80px;
  width: 80px;
  border-radius: 40px;
  margin-right: 20px;
`;

export const Funcoes = styled.View`
  flex: 0.5;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  align-content: space-around;
  justify-content: space-evenly;
`;

export const Adote = styled.TouchableOpacity`
  width: 165px;
  height: 110px;
  border: 2px;
  
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;
export const Ajude = styled.TouchableOpacity`
  width: 165px;
  height: 110px;
  border: 2px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;
export const Image = styled.Image`
  margin-bottom: 8px;
`;

export const Texto2 = styled.Text`
  font-size: 20px;
`;
