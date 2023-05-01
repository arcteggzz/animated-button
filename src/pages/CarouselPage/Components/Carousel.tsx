/* eslint-disable @typescript-eslint/no-explicit-any */
import "./Carousel.css";
import test from "../images/test01.png";
import test1 from "../images/military_flares-wallpaper-1920x1080.jpg";
import test2 from "../images/vintage_car_hd-wallpaper-1920x1080.jpg";
import test3 from "../images/sniper_rifle_2-wallpaper-1920x1080.jpg";
import { useEffect, useRef, useState } from "react";

const Carousel = () => {
  const images = [test, test1, test2, test3];
  const [width, setWidth] = useState<number>(0);
  const [distance, setDistance] = useState<number>(0);
  const [counter, setCounter] = useState<number>(0);
  const imageRef = useRef<HTMLImageElement>(null);
  const timerRef: React.MutableRefObject<any> =
    useRef<React.MutableRefObject<any> | null>(null);

  // const onImgLoad = ({ target: img }: { target: any }) => {
  //   const { offsetWidth } = img;
  //   setSize(offsetWidth);
  // };

  function handleImageLoad() {
    if (imageRef.current) {
      setWidth(imageRef.current.width);
    }
  }

  const goToPrev = () => {
    const isFirstSlide = counter === 0;
    const newIndex = isFirstSlide ? images.length - 1 : counter - 1;
    setCounter(newIndex);
    setDistance(width * newIndex);
  };

  const goToNext = () => {
    console.log("fired");
    const isLastSlide = counter === images.length - 1;
    const newIndex = isLastSlide ? 0 : counter + 1;
    setCounter(newIndex);
    setDistance(width * newIndex);
  };

  const carousel_slide_screen = {
    display: "flex",
    width: "100%",
    transition: "transform ease-in-out 0.4s",
    transform: `translateX(-${distance}px)`,
  };

  useEffect(() => {
    if (timerRef.current) clearTimeout(timerRef.current);
    timerRef.current = setTimeout(() => {
      goToNext();
    }, 2000);

    return () => clearTimeout(timerRef.current);
  });

  return (
    <>
      <main className="Carousel">
        <div className="Carousel_Container">
          <div className="Carousel_Slide">
            <div className="Carousel_Slide_papi" style={carousel_slide_screen}>
              <img src={images[0]} alt="" />
              <img
                src={images[1]}
                alt=""
                ref={imageRef}
                onLoad={handleImageLoad}
              />
              <img src={images[2]} alt="" />
              <img src={images[3]} alt="" />
            </div>
          </div>
        </div>
        <div>
          <button onClick={() => goToPrev()}>Prev</button>
          <button onClick={() => goToNext()}>Next</button>
        </div>
      </main>
    </>
  );
};

export default Carousel;
