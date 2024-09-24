import React, { useEffect } from "react";
import Product from "./Product";
import { Box, styled } from "@mui/material";

// Styled components for carousel
const CarouselContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  height: "auto", // Change this line
}));

const CarouselWrapper = styled(Box)(({ activeIndex, length }) => ({
  display: "flex",
  transition: "transform 0.5s ease-in-out",
  transform: `translateX(-${activeIndex * (100 / length)}%)`,
  width: `${length * 100}%`,
}));

const CarouselItem = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "600px", // Change this line
}));

const CarouselImage = styled("img")({
  width: "100%",
  height: "auto", // Change this line
  objectFit: "contain", // Ensure the entire image fits within the container
});

const Home = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const images = [
    "/assets/images/home/img1.jpg",
    "/assets/images/home/img2.jpg",
    "/assets/images/home/img3.jpg",
    "/assets/images/home/img4.jpg",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, [images.length]);

  return (
    <div>
      <CarouselContainer>
        <CarouselWrapper activeIndex={activeIndex} length={images.length}>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <CarouselImage src={image} alt={`Slide ${index + 1}`} />
            </CarouselItem>
          ))}
        </CarouselWrapper>
      </CarouselContainer>
      <Product />
    </div>
  );
};

export default Home;
