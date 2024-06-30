import React from "react";

export default function SkillCard({ name, icon, description }) {
  return (
    <div class="col-lg-3 col-sm-6 col-12 g-0 ps-2">
      <div class="card mb-3 border-0">
        <div class="row g-0 p-3 bg-cust text-light">
          <div className="d-flex flex-col gap-4">
            <div class="text-success m-0">
              <img
                class={`rounded-start py-3 p-0 fs-1 fa-solid  ${icon}`}
                alt={`${name} logo`}
              ></img>
            </div>
            <h5 class="card-title fs-4 montserrat-medium">{name}</h5>
          </div>
          <p class="card-text fs-6 montserrat-light text-cust-light">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
