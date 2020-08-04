import styled from "styled-components";

export const Container = styled.div `
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0px 0px 0px 380px;
    width: 99vw;
    height: 180vh;
    background:  #f2c12e;
    font-family: Montserrat;
`

export const Title = styled.h1`
    padding: 50px 0px 0px 200px;
    font-size:20px;
    color: #824c68;  
    margin: 10px;
`

export const TextTitle = styled.h2`
    padding: -30px 0px 0px 30px;
    font-size:40px;
    color: #824c68;  
    margin: 10px;
`
export const Text = styled.div`
    padding: 0px 0px 0px 50px;
    color: #824c68;   
`
export const SubText = styled.p`
    padding: 0px 100px 0px 10px;
    width: 56vw;
    text-align: justify;
    color: #824c68;   
`
export const ContainerImg = styled.img`
    float: left;
    padding: 5px;
    margin: 50px 10px 20px 0px;
    max-width: 250px;
`
export const Button = styled.button`
    margin: 10px;
    width: 140px;
    height:30px;
    padding: 7px 25px;
    border-radius:8px;
    background: white; 
    text-align: justify;
    cursor: pointer;
  &:hover {
    background-color:  #824c68;
  }
  `