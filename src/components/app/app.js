import React, { Component }from 'react';
import Header from "../header";
import Promo from "../promo";
import AboutMe from "../about-me";

export default class App extends Component {

  render() {

    return (
        <React.Fragment>
          <Header />
          <Promo />
          <AboutMe />

        </React.Fragment>
    )
  }
}