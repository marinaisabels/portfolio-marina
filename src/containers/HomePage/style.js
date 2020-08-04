import styled from "styled-components";


export const NavBar = styled.div`
  width: 70vw;
`
export const NavBarIcons = styled.ul`
  width: 6vw;
  list-style-type: none;
  right: 0px;
  margin: 0;
  padding: 0;
  border-radius: 2em;
  background-color:#5e3249;
  position: absolute;
  height: 90vh;
  @media(max-width: 736px) {
    padding: 10px 0 0 -20px; 
    width: 15%; 
    height: 40%;
  }
`
export const NavBarIconslist = styled.li`
  padding: 30px 25px;
  float: center;
  border-radius: 1.5em;
  cursor: pointer;
  &:hover {
    background-color: #824c68;
  }
`
export const AboutMe = styled.div`
  margin: 0px;
  padding: -30px 30px;
  background: #5e3249;
  border:none;
  width: 50vw;
  height:90vh;
  font-family:"Montserrat";
  font-size: 16px;
  float: right;
  @media(max-width: 736px) { 
    width: 100%;
    /* height: -30%; */
    display: block;
  }
`
export const MyName = styled.h1`
  color:#feb281;
  font-size: 60px;
  padding: 50px 80px  50px 0px;
  @media(max-width: 736px) {
    padding: 50px 0  0 140px;
    width: 100%; 
    font-size: 30px;
  }
`
export const Title = styled.h4 `
 color: #feb281;
 font-size: 24px;
 margin: -110px;
 padding: 15px 180px  10px 117px;
 float: center; 
 @media(max-width: 736px) {
    padding: 90px 0  0 250px; 
    font-size: 12px;
  }
`
export const TextTec = styled.p`
 color: #feb281;
 padding: 120px  0px   50px  80px;
 float: center;
 @media(max-width: 736px) {
    padding: 120px 0  0 170px; 
    font-size: 11px;
  }
`
export const MyPhoto = styled.div`
 margin: -100px;
 background: #5e3249;
 border:none;
 width: 60vw;
 height:110vh;
 float: left;
 @media(max-width: 736px) { 
    width: 70%;
    height: 90%;
    left: 5%;
    display: block;
  }
`
export const Picture = styled.img`
 margin: 60px;
 padding: 40px 0px 0px 260px;
 width: 45vw;
 height:80vh;
 float: left;
  
`