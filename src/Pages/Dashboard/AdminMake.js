import React from "react";
import toast from "react-hot-toast";

const AdminMake = ({ user, refetch }) => {
  console.log(user);
  const { userName, email, role } = user;
  const makeAdmin = () => {
    fetch(`http://localhost:5000/user/admin/${email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success(`Successfully made an admin`);
        }
      });
  };
  return (
    <tr>
      <th></th>
      <td>{userName}</td>
      <td>{email}</td>
      <td>
        {role !== "admin" && (
          <div onClick={makeAdmin} className="btn btn-xs">
            Make Admin
          </div>
        )}
      </td>
      <td>
        <div className="btn btn-xs">Remove User</div>
      </td>
    </tr>
  );
};

export default AdminMake;
