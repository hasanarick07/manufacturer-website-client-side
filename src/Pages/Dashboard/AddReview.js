import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";

const AddReview = () => {
  const [user, loading] = useAuthState(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    mode: "onChange",
  });

  if (loading) {
    return <Loading></Loading>;
  }
  const onSubmit = data => {
    // console.log(name);

    const userRating = {
      rating: data.rating,
      userName: data.name,
      email: data.email,
      product: data.product,
      message: data.message,
    };
    const email = data.email;
    console.log(userRating, email);
    fetch("http://localhost:5000/rating", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userRating),
    })
      .then(res => res.json())
      .then(data => {
        // console.log(data);
        if (data.result.insertedId) {
          toast.success("Rating Received");

          reset();
        } else {
          toast.error("failed to Received Rating");
        }
      });
  };
  return (
    <div className="sm-w-sm md-w-md lg-w-lg basis-1/2">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full sm-w-sm md-w-md lg-w-lg mt-2">
          <input
            {...register("rating", {
              min: {
                value: 1,
                message: "Please!!! Provide Minimum Order Quantity",
              },
              max: {
                value: 5,
                message: "Not More Than Available Stock",
              },
              required: true,
            })}
            type="number"
            placeholder="Rate 1 to 5"
            className="input input-bordered w-full sm-w-sm md-w-md lg-w-lg"
          />
          <label className="label p-0">
            {errors.rating?.type === "min" && (
              <span className="label-text-alt text-red-500">
                {errors.rating.message}
              </span>
            )}
            {errors.rating?.type === "max" && (
              <span className="label-text-alt text-red-500">
                {errors.rating.message}
              </span>
            )}
          </label>
        </div>
        <div className="form-control w-full sm-w-sm md-w-md lg-w-lg mt-2">
          <input
            {...register("name")}
            type="text"
            readOnly
            value={user?.displayName || ""}
            placeholder="Your Name"
            class="input input-bordered w-full sm-w-sm md-w-md lg-w-lg"
          />
        </div>
        <div className="form-control w-full sm-w-sm md-w-md lg-w-lg mt-2">
          <input
            {...register("email")}
            type="text"
            readOnly
            value={user?.email || ""}
            placeholder="Your Email"
            class="input input-bordered w-full sm-w-sm md-w-md lg-w-lg"
          />
        </div>
        <div className="form-control w-full sm-w-sm md-w-md lg-w-lg mt-2">
          <input
            {...register("product", { required: true })}
            type="text"
            placeholder="Product Name"
            class="input input-bordered w-full sm-w-sm md-w-md lg-w-lg"
          />
        </div>
        <div className="form-control w-full sm-w-sm md-w-md lg-w-lg my-2">
          <textarea
            class="textarea textarea-bordered w-full sm-w-sm md-w-md lg-w-lg"
            {...register("message", { required: true })}
            type="text"
            placeholder="Your Message"
          ></textarea>
        </div>

        <input
          type="submit"
          disabled={errors.rating || ""}
          value="submit"
          className="btn  btn-primary w-full sm-w-sm md-w-md lg-w-lg"
        />
      </form>
    </div>
  );
};

export default AddReview;
