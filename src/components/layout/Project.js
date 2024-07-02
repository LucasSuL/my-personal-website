import React from "react";
import afb from "../../assets/images/afb.png";
import case_c from "../../assets/images/case.png";
import lexi from "../../assets/images/lexi.png";
import afb_logo from "../../assets/images/afb-logo.png";
import case_logo from "../../assets/images/case-logo.png";
import lexi_logo from "../../assets/images/lexi-logo.png";

const Project = () => {
  return (
    <section
      class="container pt-4"
      id="experience"
      style={{ maxWidth: "1200px" }}
    >
      <div className="container" id="projects">
        <h2
          class="text-dark montserrat-bold text-uppercase text-center py-4 anime-1"
          // style={appearStyleTitle}
        >
          Projects
        </h2>
        <div>
          <div className=" align-items-center  row">
            <div className="col-12 col-md-4">
              {/* <h2 className="montserrat-sbold">AI Form Builder</h2> */}
              <img src={afb_logo} alt="" className="img-fluid w-50 mb-3" />

              <p className="montserrat-light">
                AI Form Builder utilises the Google Gemini API to dynamically
                generate forms based on user input. Users can customize forms,
                share them with their target audiences, and export responses
                directly from their dashboard.
              </p>
              <a
                href="https://lucassu-ai-form-builder.vercel.app/"
                class="p-0 text-secondary fs-7 link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover"
                target="_blank"
                rel="noreferrer"
              >
                LiveView <i class="bi bi-arrow-up-right fs-8"></i>
              </a>
            </div>
            <div className="col-12 col-md-8">
              <img src={afb} alt="" className="img-fluid" />
            </div>
          </div>
          <div className=" align-items-center  row">
            <div className="col-12 col-md-4">
              {/* <h2 className="montserrat-sbold">AI Form Builder</h2> */}
              <img src={case_logo} alt="" className="img-fluid w-40 mb-3" />

              <p className="montserrat-light">
                CaseCobra is a shopping site integrating Stripe, designed for
                customers to customize their phone cases by uploading images and
                choosing from various colours and materials. Merchants can view
                sales data on the dashboard.
              </p>
              <a
                href="https://casecobra-lucassu.vercel.app/"
                class="p-0 text-secondary fs-7 link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover"
                target="_blank"
                rel="noreferrer"
              >
                LiveView <i class="bi bi-arrow-up-right fs-8"></i>
              </a>
            </div>
            <div className="col-12 col-md-8">
              <img src={case_c} alt="" className="img-fluid" />
            </div>
          </div>
          <div className=" align-items-center  row">
            <div className="col-12 col-md-4">
              {/* <h2 className="montserrat-sbold">AI Form Builder</h2> */}
              <img src={lexi_logo} alt="" className="img-fluid w-75 mb-3" />

              <p className="montserrat-light">
                ALC is a platform where users can view, search, post, and vote
                on AI terms and language-based translations. The platform
                includes user authentication and a credit system, form
                validation, content sorting, and site search functionalities.
              </p>
              <a
                href="https://lucassul.github.io/ai-lexicon-community/"
                class="p-0 text-secondary fs-7 link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-75-hover"
                target="_blank"
                rel="noreferrer"
              >
                LiveView <i class="bi bi-arrow-up-right fs-8"></i>
              </a>
            </div>
            <div className="col-12 col-md-8">
              <img src={lexi} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
