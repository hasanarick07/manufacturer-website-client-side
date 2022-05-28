import React from "react";
import { Link } from "react-router-dom";

const Purposes = () => {
  return (
    <div>
      <div class="card lg-w-lg md-w-md sm-w-sm bg-neutral ">
        <div class="card-body">
          <h2 class="font-black text-3xl text-center">Our Purpose</h2>
          <p>We apply our materials science, engineering and manufacturing expertise to position our customers to win.</p>
          <div class="card-actions justify-center">
            <button class="btn btn-primary sm-w-sm md-w-md lg-w-lg"><Link to='/purpose'>Learn More</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purposes;
