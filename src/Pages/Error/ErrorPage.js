import React from "react";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  const goBackButton = () => {
    navigate("/");
  };
  return (
    <div>
      <div className="flex items-center flex-col justify-center lg:flex-row py-28 px-6 md:px-24 md:py-20 lg:py-32 gap-16 lg:gap-28">
        <div className="w-full lg:w-1/2">
          <img
            className="rounded-xl"
            src="https://cdn.dribbble.com/users/1022481/screenshots/3018253/404-snow_still_2x.gif?compress=1&resize=400x300&vertical=top"
            alt=""
          />
        </div>
        <div className="w-full lg:w-1/2">
          <h2 className="py-4 text-3xl lg:text-4xl font-extrabold text-gray-100">
            Looks like you've found the doorway to the great nothing
          </h2>
          <h4 className="py-4 text-base text-gray-100">
            The content you’re looking for doesn’t exist. Either it was removed,
            or you mistyped the link.
          </h4>
          <h4 className="py-2 text-base text-gray-100">
            Sorry about that! Please visit our homepage to get where you need to
            go.
          </h4>
          <button
            onClick={goBackButton}
            className="w-full lg:w-auto my-4 border text-lg hover:font-bold rounded-full px-1 sm:px-16 py-5 bg-indigo-600 text-gray-100 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50"
          >
            Go back to Homepage
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
