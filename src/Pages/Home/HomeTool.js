import React from "react";

const HomeTool = tool => {
//   console.log(tool.tool.name);
  const { name, price, uses, picture } = tool.tool;
  return (
    <div class="card md:w-md lg:w-lg bg-base-100 shadow-xl">
      <figure>
        <img className="rounded-2xl" src={picture} alt="Sandpaper" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <p>Price : {price} Tk.</p>
        <p>{uses}</p>
        <div class="card-actions justify-end">
          <button class="btn btn-primary w-full">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default HomeTool;
