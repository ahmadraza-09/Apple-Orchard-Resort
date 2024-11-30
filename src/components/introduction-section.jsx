import React from "react";
import "../css/introduction-section.css";
import IntroductionImg from "../assets/hero.jpg";

const IntroductionSection = () => {
  return (
    <section className="introduction-section">
      <div className="introduction-section-right swipe">
        <h1 className="after">
          Welcome To <br />
          <h1>Apple Orchard Resort</h1>
        </h1>
        <p>
          Apple Orchard Resort is situated in the laps of beautiful Himalayas and placed amidst an apple orchard with stunning vistas of jungle and mountains. Teeming with wildlife and bathed in clouds and bright sunshine, the resort has tastefully decorated 20 Guest Rooms (Family Suite, Super Deluxe, Deluxe) and 4 Luxury Swiss Tent Houses, all with breathtaking views and luxurious interiors. Let the crisp air and fresh spring water rejuvenate your health and sprits.
          <br />
          <br />
          Come and join us in our private valley, away from the crowds, noise and humdrum of civilization and relax in the abode of nature. All the guest rooms have wooden floors, attached bathrooms, locally made quilts and blankets to keep you cozy and warm during cool nights.Experience the clean air for a restful sleep.
        </p>
      </div>
      <div className="introduction-section-left swipe">
        <img
          src={IntroductionImg}
          alt="The Pearl 21 Villa Image"
          loading="eager"
          width="100%"
          height="auto"
        />
      </div>
    </section>
  );
};

export default IntroductionSection;
