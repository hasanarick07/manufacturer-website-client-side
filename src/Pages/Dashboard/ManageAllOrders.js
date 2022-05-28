import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import ManageOrder from "./ManageOrder";

const ManageAllOrders = () => {
  const { data: manageOrders, isLoading, refetch, } = useQuery("manageOrders", () =>
    fetch("http://localhost:5000/orders", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then(res => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return <div>
  <h2>Total Orders : {manageOrders.length}</h2>
  <div class="overflow-x-auto w-full">
    <table class="table w-full">
      <thead>
        <tr>
          <th></th>
          <th>Name &amp; Email</th>
          <th>Product Name <br /> &amp;  Quantity </th>
          <th>Payable Amount </th>
          <th>Favorite </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {manageOrders.map((order, index) => (
          <ManageOrder
            key={order._id}
            refetch={refetch}
            order={order}
            index={index}
          />
        ))}
      </tbody>
    </table>
  </div>
</div>;
};

export default ManageAllOrders;
