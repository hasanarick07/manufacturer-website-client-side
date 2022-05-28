import React, { useState } from "react";

const ManageOrder = ({ order,  refetch }) => {
  const [shipped,setShipped]=useState(true)
  console.log(shipped);
  const {
    customerName,
    email,
    orderQuantity,
    productName,
    payableAmount,
    paid,
  } = order;
  const pName = productName.slice(0, 25);
 
  return (
    <tr>
      <td></td>
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
      <td>
        <span class="badge badge-outline  badge-lg">
          Payable Amount: {payableAmount}
        </span>
      </td>
      <td> {(paid && shipped) && <span className="text-success ">Pending</span>}</td>
      <th>
        <label
          onClick={() => setShipped(false)}
          for="delete"
          class="btn modal-button btn-xs  btn-secondary"
        >
          shipped
        </label>
      </th>
    </tr>
  );
};

export default ManageOrder;
