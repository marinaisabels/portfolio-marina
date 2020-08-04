import React from 'react';
import { MuiThemeProvider, CssBaseline } from "@material-ui/core";
import theme from "../src/style/index";




import HomePage from './containers/HomePage';
import AboutPage from './containers/AboutPage';
import CompetencePage from './containers/CompetencePage';
import EducationPage from './containers/EducationPage';
import ProjectPage from "./containers/ProjectPage"
import ContactPage from './containers/ContactPage';




function App() {
  return (
    <div className="App">
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <HomePage />
      <AboutPage />
      <CompetencePage />
      <EducationPage />
      <ProjectPage/>
      <ContactPage/>
    </MuiThemeProvider>
    </div>
  );
}

export default App;