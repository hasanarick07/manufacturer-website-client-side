import React from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import AdminMake from "./AdminMake";

const MakeAdmin = () => {
  const { data, isLoading, refetch } = useQuery("makeAdmin", () =>
    fetch(`http://localhost:5000/users`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then(res => res.json())
  );
  //   console.log(data);

  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Admin</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => (
              <AdminMake user={user} refetch={refetch} index={index} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MakeAdmin;
