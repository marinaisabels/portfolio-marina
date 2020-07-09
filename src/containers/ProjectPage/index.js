import React from "react";
import { Title, TextTitle, Text, Button, Container } from "./style";

function ProjectPage() {

    return (
        <div>
            <Container>
                <Title>Meus Projetos</Title>

                <div>
                <TextTitle>FutureEats</TextTitle>
                <Text>Front-end</Text>
                <p>Aplicativo desenvolvido com Referências ao UberEats que tem como objetivos auxiliar o usuário 
                    a fazer pedidos de restaurantes diversos. O objetivo deste projeto é 
                    programar com React, Redux, HTML e CSS e utilizar bibliotecas como 
                    Material-Ui e Styled Components(a partir de um design já criado no zeplin). 
                    E trabalhar com a implementação de API REST.</p>
                {/* <img src={require("")} alt=""/> */}
                <Button>Ver no GitHub</Button>
                </div>

                <div>
                <TextTitle>4eddit</TextTitle>
                <Text>Front-end</Text>
                {/* <img src={require("")} alt=""/> */}
                <Button>Ver no GitHub</Button>
                </div>

                <div>
                <TextTitle>Spotenu</TextTitle>
                <Text>Full Stack</Text>
                {/* <img src={require("")} alt=""/> */}
                <Button>Ver no GitHub</Button>
                </div>

                <Button>mais projetos</Button>
            </Container>
        </div>
    )
}

export default ProjectPage;