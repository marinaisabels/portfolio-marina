import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import { makeStyles } from '@material-ui/core/styles';


import styled from "styled-components";


const Button = styled.button`
  width: 7vw;
  height:25px;
  background: #da8b2a;
  color: #ffff;
  border:none;
  border-radius: 7%;
  font-family:"Montserrat";
  font-size: 16px;
  float: right;
  cursor: pointer;
  &:hover {
    background-color: #e1b547;
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
        justifyContent: 'space-between',
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
                <Button>contato</Button>
                <Button>projetos</Button>
                <Button>quem sou</Button>
                </StyleButton>
                
            </Toolbar>
        </AppBar>
    )
}



export default ButtonAppBar;