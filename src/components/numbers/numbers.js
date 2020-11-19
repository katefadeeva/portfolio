import React from 'react';

import htmlIcon from '../../img/numbers/HTML5_icon.png';
import cssIcon from '../../img/numbers/CSS3_icon.png';
import reactIcon from '../../img/numbers/react_icon.png';
import sassIcon from '../../img/numbers/sass_icon.png';
import gitIcon from '../../img/numbers/git_icon.png';
import webpackIcon from '../../img/numbers/webpack_icon.png';

const Numbers = () => {
  return (
      <section className="numbers">
        <div className="wrapper numbers__wrapper">
          <ul className="numbers-container">
            <li className="icon">
              <span className="ico-html">
                <img src={htmlIcon} alt="Icon Html"/>
              </span>
            </li>
            <li className="icon">
              <span className="ico-react">
                <img src={reactIcon} alt="Icon React"/>
              </span>
            </li>
            <li className="icon">
              <span className="ico-sass">
                <img src={sassIcon} alt="Icon Sass"/>
              </span>
            </li>
            <li className="icon">
              <span className="ico-git">
                <img src={gitIcon} alt="Icon Git"/>
              </span>
            </li>
            <li className="icon">
              <span className="ico-webpack">
                <img src={webpackIcon} alt="Icon Webpack"/>
              </span>
            </li>
            <li className="icon">
              <span className="ico-css">
                <img src={cssIcon} alt="Icon Css"/>
              </span>
            </li>
          </ul>
        </div>
      </section>
  )
}

export default  Numbers;