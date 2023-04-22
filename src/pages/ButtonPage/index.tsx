import "./ButtonPage.css";
import moon_spots from "./images/Spots.png";
import rays from "./images/Rays.png";
import stars_and_skies from "./images/stars_and_skies.png";
import { useState } from "react";

const ButtonPage = () => {
  const [day, setDay] = useState(true);

  return (
    <>
      <main className="ButtonPage">
        <h1>
          Nothing Special here. Just an <span>excessively fancy</span> and big
          button.
        </h1>
        <h2>Click on the sun or moon to toggle button.</h2>
        <div className={day ? "sun_container" : "moon_container"}>
          <img src={rays} alt="" className={day ? "sun_rays" : "night_rays"} />
          <img
            src={stars_and_skies}
            alt=""
            className={day ? "sun_sky_clouds" : "night_sky_stars"}
          />
          <div className={day ? "sun" : "moon"} onClick={() => setDay(!day)}>
            <img src={moon_spots} alt="" />
          </div>
        </div>
      </main>
    </>
  );
};

export default ButtonPage;
