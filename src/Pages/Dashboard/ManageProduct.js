import React from "react";
import toast from "react-hot-toast";

const ManageProduct = ({ index, tool, refetch }) => {
  const { name, price, picture, quantity, _id } = tool;
  const handleManageProductDelete = id => {
    fetch(`http://localhost:5000/tools/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
        if (result.deletedCount) {
          toast.success(`Tool : ${name} is Deleted`);
          refetch();
        }
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>
        <img className="lg:max-w-xs max-h-24" src={picture} alt="" />
      </td>
      <td>{name}</td>
      <td>{price}</td>
      <td>{quantity}</td>

      <td>
      <label for="delete" class="btn modal-button btn-xs btn-secondary">
          delete
        </label>
      </td>
      {
        <div>
          <input type="checkbox" id="delete" class="modal-toggle" />
          <div class="modal modal-bottom sm:modal-middle">
            <div class="modal-box">
              <label
                htmlFor="delete"
                className="btn  btn-sm btn-circle absolute right-2 top-2 "
              >
                ✕
              </label>
              <h3 class="font-bold text-lg">
                You want to Delete Your order.
                <br />
                Are You Sure ?
              </h3>

              <div class="modal-action">
                <label
                  for="delete"
                  onClick={() => handleManageProductDelete(_id)}
                  class="btn btn-error"
                >
                  Yes
                </label>
              </div>
            </div>
          </div>
        </div>
      }
    </tr>
  );
};

export default ManageProduct;
