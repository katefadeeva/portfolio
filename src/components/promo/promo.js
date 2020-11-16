import React, { Component }from 'react';
import image from '../../img/Frame.png'

export default class Promo extends Component {

  render() {

    return (
        <section className="promo">
          <div className="wrapper promo__wrapper">
            <img src={image} className="promo__image" alt="Portfolio Front-end developer" />
            <div className="promo__content">
              <h1 className="promo__title">Front-end developer</h1>
              <p className="promo__text">Text</p>
              <div className="promo__buttons">
                <button className="button button_colored">Write to me</button>
              </div>
            </div>
          </div>
        </section>
    )
  }
}