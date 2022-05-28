import React from 'react';
import { Botao, Container, Form, Header, HeaderImage, Input, Texto, Texto2 } from './style';
import { useForm, Controller } from 'react-hook-form';

export default function CadastraPet() {
  const {control, handleSubmit, formState: { errors } } = useForm({})

  function handleSignIn(data) {
    console.log(data);
  }

  return(
    <Container>
        <Header>
          <HeaderImage source={require('../../images/camera.png')}/>
          <Texto2>Clique para tirar uma foto do Pet!</Texto2> 
        </Header>

        <Form>
          <Texto>Nome:</Texto>
          <Controller control={control} name="pet-nome" render={({ field: {onChange, onBlur, value} }) => (
            <Input onChangeText={onChange} onBlur={onBlur} value={value} placeholder="Digite o Nome do Pet"/>
          )}/>

          <Texto>Localização:</Texto>
          <Controller control={control} name="localizacao" render={({ field: {onChange, onBlur, value} }) => (
            <Input onChangeText={onChange} onBlur={onBlur} value={value} placeholder="Digite a Localização"/>
          )}/>

          <Texto>Sexo:</Texto>
          <Controller control={control} name="sexo" render={({ field: {onChange, onBlur, value} }) => (
            <Input onChangeText={onChange} onBlur={onBlur} value={value} placeholder="Digite o Sexo do Pet"/>
          )}/>

          <Texto>Raça:</Texto>
          <Controller control={control} name="raca" render={({ field: {onChange, onBlur, value} }) => (
            <Input onChangeText={onChange} onBlur={onBlur} value={value} placeholder="Digite a Raça do Pet"/>
          )}/>

          <Texto>Idade:</Texto>
          <Controller control={control} name="idade" render={({ field: {onChange, onBlur, value} }) => (
            <Input onChangeText={onChange} onBlur={onBlur} value={value} placeholder="Digite a Idade do Pet"/>
          )}/>

          <Texto>Peso:</Texto>
          <Controller control={control} name="peso" render={({ field: {onChange, onBlur, value} }) => (
            <Input onChangeText={onChange} onBlur={onBlur} value={value} placeholder="Digite o Peso do Pet"/>
          )}/>

          <Texto>Porte:</Texto>
          <Controller control={control} name="porte" render={({ field: {onChange, onBlur, value} }) => (
            <Input onChangeText={onChange} onBlur={onBlur} value={value} placeholder="Digite o Porte do Pet"/>
          )}/>

          <Botao activeOpacity={0.5} onPress={handleSubmit(handleSignIn)}><Texto2>Cadastrar Pet</Texto2></Botao>
        </Form>
    </Container>
  );
}