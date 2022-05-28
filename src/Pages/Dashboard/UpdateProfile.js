import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const UpdateProfile = ({ data, refetch }) => {
  const { email, userName } = data;
  // console.log(data);
  const {
    register,
    formState: { errors },
    handleSubmit,

    reset,
  } = useForm({
    mode: "onChange",
  });
  const onSubmit = data => {
    const currentUser = {
      address: data.address,
      number: data.number,
    };
    const email = data.email;
    console.log(currentUser, email);
    fetch(`http://localhost:5000/user/${email}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(currentUser),
    })
      .then(res => res.json())
      .then(data => {
        toast.success("User updated Successfully");
        reset();
        refetch();
        // console.log(data);
      });
  };
  return (
    <div>
      <input type="checkbox" id="my-modal-6" class="modal-toggle" />
      <div class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <label
            htmlFor="my-modal-6"
            className="btn  btn-sm btn-circle absolute right-2 top-2 "
          >
            ✕
          </label>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xs mt-2 mx-auto">
              <input
                {...register("name", { required: true })}
                type="text"
                readOnly
                value={userName || ""}
                placeholder="Your Name"
                class="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs mt-2 mx-auto">
              <input
                {...register("email")}
                type="text"
                readOnly
                value={email || ""}
                placeholder="Your Email"
                class="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs mt-2 mx-auto">
              <input
                {...register("address", { required: true })}
                type="text"
                placeholder="Your Address"
                class="input input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control w-full max-w-xs mt-2 mx-auto">
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
                  required: true,
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
              value="Buy Now"
              className="btn btn-primary w-full max-w-xs mr-auto"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
