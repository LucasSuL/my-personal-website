import React from "react";
import SkillCard from "../elements/SkillCard";
import Data from "../../data.json";
import useScrollAppearEffect from "../../assets/js/useScrollAppearEffect";
import boy_yeah from "../../assets/images/3d-casual-life-young-smiling-man-points-with-fingers-to-right-side.png";

export default function Skills() {
  const appearStyleTitle = useScrollAppearEffect({
    id: "skills",
    name: "anime-1",
  });
  const appearStyleSkills = useScrollAppearEffect({
    id: "skills",
    name: "anime-2",
  });

  const skillCard = Data.skills.map((value, index) => {
    return <SkillCard key={index} {...value} />;
  });
  return (
    <div className="bg-cust">
      <section
        class="container pt-4"
        id="skills"
        style={{ maxWidth: "1200px" }}
      >
        <div className="container ">
          <h2
            class="text-light montserrat-bold text-uppercase text-center py-4 anime-1"
            style={appearStyleTitle}
          >
            Skills
          </h2>
          <div className="d-flex align-items-center gap-3 flex-column flex-lg-row">
            <div class="row style-row anime-2 pb-5" style={appearStyleSkills}>
              {skillCard}
            </div>
            <img src={boy_yeah} alt="" width="300px" height="300px" className="mb-5"/>
          </div>
        </div>
      </section>
    </div>
  );
}
