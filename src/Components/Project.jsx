import React from "react";
import reactWeb from "../images/reactWeb.jpg";

function Project() {
  return (
    <main className="row g-4 p-3 mx-auto project" id="project">
      <h1 className="text-center">Project's</h1>

      <section className="col-10 col-md-3 mx-auto">
        <div className="card">
          <img src={reactWeb} className="card-img-top" alt="reactWeb" />
          <div className="card-body">
            <h5 className="card-title">reactWebProject</h5>
            <p className="card-text">
              Technologies Used: React , React-router , Bootstrap
            </p>
            <a
              href="https://reactwebproject.netlify.app/"
              className="btn btn-outline-primary me-5"
            >
              Web
            </a>

            <a
              href="https://github.com/ajay05072000/reactWebProject"
              className="btn btn-outline-primary"
            >
              github
            </a>
          </div>
        </div>
      </section>

      <section className="col-10 col-md-3 mx-auto">
        <div className="card">
          <img src={reactWeb} className="card-img-top" alt="reactWeb" />
          <div className="card-body">
            <h5 className="card-title">reactSmoothScroll</h5>
            <p className="card-text">
              Technologies Used: React , react-scroll , Bootstrap
            </p>
            <a
              href="https://react-smoothscroll.netlify.app/"
              className="btn btn-outline-primary me-5"
            >
              Web
            </a>

            <a
              href="https://github.com/ajay05072000/react-smoothScroll"
              className="btn btn-outline-primary"
            >
              github
            </a>
          </div>
        </div>
      </section>

      <section className="col-10 col-md-3 mx-auto">
        <div className="card">
          <img src={reactWeb} className="card-img-top" alt="reactWeb" />
          <div className="card-body">
            <h5 className="card-title">Bootstrap_Project</h5>
            <p className="card-text">
              Technologies Used: HTML , CSS , Bootstrap
            </p>
            <a
              href="https://jhaajay749.github.io/BootstrapProject/"
              className="btn btn-outline-primary me-5"
            >
              Web
            </a>

            <a
              href="https://github.com/ajay05072000/Bootstrap_Project"
              className="btn btn-outline-primary"
            >
              github
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Project;
