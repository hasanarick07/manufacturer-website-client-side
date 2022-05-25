import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const BuyNowPage = () => {
  const { id } = useParams();
  const [user, loading] = useAuthState(auth);
  // console.log(user);

  const { data: tool, isLoading } = useQuery("buyNow", () =>
    fetch(`http://localhost:5000/tool/${id}`).then(res => res.json())
  );
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onChange",
  });

  // console.log(tool);

  if (isLoading || loading) {
    return <Loading></Loading>;
  }
  const {
    name,
    price,
    uses,
    picture,
    minimumOrderQuantity,
    quantity,
    description,
  } = tool;
  // console.log(tool.name);
  const onSubmit = data => {
    // console.log(name);
    const order = {
      productName:name,
      customerName: data.name,
      email: data.email,
      address: data.address,
      number: data.number,
      orderQuantity: data.quantity,
    };
    fetch("http://localhost:5000/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if (data.result.insertedId) {
          toast.success("Order Placed");
          reset();
        } else {
          toast.error("failed to place order");
        }
      });
  };
  return (
    <div>
      <div class="hero min-h-screen bg-base-200">
        <div class="hero-content flex-col lg:flex-row text-left">
          <img
            src={picture}
            alt=""
            class="max-w-sm md:max-w-md lg:max-w-lg rounded-lg shadow-2xl"
          />
          <div>
            <h1 class="text-3xl font-bold">{name}</h1>
            <p class="pt-5">{uses}</p>
            <p>
              Price : <span className="text-2xl">&#2547;</span> {price}
              &#x0002F;piece
            </p>
            <p>Minimum Order Quantity : {minimumOrderQuantity} PC</p>
            <p>Available Stock : {quantity} PC</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs mt-2">
                <input
                  {...register("quantity", {
                    min: {
                      value: ` ${minimumOrderQuantity}`,
                      message: "Please!!! Provide Minimum Order Quantity",
                    },
                    max: {
                      value: ` ${quantity}`,
                      message: "Not More Than Available Stock",
                    },
                  })}
                  type="number"
                  placeholder="Order Quantity"
                  className="input input-bordered w-full max-w-xs"
                />
                <label className="label p-0">
                  {errors.quantity?.type === "min" && (
                    <span className="label-text-alt text-red-500">
                      {errors.quantity.message}
                    </span>
                  )}
                  {errors.quantity?.type === "max" && (
                    <span className="label-text-alt text-red-500">
                      {errors.quantity.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-xs mt-2">
                <input
                  {...register("name")}
                  type="text"
                  readOnly
                  value={user?.displayName || ""}
                  placeholder="Your Name"
                  class="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full max-w-xs mt-2">
                <input
                  {...register("email")}
                  type="text"
                  readOnly
                  value={user?.email || ""}
                  placeholder="Your Email"
                  class="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full max-w-xs mt-2">
                <input
                  {...register("address")}
                  type="text"
                  placeholder="Your Address"
                  class="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="form-control w-full max-w-xs mt-2">
                <input
                  {...register("number", {
                    minLength: {
                      value: 11,
                      message:
                        "Provide valid Phone Number with minimum 11 characters",
                    },
                    maxLength: {
                      value: 14,
                      message: "Provide valid Phone Number",
                    },
                  })}
                  type="number"
                  placeholder="Your Phone Number"
                  class="input input-bordered w-full max-w-xs"
                />
                <label className="label ">
                  {errors.number?.type === "minLength" && (
                    <span className="label-text-alt text-red-400">
                      {errors.number.message}
                    </span>
                  )}
                  {errors.number?.type === "maxLength" && (
                    <span className="label-text-alt text-red-400">
                      {errors.number.message}
                    </span>
                  )}
                </label>
              </div>

              <input
                type="submit"
                disabled={errors.quantity}
                value="Buy Now"
                className="btn  btn-primary w-full max-w-xs"
              />
            </form>

            <p class="py-2 mt-7">{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyNowPage;
