import React from "react";
import toast from "react-hot-toast";

const ManageOrder = ({ order, index, refetch }) => {
  // console.log(order);
  const { customerName, email, orderQuantity, productName, _id, payableAmount } = order;
  const pName = productName.slice(0, 25);
  const handleManageOrderDelete = id => {
    const url = `http://localhost:5000/order/${id}`;
    console.log(url);
    fetch(`http://localhost:5000/order/${id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then(res => res.json())
      .then(result => {
        console.log(result);
        if (result.deletedCount) {
          toast.success(`Order :${productName} is Deleted`);
          refetch();
        }
      });
  };
  return (
    <tr>
      <td>{index + 1}</td>
      <td>
        <div class="flex items-center space-x-3">
          <div>
            <div class="font-bold">{customerName}</div>
            <div class="text-sm opacity-50">{email}</div>
          </div>
        </div>
      </td>
      <td>
        {pName}
        <br />
        <span class="badge badge-ghost badge-sm">
          Order Quantity : {orderQuantity}
        </span>
      </td>
      <td><span class="badge badge-outline  badge-lg">
      Payable Amount: {payableAmount}
        </span></td>
      <td>Purple</td>
      <th>
        <label for="delete" class="btn modal-button btn-xs  btn-secondary">
          delete
        </label>
      </th>
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
                  onClick={() => handleManageOrderDelete(_id)}
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

export default ManageOrder;
