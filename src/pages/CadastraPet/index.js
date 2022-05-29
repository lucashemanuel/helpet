import React from 'react';
import { Botao, Container, Form, Header, HeaderImage, Input, Texto, Texto2, Texto3, View } from './style';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Keyboard, KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback } from 'react-native';

const schema = yup.object({
  petnome:  yup.string().max(20, "Digite no máximo 20 letras!!!").required("Informe o nome do pet!!!"),
  local:  yup.string().required("Informe onde o pet foi encontrado!!!"),
  sexo: yup.string().required("Informe o sexo do pet!!!"),
  raca:  yup.string().required("Informe a raça do pet!!!"),
  idade:  yup.number().required("Informe a idade do pet!!!"),
  peso: yup.string().max(5, "Peso inválido!!!").required("Informe o peso do pet!!!"),
  porte: yup.string().max(15, "Porte inválido!!!").required("Informe o porte!!!")
})

export default function CadastraPet() {
  const {control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
  })

  function handleSignIn(data) {
    console.log(data);
  }

  return(
    <Container>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <KeyboardAvoidingView>

            <Header>
              <HeaderImage source={require('../../images/camera.png')}/>
              <Texto2>Clique para tirar uma foto do Pet!</Texto2> 
            </Header>

            <Form>
              <Texto>Nome:</Texto>
              <Controller control={control} name="petnome" render={({ field: {onChange, onBlur, value} }) => (
                <Input onChangeText={onChange} onBlur={onBlur} value={value} placeholder="Digite o Nome do Pet"/>
              )}/>
              {errors.petnome && <Texto3>{errors.petnome?.message}</Texto3>}

              <Texto>Localização:</Texto>
              <Controller control={control} name="local" render={({ field: {onChange, onBlur, value} }) => (
                <Input onChangeText={onChange} onBlur={onBlur} value={value} placeholder="Digite a Localização"/>
              )}/>
              {errors.local && <Texto3>{errors.local?.message}</Texto3>}

              <Texto>Sexo:</Texto>
              <Controller control={control} name="sexo" render={({ field: {onChange, onBlur, value} }) => (
                <Input onChangeText={onChange} onBlur={onBlur} value={value} placeholder="Digite o Sexo do Pet"/>
              )}/>
              {errors.sexo && <Texto3>{errors.sexo?.message}</Texto3>}

              <Texto>Raça:</Texto>
              <Controller control={control} name="raca" render={({ field: {onChange, onBlur, value} }) => (
                <Input onChangeText={onChange} onBlur={onBlur} value={value} placeholder="Digite a Raça do Pet"/>
              )}/>
              {errors.raca && <Texto3>{errors.raca?.message}</Texto3>}

              <Texto>Idade:</Texto>
              <Controller control={control} name="idade" render={({ field: {onChange, onBlur, value} }) => (
                <Input onChangeText={onChange} onBlur={onBlur} value={value} placeholder="Digite a Idade do Pet"/>
              )}/>
              {errors.idade && <Texto3>{errors.idade?.message}</Texto3>}

              <Texto>Peso (Kg):</Texto>
              <Controller control={control} name="peso" render={({ field: {onChange, onBlur, value} }) => (
                <Input onChangeText={onChange} onBlur={onBlur} value={value} placeholder="Digite o Peso do Pet"/>
              )}/>
              {errors.peso && <Texto3>{errors.peso?.message}</Texto3>}

              <Texto>Porte:</Texto>
              <Controller control={control} name="porte" render={({ field: {onChange, onBlur, value} }) => (
                <Input onChangeText={onChange} onBlur={onBlur} value={value} placeholder="Digite o Porte do Pet"/>
              )}/>
              {errors.porte && <Texto3>{errors.porte?.message}</Texto3>}
              
              <View>
                <Botao activeOpacity={0.9} onPress={handleSubmit(handleSignIn)}><Texto2>Cadastrar Pet</Texto2></Botao>
              </View>
            </Form>

          </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
      </ScrollView>
    </Container>
  );
}