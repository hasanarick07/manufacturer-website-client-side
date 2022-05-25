import React from "react";
import { useNavigate } from "react-router-dom";

const HomeTool = tool => {
  const go = useNavigate();
  const buyNow = id => {
    go(`/tool/${id}`);
  };
  //   console.log(tool.tool.name);
  const { name, price, uses, picture, minimumOrderQuantity, _id, quantity } =
    tool.tool;
  return (
    <div class="card md:w-md lg:w-lg bg-neutral shadow-xl">
      <figure>
        <img className="rounded-2xl" src={picture} alt="Sandpaper" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">{name}</h2>
        <p>
          Price : <span className="text-2xl">&#2547;</span> {price}
          &#x0002F;piece
        </p>
        <p>Minimum Order Quantity : {minimumOrderQuantity} PC</p>
        <p>Available Stock : {quantity} PC</p>
        <p>{uses}</p>
        <div class="card-actions justify-end">
          <button onClick={() => buyNow(_id)} class="btn btn-primary w-full">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeTool;
