import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import UpdateProfile from "./UpdateProfile";

const MyProfile = () => {
  const [user, loading] = useAuthState(auth);
  const userEmail = user?.email;
  const { data, isLoading, refetch } = useQuery("users", () =>
    fetch(`http://localhost:5000/user/${userEmail}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then(res => res.json())
  );
  if (isLoading || loading) {
    return <Loading></Loading>;
  }
  const { userName, email, number, address } = data;
  return (
    <div>
      <div class="hero max-h-screen bg-base-200">
        <div class="hero-content text-center">
          <div class="lg-w-lg md-w-md sm-w-sm">
            <h1 class="text-5xl font-bold">{userName}</h1>
            <p class="mt-2">{email}</p>
            <p class="mt-2">{address}</p>
            <p class="mt-2">{number}</p>
            <label
              htmlFor="my-modal-6"
              class="btn modal-button btn-primary mt-2"
            >
              Update Profile
            </label>
            {
              <UpdateProfile
                key={data._id}
                refetch={refetch}
                data={data}
              ></UpdateProfile>
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
