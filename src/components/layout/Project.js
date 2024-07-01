import React from "react";
import samplephoto from '../../assets/images/3d-casual-life-asian-man-holding-toy-heart.png'

const Project = () => {
  return (
    <section
      class="container pt-4"
      id="experience"
      style={{ maxWidth: "1200px" }}
    >
      <div className="container">
        <h2
          class="text-dark montserrat-bold text-uppercase text-center py-4 anime-1"
          // style={appearStyleTitle}
        >
          Projects
        </h2>
        <div>
          <div className="d-flex gap-2 align-items-center border">
            <div>
              <h2>AI Form Builder</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse dolorem debitis cupiditate, repudiandae molestias commodi fugit assumenda atque nostrum inventore.</p>
              <a href="https://lucassu-ai-form-builder.vercel.app/">
                Live View
              </a>
            </div>
            <div>
              <img src={samplephoto} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
