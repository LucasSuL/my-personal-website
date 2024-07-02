import React from "react";
import Data from "../../data.json";
import ExperienceCard from "../elements/ExperienceCard";
import "../../styles/timeline.css";
import useScrollAppearEffect from "../../assets/js/useScrollAppearEffect";
import bg_1 from "../../assets/images/bg-1.png";
import bg_2 from "../../assets/images/bg-2.png";
import bg_3 from "../../assets/images/bg-3.png";
import bg_4 from "../../assets/images/bg-4.png";

export default function Experience() {
  const appearStyleTitle = useScrollAppearEffect({
    id: "experience",
    name: "text-header",
  });
  const appearStyleExpHeader = useScrollAppearEffect({
    id: "experience",
    name: "tm-header",
  });
  const appearStyleExpBox = useScrollAppearEffect({
    id: "experience",
    name: "tm-container",
  });

  const experienceCard = Data.experience.map((value, index) => {
    return <ExperienceCard key={index} id={index} {...value} />;
  });

  return (
    <section
      class="container pt-4 position-relative"
      id="experience"
      style={{ maxWidth: "1200px" }}
    >
      <div className="container ">
        <h2
          class="text-dark montserrat-bold text-uppercase text-center py-4 anime-1"
          style={appearStyleTitle}
        >
          Experience
        </h2>
        <div class="tm-main">
          <div className="tm-header mb-2" style={appearStyleExpHeader}>
            <span
              className="text-light p-2 px-3 rounded"
              style={{ backgroundColor: "#333" }}
            >
              {new Date().getFullYear()}
            </span>
          </div>
          <div class="container tm-container " style={appearStyleExpBox}>
            {experienceCard}
          </div>
        </div>
      </div>
      <div className="d-none d-sm-block">
        <div className="bg-1">
          <img src={bg_1} alt="" />
        </div>
        <div className="bg-2">
          <img src={bg_2} alt="" />
        </div>
        <div className="bg-3">
          <img src={bg_3} alt="" />
        </div>
        <div className="bg-4">
          <img src={bg_4} alt="" />
        </div>
      </div>
    </section>
  );
}
