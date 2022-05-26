import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import Review from "./Review";

const Reviews = () => {
  const [ratings, setRatings] = useState([]);

  const { data, isLoading } = useQuery("ratings", () =>
    fetch("http://localhost:5000/ratings").then(res => res.json())
  );
  useEffect(() => {
    const newRatings = data?.reverse();
    // console.log(newTool);
    setRatings(newRatings);
  }, [data]);
  if (isLoading) {
    return <Loading></Loading>;
  }
  return (
    <div>
      <h1 className="font-bold text-4xl my-5">Reviews</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 p-2">
        {ratings?.slice(0, 6)?.map(rating => (
          <Review key={rating._id} rating={rating} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
