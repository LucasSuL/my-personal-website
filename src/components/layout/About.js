import React from "react";
import useScrollAppearEffect from "../../assets/js/useScrollAppearEffect";

import portrait from "../../images/lucassu.jpg";
import Data from "../../data.json";
import HobbyBadge from "../elements/HobbyBadge";

export default function About() {
  const appearStyleToptext = useScrollAppearEffect({
    id: "about",
    name: "toptext",
  });
  const appearStyleGoal = useScrollAppearEffect({ id: "about", name: "goal" });
  const appearStyleHobbies = useScrollAppearEffect({
    id: "about",
    name: "hobbies",
  });

  const hobbies = Data.hobbies.map((value, index) => {
    return <HobbyBadge key={index} {...value} />;
  });

  return (
    <section class="container-fluid bg-success  p-0" id="about">
      <div
        class="container d-flex flex-column align-items-center text-light "
        style={{ maxWidth: "1200px" }}
      >
        <img
          width="180px"
          height="180px"
          src={portrait}
          alt="Lucas Su"
          class="rounded-circle my-3 border border-success-subtle border-4 shadow"
        />

        <div class="container d-flex flex-column align-items-center">
          <div className="toptext" style={appearStyleToptext}>
            <h3 class="fw-bold mb-3 text-center">{Data.about.hello}</h3>
            <p class="fw-light fs-5 m-0">
              {Data.about.up}
              <span>
                {" "}
                Visit the
                <span>
                  <a
                    href="#downloads"
                    class="text-light ms-1 fw-normal link-light link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover"
                  >
                    Download
                  </a>
                </span>{" "}
                section if you are interested in my portfolio as an Urban
                Planner.
              </span>
            </p>

            <p class="fw-light fs-5 m-0">{Data.about.curr}</p>
          </div>

          <div
            class="fs-4 mt-5 d-flex flex-column align-items-center text-header goal"
            style={appearStyleGoal}
          >
            <p class="fs-5 mb-3">My goal is to be:</p>
            <p class="m-0">Front End Developer</p>
            <p class="m-0">Full Stack Developer</p>
            <p class="m-0">Product Manager</p>
          </div>

          <div
            class="container row row-cols-lg-5 g-2 fs-8 p-5 g-4 hobbies"
            style={appearStyleHobbies}
          >
            {hobbies}
          </div>
        </div>
      </div>
    </section>
  );
}
