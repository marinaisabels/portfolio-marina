import React from 'react';
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import theme from "../src/style/index";

import HomePage from './containers/HomePage';
import AboutPage from './containers/AboutPage';


function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
    <HomePage/>
    <AboutPage/>
{/* applicações */}
    </MuiThemeProvider>
  );
}

export default App;