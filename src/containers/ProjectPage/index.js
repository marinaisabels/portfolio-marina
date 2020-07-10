import React from "react";
import { Title, TextTitle, Text, Button, Container, SubText, ContainerImg } from "./style";

function ProjectPage() {

    return (
        <div>
            <Container>
                <Title>Meus Projetos</Title>

                <div>
                <ContainerImg src={require("../../images/imac-copy.png")} alt="" />
                    <TextTitle>FutureEats</TextTitle>
                    <Text>Front-end</Text>
                    <SubText>Aplicativo desenvolvido com Referências ao UberEats que tem como objetivos auxiliar o usuário
                    a fazer pedidos de restaurantes diversos. O objetivo deste projeto é
                    programar com React, Redux, HTML e CSS e utilizar bibliotecas como
                    Material-Ui e Styled Components(a partir de um design já criado no zeplin).
                    E trabalhar com a implementação de API REST.</SubText>
                    <Button>Ver no GitHub</Button>
                </div>

                <div>
                <ContainerImg src={require("../../images/macbook-copy.png")} alt="" />
                    <TextTitle>4eddit</TextTitle>
                    <Text>Front-end</Text>
                    <SubText>Aplicativo desenvolvido com Referências ao Reddit.
                    O objetivo deste projeto é programar com React, Redux, HTML e CSS e utilizar bibliotecas como
                    Material-Ui e Styled Components.E trabalhar com a implementação de API REST.</SubText>
                    <Button>Ver no GitHub</Button>
                </div>

                <div>
                <ContainerImg src={require("../../images/ipad-copy.png")} alt="" />
                    <TextTitle>Spotenu</TextTitle>
                    <Text>Full Stack</Text>
                    <SubText>Aplicativo desenvolvido com Referências ao Spotify.
                    O objetivo deste projeto é programar o Front-end utilizando
                    React, Redux, HTML e CSS e o Back-end utilizando NodeJS, Express, Typescript e MySQL.</SubText>
                    <Button>Ver no GitHub</Button>

                    <Button>mais projetos</Button>
                </div>
            </Container>
        </div>
    )
}

export default ProjectPage;