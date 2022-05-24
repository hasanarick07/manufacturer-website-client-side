import React from "react";
import { Carousel } from "react-carousel-minimal";

const SandpaperCarousel = () => {
  const data = [
    {
      image:
        "https://target.scene7.com/is/image/Target/GUEST_09a0634c-27fa-4a8c-a0ee-9b5f6e1f2ee1?wid=488&hei=488&fmt=pjpeg",
    },
    {
      image:
        "https://upload.wikimedia.org/wikipedia/commons/9/90/Schleifpapier_verschiedene_Sorten.jpg",
    },
    {
      image:
        "https://www.readersdigest.ca/wp-content/uploads/2018/12/new-uses-for-sandpaper.jpg",
    },
    {
      image:
        "https://trojanfibreglass.com.au/wp-content/uploads/2019/11/IMG_0026-scaled.jpg",
    },
    {
      image:
        "https://www.ubuy.hu/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNjFtZU1WWXl5SUwuX0FDX1NMMTIwMF8uanBn.jpg",
    },
    {
      image:
        "https://www.thespruce.com/thmb/geqLSngBUds1urw_SEau0GeMio4=/1333x1000/smart/filters:no_upscale()/choose-the-right-sandpaper-grit-1822681_hero-70f5c55bacdc47a4b8e1cf8fa694b4a7.jpg",
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

export default SandpaperCarousel;
