import styled from "styled-components";


export const AboutContainer = styled.div`
    margin: 0px;
    padding: 40px;
    width: 100vw;
    height: 50vh;
    float: right;
    background: #f2c12e;
    font-family: Montserrat;
    @media(max-width: 736px) {
    width: 100%;
    height: 100%;
  }
`
export const AboutTitle = styled.div`
    font-size:42px;
    color: #5e3249;  
    padding: 0px 400px; 
    @media(max-width: 736px) {
    font-size: 20px;
    padding: 0 0 0 100px;
  }
`

export const AboutText = styled.div`
    color: #5e3249;  
    padding: 0px 400px; 
    text-align: justify;
    @media(max-width: 736px) {
    font-size: 16px;
    padding: 10px 0 0 20px;
  }
`
export const ButtonCV = styled.div`
    width: 10vw;
    height:35px;
    padding: 5px;
    border-radius:8px;
    color: #824c68; 
    background:#feb281; 
    font-family:"Montserrat";
    font-size: 18px;
    text-align: center;
    float: right;
    cursor: pointer;
  &:hover {
    background-color: #da8b2a;
  }
  @media(max-width: 736px) {
    font-size: 14px;
    width: 30%;
    padding: 5px;
    margin: 5px;
  }
`
