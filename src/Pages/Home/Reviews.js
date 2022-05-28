import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import Review from "./Review";

const Reviews = () => {
  const [ratings, setRatings] = useState([]);
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [check5, setCheck5] = useState(false);

  const { data, isLoading } = useQuery("ratings", () =>
    fetch("https://enigmatic-fortress-05419.herokuapp.com/ratings").then(res =>
      res.json()
    )
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
          <Review
            key={rating._id}
            rating={rating}
            check1={check1}
            check2={check2}
            check3={check3}
            check4={check4}
            check5={check5}
            setCheck1={setCheck1}
            setCheck2={setCheck2}
            setCheck3={setCheck3}
            setCheck4={setCheck4}
            setCheck5={setCheck5}
          />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
