import React, { useEffect } from "react";
import { animateHome } from "../../assets/js/animateHome";

import Navbar from "../elements/Navbar";
import { useEnlargeBackImg } from "../../assets/js/useEnlargeBackImg";

import "../../styles/hero.css";

export default function Hero() {
  const backgroundSize = useEnlargeBackImg();

  useEffect(() => {
    animateHome();
    console.log(1111111111);
  }, []);

  return (
    <div>
      <Navbar />
      <section
        class="container-fluid  cust-hero p-0 position-relative"
        style={{ backgroundSize: `${backgroundSize}` }}
      >
        <div
          class="container"
          id="cust-hero-id"
          style={{ maxWidth: "1400px", paddingTop: "80px" }}
        >
          <div
            class="container m-0 p-0 text-light d-flex flex-column justify-content-between cust-hero-body"
            // style={appearStyleHomeText}
          >
            <div class="row"></div>
            <div class="row m-0 ">
              <p>I'm a</p>
              <h1 class="fw-bold text-header text-tight fs-0">
                Graduate student who switched to{" "}
                <span class="text-gold"> computer science.</span>
              </h1>
              <h3>Currently at</h3>
              <p class="mt-3">Adelaide, Australia</p>
            </div>
            <div class="row mb-5">
              {" "}
              <div
                class="container d-flex justify-content-evenly w-75 cust-hero-badge"
                // style={appearStyleHomeBadge}
              >
                <a
                  href="https://www.linkedin.com/in/lucassudev/"
                  target="_blank"
                  rel="noreferrer"
                  title="LinkedIn"
                  class="hero-icon"
                  style={{ color: "white" }}
                >
                  <span>
                    <i className="fab fa-2x fa-linkedin"></i>
                  </span>
                </a>
                <a
                  href="https://github.com/LucasSuL"
                  target="_blank"
                  rel="noreferrer"
                  title="GitHub"
                  class="hero-icon"
                  style={{ color: "white" }}
                >
                  <span>
                    <i className="fab fa-2x fa-github"></i>
                  </span>
                </a>
                <a
                  href="https://dev.to/lucassul"
                  target="_blank"
                  rel="noreferrer"
                  title="Dev"
                  class="hero-icon"
                  style={{ color: "white" }}
                >
                  <span>
                    <i className="fab fa-2x fa-dev"></i>
                  </span>
                </a>
                <a
                  href="https://www.strava.com/athletes/84823175"
                  target="_blank"
                  rel="noreferrer"
                  title="Strava"
                  class="hero-icon"
                  style={{ color: "white" }}
                >
                  <span>
                    <i className="fab fa-2x fa-strava"></i>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="custom-shape-divider-bottom-1719732010">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M600,112.77C268.63,112.77,0,65.52,0,7.23V120H1200V7.23C1200,65.52,931.37,112.77,600,112.77Z"
              class="shape-fill"
            ></path>
          </svg>
        </div>
      </section>
    </div>
  );
}
