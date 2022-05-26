import React, { useEffect } from "react";

const Review = props => {
  console.log(props);
  const { userName, product, message, rating } = props?.rating;
  const {
    check1,
    setCheck1,
    check2,
    setCheck2,
    check3,
    setCheck3,
    check4,
    setCheck4,
    check5,
    setCheck5,
  } = props;

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
  }, [rating, setCheck1, setCheck2, setCheck3, setCheck4, setCheck5]);
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
