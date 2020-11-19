import React, { Component }from 'react';
import Header from "../header";
import Promo from "../promo";
import AboutMe from "../about-me";
import Numbers from "../numbers";
import Skills from "../skills";
import Projects from "../projects";

export default class App extends Component {

  render() {

    return (
        <React.Fragment>
          <Header />
          <Promo />
          <AboutMe />
          <Numbers />
          <Skills />
          <Projects />
        </React.Fragment>
    )
  }
}