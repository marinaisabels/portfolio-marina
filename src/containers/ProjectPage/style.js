import styled from "styled-components";



export const Container = styled.div `
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0px;
    padding: 30px 10px 0px 570px;
    width: 99vw;
    height: 98vh;
    background: white;
    font-family: Montserrat;
`

export const Title = styled.h1`
    padding: 0px 0px 0px -30px;
    font-size:20px;
    color: #5a3b3b;  
    margin: 10px;
`

export const TextTitle = styled.h2`
    padding: 0px 0px 0px 30px;
    font-size:40px;
    color: #5a3b3b;  
    margin: 10px;
`
export const Text = styled.div`
    padding: 0px 10px 0px 50px;
    color: #5a3b3b;   
`
export const Button = styled.button`
    margin: 10px;
    width: 140px;
    height:30px;
    padding: 7px 25px;
    border-radius:8px;
    color: #5a3b3b; 
    background: #e28d8c; 
    text-align: justify;
    cursor: pointer;
  &:hover {
    background-color: #da8b2a;
  }
`
