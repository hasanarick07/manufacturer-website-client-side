import React, { useEffect, useState } from "react";

const Review = props => {
  const [check1, setCheck1] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);
  const [check4, setCheck4] = useState(false);
  const [check5, setCheck5] = useState(false);
  console.log(props.rating);
  const { userName, product, message, rating } = props?.rating;

  useEffect(() => {
    if (parseInt(rating) === 1) {
      const checked1 = parseInt(rating) === 1;
      setCheck1(checked1);
    } else if (parseInt(rating) === 2) {
      const checked2 = parseInt(rating) === 2;
      setCheck2(checked2);
    } else if (parseInt(rating) === 3) {
      const checked3 = parseInt(rating) === 3;
      setCheck3(checked3);
    } else if (parseInt(rating) === 4) {
      const checked4 = parseInt(rating) === 4;
      setCheck4(checked4);
    } else if (parseInt(rating) === 5) {
      const checked5 = parseInt(rating) === 5;
      setCheck5(checked5);
    }
  }, [rating]);
  //   console.log(check);
  return (
    <div class="card md:w-md lg:w-lg bg-neutral shadow-xl">
      <div class="card-body">
        <h2 class="card-title">by {userName}</h2>
        <div class="rating">
          <input
            type="radio"
            name="rating-2"
            class="mask mask-star-2 bg-orange-400"
            checked={check1}
          />
          <input
            type="radio"
            name="rating-2"
            class="mask mask-star-2 bg-orange-400"
            checked={check2}
          />
          <input
            type="radio"
            name="rating-2"
            class="mask mask-star-2 bg-orange-400"
            checked={check3}
          />
          <input
            type="radio"
            name="rating-2"
            class="mask mask-star-2 bg-orange-400"
            checked={check4}
          />
          <input
            type="radio"
            name="rating-2"
            class="mask mask-star-2 bg-orange-400"
            checked={check5}
          />
        </div>

        <p>Product Reviewed : {product}</p>
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Review;
