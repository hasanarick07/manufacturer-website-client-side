import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import ManageProduct from "./ManageProduct";

const ManageProducts = () => {
  const {
    data: tools,
    isLoading,
    refetch,
  } = useQuery("manufacturerTools", () =>
    fetch("http://localhost:5000/tools").then(res => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div className="overflow-x-auto">
      <table className="table w-full">
        <thead>
          <tr>
            <th></th>
            <th>Picture</th>
            <th>Name</th>
            <th>Price</th>
            <th>
              Available <br /> Quantity
            </th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tools.map((tool) => (
            <ManageProduct
              tool={tool}
              key={tool._id}
              refetch={refetch}
             
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageProducts;
