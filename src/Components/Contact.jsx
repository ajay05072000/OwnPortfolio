import React from "react";

function Contact() {
  return (
    <main
      className="p-5 row mx-auto"
      style={{ backgroundColor: "#0d043b" }}
      id="contact"
    >
      <h1 className="text-center display-4 mb-5" style={{ color: "#8d4896" }}>
        Contact me
      </h1>

      <h1 className=" text-center display-2 mb-5">
        <a href="https://www.linkedin.com/in/ajaykumarjha06/" target="_blank">
          <i class="fab fa-linkedin"></i>
          <h2>Linkedin</h2>
        </a>
      </h1>

      <h1 className="text-center display-2 mb-5">
        <a href="https://github.com/ajayjhadev" target="_blank">
          <i class="fab fa-github"></i>
          <h2>github</h2>
        </a>
      </h1>

      <p className="d-flex p-2 text-light justify-content-center">
        Email: ajaykumarjha05072000@gmail.com
      </p>
    </main>
  );
}

export default Contact;
