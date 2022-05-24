import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "./Loading";

const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  //   console.log(user);

  const logout = () => {
    signOut(auth);
  };

  const menu = (
    <>
      <li>
        <Link to="">Home</Link>
      </li>
      <li>
        <Link to="">Tools</Link>
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
              {user && user?.photoURL !== null ? (
                <img src={user?.photoURL} alt="" />
              ) : (
                <label class="btn btn-circle swap swap-rotate">
                  {/* <!-- this hidden checkbox controls the state --> */}
                  <input type="checkbox" />

                  {/* <!-- hamburger icon --> */}
                  <svg
                    class="swap-off fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 512 512"
                  >
                    <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                  </svg>

                  {/* <!-- close icon --> */}
                  <svg
                    class="swap-on fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 512 512"
                  >
                    <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                  </svg>
                </label>
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
            {user && user?.photoURL !== null ? <img src={user?.photoURL} alt="" /> : ""}
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
