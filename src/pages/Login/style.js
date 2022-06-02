import styled from "styled-components/native";
 
export const Container = styled.View`
  flex: 1;
`;

export const Texto = styled.Text`
  margin-top: 90px;
  text-align: center;
  font-size: 35px;
`;

export const TextoHeader = styled.Text`
  text-align: center;
  font-size: 18px;
  color: #707070;
`;

export const TextoBotao = styled.Text`
  font-size: 20px;
  color: #ffffff;
`;

export const TextoFooter = styled.Text`
  margin-top: 25px;
  text-align: center;
  font-size: 20px;
  color: #707070;
`;

export const Form = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-content: space-around;
  margin-top: 50px;
  padding: 15px;
`;

export const View = styled.View`
  flex: none;
  flex-direction: row;
  margin-bottom: 12px;
  align-items: center;
  width: 450px;
  height: 75px;
  border: 1px solid black;
  border-radius: 35px;
`;

export const Icon = styled.View`
  align-items: center;
  justify-content: center;
  margin-left: 5px;
  background-color: #f37a7a;
  width: 62px;
  height: 62px;
  border-radius: 30px;
`;

export const Input = styled.TextInput` 
  width: 370px;
  height: 75px;
  margin-left: 15px;
`;

export const Botao = styled.TouchableOpacity` 
  align-items: center;
  justify-content: center;
  background-color: #f37a7a;
  width: 450px;
  height: 75px;
  border-radius: 35px;
`;

export const Footer = styled.View` 
  width: 60%;
  margin-top: 20px;
  flex-direction: row;
  justify-content: space-around;
`;

export const Facebook = styled.View` 
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: #4267b2;
`;

export const Google = styled.View` 
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: #db4437;
`;