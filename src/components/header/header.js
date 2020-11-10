import React, { Component }from 'react';

export default class Header extends Component {

  render() {

    return (
        <header className='header'>
          <div className="wrapper header__wrapper">
            <div className='header__logo'>
              <p className="logo">KF</p>
            </div>
            <nav className="header__navigation header__navigation_closed">
              <ul className="navigation">
                <li className="navigation__link">Home</li>
                <li className="navigation__link">About me</li>
                <li className="navigation__link">Projects</li>
                <li className="navigation__link">Skills</li>
                <li className="navigation__link">Contacts</li>
              </ul>
            </nav>
          </div>
        </header>
    )
  }
}