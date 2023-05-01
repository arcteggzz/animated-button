import "./CarouselPage.css";
import Carousel from "./Components/Carousel";

const CarouselPage = () => {
  return (
    <>
      <main className="CarouselPage">
        <h2>Fancy</h2>
        {/* you need this div container to set the width of the carousel */}
        <div className="Carousel_owner">
          <Carousel />
        </div>
      </main>
    </>
  );
};

export default CarouselPage;
