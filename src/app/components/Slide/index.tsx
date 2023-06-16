import { slide } from "./images";
import {
  Box,
  CircleController,
  CircleControllerGroup,
  Image,
  ImageData,
} from "./styles";
import { useEffect, useState } from "react";

type Slide = {
  url: string;
  title: string;
  year: string;
  author: string;
  country: string;
};

export function Slide() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentIndex + 1 >= slide.length) setCurrentIndex(0);
      else setCurrentIndex(currentIndex + 1);
    }, 10000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  return (
    <Box>
      <ImageData>
        <h5>{slide[currentIndex].title}</h5>
        <h6>
          {slide[currentIndex].author}, {slide[currentIndex].country},{" "}
          {slide[currentIndex].year}
        </h6>
      </ImageData>
      {slide.map((s, i) => (
        <Image
          className={i === currentIndex ? "active" : "inactive"}
          url={s.url.src}
          key={i}
        />
      ))}

      <div className="black-veil" />
      <CircleControllerGroup>
        {slide.map((s, i) => (
          <CircleController
            onClick={() => setCurrentIndex(i)}
            isCurrent={i === currentIndex}
            key={i}
          />
        ))}
      </CircleControllerGroup>
    </Box>
  );
}
