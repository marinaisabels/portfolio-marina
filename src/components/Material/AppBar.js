import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

import styled from "styled-components";




const Button = styled.a`
  width: 10vw;
  height:30px;
  background: #5e3249;
  color: #feb281;
  border:none;
  border-radius: 1em;
  font-family:"Montserrat";
  font-size: 18px;
  float: right;
  padding: 0 21px;
  cursor: pointer;
  &:hover {
    background-color: #824c68;
  }
  @media(max-width: 736px) { 
    width: 30%;
    left: 18%;
    font-size: 14px;
    display: block;
  }
`

const StyleButton = styled.div`
  width: 100vw;
`

const useStyles = makeStyles(theme => ({
    root: {
        height: 64,
    },
    toolbar: {
        justifyContent: 'space-evenly',
    },
    title: {
        flexGrow: 1,
    }
}));



function ButtonAppBar() {

    const classes = useStyles();
    return (
        <AppBar className={classes.root} color='primary' position="static">
            <Toolbar className={classes.toolbar}>
                <StyleButton>
                    <Button href="#ContactPage" style={{ textDecoration: 'none' }}>contato</Button>
                    <Button href="#ProjectPage" style={{ textDecoration: 'none' }}>projetos</Button>
                    <Button href="#AboutPage" style={{ textDecoration: 'none' }}>quem sou</Button>
                </StyleButton>
            </Toolbar>
        </AppBar>
    )
}

export default ButtonAppBar;