import React from "react";
import react from "../images/react.png";
import redux from "../images/redux.png";
import JavaScript from "../images/JavaScript.png";
import bootstrap from "../images/bootstrap.png";
import sass from "../images/sass.png";
import CSS from "../images/CSS.png";
import html from "../images/html.png";

function Skill() {
  return (
    <main className="p-4  skill_section" id="skill">
      <h1 className="text-center display-2 mb-4">Skill</h1>

      <div className="d-flex p-2  justify-content-around">
        <img className="img-fluid" src={redux} width="10%" alt="redux" />
        <h1 className="mt-md-5">Redux</h1>
      </div>

      <div className="d-flex p-2  justify-content-around">
        <img className="img-fluid" src={react} width="10%" alt="react" />
        <h1 className="mt-md-5">React</h1>
      </div>

      <div className="d-flex p-2 justify-content-around">
        <img
          className="img-fluid"
          src={JavaScript}
          width="10%"
          alt="JavaScript"
        />
        <h1 className="mt-md-5">JavaScript</h1>
      </div>

      <div className="d-flex p-2  justify-content-around">
        <img
          className="img-fluid"
          src={bootstrap}
          width="10%"
          alt="bootstrap"
        />
        <h1 className="mt-md-5">Bootstrap</h1>
      </div>

      <div className="d-flex p-2  justify-content-around">
        <img className="img-fluid" src={sass} width="10%" alt="sass" />
        <h1 className="mt-md-5">SASS</h1>
      </div>

      <div className="d-flex p-2  justify-content-around">
        <img className="img-fluid" src={CSS} width="10%" alt="CSS" />
        <h1 className="mt-md-5">CSS</h1>
      </div>

      <div className="d-flex p-2  justify-content-around">
        <img className="img-fluid" src={html} width="10%" alt="html" />
        <h1 className="mt-md-5">HTML</h1>
      </div>
    </main>
  );
}

export default Skill;
