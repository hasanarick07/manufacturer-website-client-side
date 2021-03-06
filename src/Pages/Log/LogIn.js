import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logoAtor from "../../assets/images/LogAtor.jpg";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import useToken from "../Hooks/useToken";

const LogIn = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const onSubmit = data => {
    signInWithEmailAndPassword(data.email, data.password);
    console.log(data.email);
  };

  const [token] = useToken(user || googleUser);

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [from, navigate, token]);

  let logInError;

  if (loading || googleLoading) {
    return <Loading></Loading>;
  }

  if (error || googleError) {
    logInError = (
      <p className="text-red-500">
        <small>{error?.message || googleUser?.message}</small>
      </p>
    );
  }
  return (
    <div>
      <div class="hero min-h-screen bg-base-200 ">
        <div class="hero-content flex-col lg:flex-row">
          <div>
            <img className="rounded-md" src={logoAtor} alt="" />
          </div>
          <div class="flex flex-col w-full border-opacity-100 items-center">
            <button
              onClick={() => signInWithGoogle()}
              className="btn  btn-primary hover:text-white w-full max-w-xs"
            >
              Continue With Google
            </button>
            <div class="divider">OR</div>
            <div class="card w-full max-w-sm shadow-xl bg-base-100">
              <div class="card-body">
                <h1 class="text-5xl font-bold">Login now!</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="form-control w-full max-w-xs">
                    <label class="label">
                      <span class="label-text">Email</span>
                    </label>
                    <input
                      {...register("email", {
                        pattern: {
                          value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                          message: "Email is Required", // JS only: <p>error message</p> TS only support string
                        },
                        required: {
                          value: true,
                          message: "Provide a valid Email, Please!!!",
                        },
                      })}
                      type="text"
                      placeholder="email"
                      class="input input-bordered w-full max-w-xs"
                    />
                    <label className="label ">
                      {errors.email?.type === "required" && (
                        <span className="label-text-alt text-red-400">
                          {errors.email.message}
                        </span>
                      )}
                      {errors.email?.type === "pattern" && (
                        <span className="label-text-alt text-red-400">
                          {errors.email.message}
                        </span>
                      )}
                    </label>
                  </div>
                  <div className="form-control w-full max-w-xs">
                    <label class="label">
                      <span class="label-text">Password</span>
                    </label>
                    <input
                      type="text"
                      placeholder="password"
                      class="input input-bordered"
                      {...register("password", {
                        required: {
                          value: true,
                          message: "Password is Required",
                        },
                        minLength: {
                          value: 6,
                          message: "Must be 6 characters or longer",
                        },
                      })}
                    />
                    <label className="label">
                      {errors.password?.type === "required" && (
                        <span className="label-text-alt text-red-400">
                          {errors.password.message}
                        </span>
                      )}
                      {errors.password?.type === "minLength" && (
                        <span className="label-text-alt text-red-400">
                          {errors.password.message}
                        </span>
                      )}
                    </label>
                  </div>
                  {logInError}
                  <input
                    type="submit"
                    value="Login"
                    className="btn btn-primary btn-outline w-full max-w-xs"
                  />
                </form>
                <p>
                  <small className="ml-2">
                    New to Attar ?
                    <Link className="text-primary mr-2" to="/register">
                      Create New Account
                    </Link>
                  </small>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
