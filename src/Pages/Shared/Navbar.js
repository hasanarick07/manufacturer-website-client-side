import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "./Loading";
import userIcon from "../../assets/images/User.svg";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  console.log(user?.email);

  const logout = () => {
    signOut(auth);
  };

  const menu = (
    <>
      <li>
        <Link to="">Home</Link>
      </li>
      <li>
        <Link to="">Product</Link>
      </li>
      <li>
        <Link to="">Blogs</Link>
      </li>
      <li>
        <Link to="">My Portfolio</Link>
      </li>
      <li>
        {user ? (
          <button
            className=" btn-ghost  tooltip tooltip-right tooltip-accent  "
            onClick={logout}
            data-tip={user?.email}
          >
            Log Out
          </button>
        ) : (
          <Link to="/login">Log In</Link>
        )}
      </li>
    </>
  );
  if (loading) {
    return <Loading></Loading>;
  }
  if (error) {
  }
  return (
    <div class="navbar bg-base-100">
      <div class="navbar-start">
        <div class="dropdown">
          <div
            tabIndex="0"
            class="avatar md:hidden tooltip tooltip-right"
            data-tip={user?.email}
          >
            <div class="w-16 tooltip rounded-full">
              {user ? (
                <img src={user?.photoURL} alt="" />
              ) : (
                <img src={userIcon} alt="" />
              )}
            </div>
          </div>
          <ul
            tabIndex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {menu}
          </ul>
        </div>
        <Link to="" class="btn btn-ghost normal-case text-xl">
          Attar
        </Link>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal p-0">{menu}</ul>
      </div>
      <div class="navbar-end ">
        <div
          tabIndex="0"
          class="avatar md:block hidden tooltip tooltip-left"
          data-tip={user?.email}
        >
          <div class="w-12 rounded-full ">
          {user ? (
                <img src={user?.photoURL} alt="" />
              ) : (
               ''
              )}
          </div>
        </div>
        <Link to="" class="btn md:hidden">
          Get started
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
