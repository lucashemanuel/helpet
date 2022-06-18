import React, {useState} from "react";
import { Botao, Container, Facebook, Footer, Form, Google, Icon, Input, Texto, TextoBotao, TextoFooter, TextoHeader, View } from "./style";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { Keyboard, KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback } from "react-native";

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleLogin() {
    if (email === '' || password === '') {
      alert("Preencha todos os campos!!!")
      return
    }
    const data = {
      email, password
    }
    console.log(data)
  }

  return(
    <Container>  
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView>


        <Texto>Seja bem-vindo!</Texto>
        <TextoHeader>Faça o Login para continuar</TextoHeader>
        
          <Form>
            <View>
              <Icon><FontAwesome name="envelope" size={20}/></Icon>
              <Input onChangeText={setEmail} value={email} keyboardType="email-address" placeholder="Digite seu email"/>
            </View>

            <View>
              <Icon><FontAwesome5 name="lock" size={20}/></Icon>
              <Input onChangeText={setPassword} value={password} secureTextEntry={true} placeholder="Digite sua senha"/>
            </View>

            <Botao onPress={handleLogin}><TextoBotao>Logar</TextoBotao></Botao>
            
            <TextoFooter>OU FAÇA O lOGIN COM</TextoFooter>

            <Footer>
              <Facebook> 
                <FontAwesome5 name="facebook-f" size={35} color={'#ffffff'}/>
              </Facebook>
              
              <Google>
                <FontAwesome5 name="google" size={35} color={'#ffffff'}/>
              </Google>

            </Footer>

          </Form>

          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </ScrollView>
    </Container>
  );
}