import React from "react";

export default function SkillCard({ name, icon, description }) {
  return (
    <div class="col-lg-3 col-sm-6 col-12 g-0 ps-2">
      <div class="card mb-3 border-0">
        <div class="row g-0">
          <div class="col-lg-2 col-2 text-success m-0">
            <img
              class={`rounded-start py-3 p-0 fs-1 fa-solid  ${icon}`}
              alt={`${name} logo`}
            ></img>
          </div>
          <div class="col-lg-10 col-10 pe-1">
            <div class="card-body">
              <h5 class="card-title fw-bold fs-4 text-header">{name}</h5>
              <p class="card-text fs-6 text-secondary">{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
