import React from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const AddProduct = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();
  const imageStorageKey = "b16b0c020cf429ae6bf3f8bfc6733ee8";

  const onSubmit = async data => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then(res => res.json())
      .then(result => {
        if (result.success) {
          const img = result.data.url;
          const tool = {
            name: data.name,
            uses: data.uses,
            quantity: data.quantity,
            minimumOrderQuantity: data.minimumOrderQuantity,
            price: data.price,
            description: data.description,
            picture: img,
          };
        //   console.log(tool);
          fetch("http://localhost:5000/tools", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(tool),
          })
            .then(res => res.json())
            .then(data => {
            //   console.log(data.result.insertedId);
              if (data.result.insertedId) {
                toast.success("tool Added successfully");
                reset();
              } else {
                toast.error("failed to add tool");
              }
            });
        }
      });
    // console.log(data);
  };
  return (
    <div>
      <h2 className="text-3xl">Add a New Tools</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs mt-2">
          <input
            {...register("name", { required: true })}
            type="text"
            placeholder="Tools name"
            class="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs mt-2">
          <input
            {...register("uses", { required: true })}
            type="text"
            placeholder="Tools uses"
            class="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs mt-2">
          <input
            {...register("quantity", { required: true })}
            type="number"
            placeholder="Available Stock"
            class="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs mt-2">
          <input
            {...register("minimumOrderQuantity", { required: true })}
            type="number"
            placeholder="Minimum Order Quantity"
            class="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs mt-2">
          <input
            {...register("price", { required: true })}
            type="number"
            placeholder="Price per tools"
            class="input input-bordered w-full max-w-xs"
          />
        </div>
        <div className="form-control w-full max-w-xs mt-2">
          <input
            {...register("description", { required: true })}
            type="text"
            placeholder="Tools Description"
            class="input input-bordered w-full max-w-xs"
          />
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text ">Photo</span>
          </label>
          <input
            type="file"
            className="input input-bordered w-full max-w-xs py-1.5"
            {...register("image")}
          />
          <label className="label p-0">
            {errors.name?.type === "required" && (
              <span className="label-text-alt text-red-500">
                {errors.name.message}
              </span>
            )}
          </label>
        </div>
        <input
          className="btn  btn-primary w-full max-w-xs mt-5"
          type="submit"
          value="Add"
        />
      </form>
    </div>
  );
};

export default AddProduct;
