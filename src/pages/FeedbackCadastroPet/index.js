import React from "react";
import { Adesivo, Botao, Container, Fundo, Texto, Texto2, Texto3 } from "../FeedbackCadastroPet/style";

export default function FeedbackCadastroPet() {
  return(
    <Container>
      <Fundo source={require('../../images/bolas.png')} resizeMode="cover">

        <Adesivo source={require('../../images/art.png')}/>

        <Texto>Parabéns!!</Texto>
        <Texto2>O Pet foi cadastrado com sucesso.</Texto2>

        <Botao><Texto3>Continuar</Texto3></Botao>
      </Fundo>
    </Container>
  );
}