import React from "react";
import { Container, Imagem, Texto, Titulo } from "./style";

export default function Ajude() {
  return(
    <Container>
      <Titulo>Ajude as ONG'S</Titulo>

      <Texto>A Helpet é o maior aplicativo de adoção do Brasil. Como todos sabem, os protetores e as ONGs passam por um trabalho árduo todos os dias e que precisam desses recursos. Hoje estamos apenas aceitando doações via PIX, onde 90% do valor é distribuído para as ONGs que são parceiras mensalmente e os outros 10% do valor vai para melhorar a estrutura do aplicativo, atendendo cada vez mais protetores e cidades. Você pode transferir via PIX através da chave (email):</Texto>

      <Titulo>pix@helpet.com</Titulo>

      <Imagem source={require('../../images/wing.com.png')}/>
    </Container>
  );
}