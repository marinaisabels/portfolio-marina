import styled from "styled-components";


export const Container = styled.div `
    margin: 0px;
    padding: 30px;
    width: 99vw;
    height: 60vh;
    float: left;
    background: #feb281;
    font-family: Montserrat;
    @media(max-width: 736px) {
    width: 100%;
    height: 100%;
  }
`
export const Title = styled.h1`
    font-size:20px;
    color: #824c68;  
    margin: -10px;
    padding: 0px 0px 50px 420px;
    @media(max-width: 736px) {
    font-size: 16px;
    padding: 10px 0 0 20px;
  } 
`
export const TitleText = styled.h1`
font-size:50px;
    color: #824c68; 
    @media(max-width: 736px) {
    font-size: 18px;
  } 
`
export const Text = styled.div`
    color: #824c68;
    @media(max-width: 736px) {
    font-size: 14px;
  }   
`
export const LeftContainer = styled.div`
  float: left;
  padding: 0 200px; 
  text-align: justify;
  @media(max-width: 736px) {
    padding: 5px 0 0 20px;
  } 
`

export const RightContainer = styled.div`
  float: left;
  text-align: justify;
  @media(max-width: 736px) {
    padding: 0 0 0 20px;
  } 
`