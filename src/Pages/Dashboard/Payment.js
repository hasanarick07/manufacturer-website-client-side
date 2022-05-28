import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L4NClJ3I6DCtvgg3Ofdlxa5kV89CEZ2Rg02BfCvTZc5lb6ttcv9zqDkgw70IijYPAkAfO5mtnDBcw2RDegG2XjK00HBgs0hsf"
);

const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/order/${id}`;
  const { data, isLoading } = useQuery(["payment", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then(res => res.json())
  );
  if (isLoading) {
    return <Loading></Loading>;
  }
  console.log(data);
  return (
    <div>
      <div class="card w-96 bg-neutral ">
        <div class="card-body">
          <h1>User : {data?.customerName} </h1>
          <h2 class="card-title">Pay For : {data?.productName}</h2>
          <p>Total Payment : {data?.payableAmount} </p>
        </div>
      </div>
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-neutral">
        <div class="card-body"></div>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
