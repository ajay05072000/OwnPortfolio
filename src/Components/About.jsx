import React from "react";
import dev from "../assets/dev.png";

function About() {
  return (
    <>
      <main
        className="row g-4 p-4 bg-dark d-flex justify-content-center"
        id="about"
      >
        <section className="col-10 col-md-5  order-2 order-md-1 sectionAbout">
          <div>
            <h1 id="intro">Hey ! , I'm Ajay</h1>

            <h1 id="heading">
              <span id="react">ReactJs/NextJs</span> Frontend developer
            </h1>
          </div>
          <p className="textAbout">
            This is Ajay Kumar Jha , Computer Science undergrad
            <br />
            I’m interested in React | Frontend Development I've good
            understanding in ReactJS / NextJS Frontend development , I've been
            learning tools and technologies of Frontend development and
            developing projects in ReactJS and their Ecosystem Frontend
            development since my 1st year of college and really enjoying it....
            <br />I am very passionate about learning new technologies and serve
            in Industry.
          </p>
          <div className="text-center mb-4">
            <a
              href="https://drive.google.com/file/d/1pD4BwbuF9VeLQeUjUADLCP0AoxfGmSRK/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button type="button" className="btn btn-outline-primary">
                View Resume
              </button>
            </a>
          </div>
        </section>

        <section className="col-10 col-md-5 d-flex justify-content-center order-1 order-md-2">
          <img src={dev} className="img-fluid" alt="own" />
        </section>
      </main>
    </>
  );
}

export default About;
