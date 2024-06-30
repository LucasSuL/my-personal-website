import React from "react";

export default function HobbyBadge({ name, icon }) {
  return (
    <div className="col">
      <div class="d-flex justify-content-center shadow-md" style={{ height: "40px" }}>
        <div class="d-flex align-items-center justify-content-center bg-dark text-light montserrat-sbold text-uppercase  rounded-start-3 px-3 text-nowrap shadow-sm h-100 justify-content-center">
          {name}
        </div>
        <div class="d-flex text-bg-success rounded-end-3 shadow-sm h-150 border">
          <i class={`fa-solid fs-5 ${icon} px-2 align-self-center`}></i>
        </div>
      </div>
    </div>
  );
}
