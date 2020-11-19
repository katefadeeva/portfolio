import React from 'react';
import myPhoto from "../../img/photo.jpg";

const Skills = () => {
  return (
      <section className="skills">
        <div className="wrapper skills__wrapper">
          <div className="skills__content">
            <h2 className="skills__title">My skills</h2>
            <p>HTML5</p>
            <progress value="30" max="100"></progress>
            <p>CSS3</p>
            <progress value="30" max="100"></progress>
            <p>JavaScript</p>
            <progress value="30" max="100"></progress>
            <p>React</p>
            <progress value="30" max="100"></progress>
            <p>Sass/Scss</p>
            <progress value="30" max="100"></progress>
          </div>
          <img src={myPhoto} className="skills__image" alt="Photo Front-end developer" />
        </div>
      </section>
  )
}

export default  Skills;