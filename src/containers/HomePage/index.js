import React from "react";
import ButtonAppBar from "../../components/Material/AppBar";
import { NavBar, NavBarIcons, NavBarIconslist, AboutMe, MyName, Title, TextTec, MyPhoto, Picture } from "./style";


function HomePage() {
    
    return (
        <div>
           <ButtonAppBar/>
            <NavBar>
                <NavBarIcons>
                    <NavBarIconslist><a href="https://www.linkedin.com/in/marinaisabel/"><img src={require("../../images/group-10-copy.png")} alt="" /></a></NavBarIconslist>
                    <NavBarIconslist><a href="https://github.com/marinaisabels"><img src={require("../../images/fill-1-copy.png")} alt="" /></a></NavBarIconslist>
                    <NavBarIconslist><a href="https://instagram.com/marina_iza"><img src={require("../../images/group-8-copy.png")} alt="" /></a></NavBarIconslist>
                </NavBarIcons>
            </NavBar>
            {/* Container da foto  */}
            <MyPhoto>
                <Picture src={require("../../images/eu.jpeg")} alt=""></Picture>
            </MyPhoto>
            {/* Container  de apresentação */}
            <AboutMe>
                <MyName><b>Eu sou <br/>Marina Isabel</b></MyName>
                <Title>Desenvolvedora Web Full Stack</Title>
                <TextTec>tecnologia e programação</TextTec>
            </AboutMe>
        </div>
    )
}

export default HomePage