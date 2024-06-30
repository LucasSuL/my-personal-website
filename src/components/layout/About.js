import React from "react";
import useScrollAppearEffect from "../../assets/js/useScrollAppearEffect";

import portrait from "../../images/LucasSu.png";
import Data from "../../data.json";
import HobbyBadge from "../elements/HobbyBadge";

export default function About() {
  const appearStyleToptext = useScrollAppearEffect({
    id: "about",
    name: "toptext",
  });
  // const appearStyleGoal = useScrollAppearEffect({ id: "about", name: "goal" });
  const appearStyleHobbies = useScrollAppearEffect({
    id: "about",
    name: "hobbies",
  });

  const hobbies = Data.hobbies.map((value, index) => {
    return <HobbyBadge key={index} {...value} />;
  });

  return (
    <section class="container-fluid bg-light p-0" id="about">
      <div
        class="container d-flex flex-column align-items-center"
        style={{ maxWidth: "1200px", color: "#092B47" }}
      >
        <h2 className="montserrat-bold my-5 fs-1 text-center text-uppercase">
          {Data.about.hello}
        </h2>

        <img
          width="180px"
          height="180px"
          src={portrait}
          alt="Lucas Su"
          className="rounded-circle mb-3 border border-success-subtle border-4 shadow"
        />

        <div className="container d-flex flex-column align-items-center">
          <div className="toptext " style={appearStyleToptext}>
            <p className="montserrat-medium m-0 mb-2  fs-6">
              {Data.about.up}
              <span>
                {" "}
                (Visit the{" "}
                <span>
                  <a href="#downloads" className="text-decoration-none">
                    Downloads
                  </a>
                </span>{" "}
                section if you are interested in my portfolio as an Urban
                Planner.)
              </span>
            </p>

            <p class="montserrat-medium m-0 fs-6">{Data.about.curr}</p>
          </div>

          {/* <div
            class="fs-4 mt-5 d-flex flex-column align-items-center text-header goal"
            style={appearStyleGoal}
          >
            <p class="fs-5 mb-3 montserrat-bold">My goal is to be:</p>
            <p class="m-0 fs-5">Front End Developer</p>
            <p class="m-0 fs-5">Full Stack Developer</p>
            <p class="m-0 fs-5">Product Manager</p>
          </div> */}

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
