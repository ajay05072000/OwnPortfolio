import React from "react";
import { animateScroll as scroll } from "react-scroll";

function Footer() {
  return (
    <div className="bg-dark p-4">
      <footer>
        <div className="d-flex justify-content-end">
          <i
            className="display-3 fa-solid fa-circle-arrow-up"
            onClick={() => scroll.scrollToTop()}
          ></i>
        </div>
        <h1 className="text-center  text-info" id="footer">
          @ Have a Good Day !
        </h1>
      </footer>
    </div>
  );
}

export default Footer;
