import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.init";
import useAdmin from "../Hooks/useAdmin";
import Loading from "../Shared/Loading";

const Dashboard = () => {
  const [user, loading] = useAuthState(auth);
  const [admin] = useAdmin(user);
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-accent to-primary  lg:mx-96">
        Welcome To Dashboard
      </span>
      <label
        htmlFor="my-drawer-2"
        className="btn btn-primary drawer-button lg:hidden ml-5"
      >
        Open
      </label>
      <div className="drawer drawer-mobile ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex  items-start justify-center p-7 w-full sm-w-sm md-w-md lg-w-lg">
          <Outlet />
          {/* <!-- Page content here --> */}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-42 bg-ghost ">
            {/* <!-- Sidebar content here --> */}
            <li>
              <Link to="/dashboard">My Profile</Link>
            </li>
            {(user && !admin) && (
              <>
                <li>
                  <Link to="/dashboard/review">Add A Review</Link>
                </li>
                <li>
                  <Link to="/dashboard/myOrder">My orders</Link>
                </li>
              </>
            )}
            {admin && (
              <>
                <li>
                  <Link to="/dashboard/manageAllOrders">Manage All Orders</Link>
                </li>
                <li>
                  <Link to="/dashboard/addProduct">Add A Product</Link>
                </li>
                <li>
                  <Link to="/dashboard/makeAdmin">Make Admin</Link>
                </li>
                <li>
                  <Link to="/dashboard/manageProducts">Manage Products</Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
