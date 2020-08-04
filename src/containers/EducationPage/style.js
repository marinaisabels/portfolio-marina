import styled from "styled-components";


export const Container = styled.div `
  display: flex;
  justify-content: space-between;
  background: #5e3249;
  margin: 0px;
  width: 99vw;
  height: 70vh;
  float: left;
  font-family: Montserrat;
  @media(max-width: 736px) {
    width: 100%;
    height: 100%;
  } 
`
export const Title = styled.h1`
  font-size:30px;
  color: white;  
  margin: 10px;
  padding: 5px 10px 10px 120px;
  @media(max-width: 736px) {
    font-size: 18px;
    padding: 0 0 0 0;
  } 
`
export const TitleText = styled.h1`
  font-size: 20px;
  color: white; 
  @media(max-width: 736px) {
    font-size: 10px;
  }  
`
export const Text = styled.div`
  font-size: 13px;
  color: white;
  @media(max-width: 736px) {
    font-size: 11px;
  }    
`
export const LeftContainer = styled.div`
  padding: 63px 15px 10px 20px;
  background:#5e3249;
  width: 60vw;
  height:70vh;
  text-align: justify;
  @media(max-width: 736px) {
    width: 40%;
    height: 20%;
  } 
`
export const RightContainer = styled.div`
  padding: 63px 15px 10px 20px;
  width: 60vw;
  height:70vh;
  background: #5e3249;
  text-align: justify;
  @media(max-width: 736px) {
    width: 30%;
    height: 20%;
  } 
`
export const CenterContanier = styled.div`
  padding: 0 15px;
  width: 70vw;
  height:70vh;
  background:#5e3249;
  text-align: justify;
  @media(max-width: 736px) {
    width: 38%;
    height: 20%;
    padding: 25px;
  } 
`