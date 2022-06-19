import React from "react";
import { Adesivo, Botao, Container, Fundo, Texto, Texto2, Texto3 } from "../FeedbackCadastro/style";

export default function FeedbackCadastro() {
  return(
    <Container>
      <Fundo source={require('../../images/bolas.png')} resizeMode="cover">

        <Adesivo source={require('../../images/icon.png')}/>

        <Texto>Parabéns!!</Texto>
        <Texto2>Sua conta foi criada com sucesso.</Texto2>

        <Botao><Texto3>Continuar</Texto3></Botao>
      </Fundo>
    </Container>
  );
}