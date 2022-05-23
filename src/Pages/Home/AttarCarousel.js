import React from "react";
import { Carousel } from "react-carousel-minimal";

const AttarCarousel = () => {
  const data = [
    {
      image:
        "https://img.freepik.com/free-photo/arabian-oud-attar-perfume-mini-bottles_158388-2347.jpg?w=2000",
    },
    {
      image:
        "https://c1.wallpaperflare.com/preview/315/220/850/attar-perfume-oil-dark.jpg",
    },
    {
      image: "https://i.pinimg.com/originals/f4/e1/15/f4e115f8c15e0f203601e4be77b5ad16.jpg",
    },
    {
      image: "https://m.media-amazon.com/images/I/61PQn5nBg8L.jpg",
    },
    {
      image: "https://khalisafragrance.com/wp-content/uploads/2021/04/3.jpg",
    },
    {
      image:
        "https://ak.picdn.net/shutterstock/videos/1053785768/thumb/1.jpg",
    },
  ];

  return (
    <div>
      <div className="App">
        <div style={{ textAlign: "center" }}>
          <div>
            <Carousel
              data={data}
              time={3000}
              width="100vw"
              height="40vw"
              radius="10px"
              automatic={true}
              dots={true}
              pauseIconColor="white"
              pauseIconSize="70px"
              slideBackgroundColor="darkgrey"
              slideImageFit="cover"
              thumbnails={false}
              thumbnailWidth="100px"
              style={{
                textAlign: "center",
                maxWidth: "100vw",
                maxHeight: "40vw",
                margin: "1px auto",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttarCarousel;
