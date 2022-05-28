import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../firebase.init";
import Loading from "../Shared/Loading";
import Order from "./Order";

const MyOrders = () => {
  //   const [orders, setOrders] = useState([]);
  const [user, loading] = useAuthState(auth);
  //   console.log(orders);
  const userEmail = user?.email;
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery(["orders", userEmail], () =>
    fetch(`http://localhost:5000/order?email=${userEmail}`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then(res => res.json())
  );

  if (loading || isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2>Total Orders : {orders.length}</h2>
      <div class="overflow-x-auto w-full">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name &amp; Email</th>
              <th>Product Name &amp; Quantity</th>

              <th>Payable Amount</th>
              <th>Payment</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <Order
                key={order._id}
                refetch={refetch}
                order={order}
                
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
