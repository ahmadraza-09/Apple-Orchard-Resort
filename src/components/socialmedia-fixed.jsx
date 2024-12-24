// SocialMediaFixed.js
import React from "react";
import "../css/socialmedia-fixed.css";
import Call from "../assets/icons/phone-call.png";
import Whatsapp from "../assets/icons/whatsapp.png";
import Facebook from "../assets/icons/facebook.webp";
import Instagram from "../assets/icons/instagram.webp";
import Youtube from "../assets/icons/youtube.webp";
import Map from "../assets/icons/map.webp";

const SocialMediaFixed = () => {
  return (
    <>
      {/* Left side icons */}
      <div className="social-media-fixed-section-left">
        <div className="social-media-icons">
          {/* <a
            href="https://www.instagram.com/hotel_aroma_nainital/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Instagram} alt="Instagram" />
          </a>
          <a
            href="https://www.facebook.com/aromanainital"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Facebook} alt="Facebook" />
          </a>
          <a
            href="https://www.youtube.com/watch?v=NGktwgDeWdM"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Youtube} alt="YouTube" />
          </a> */}
          {/* <a href="tel:+919958140101" target="_blank" rel="noopener noreferrer">
            <img src={Call} alt="Call" />
          </a> */}
          <a
            href="https://api.whatsapp.com/send?phone=919958140101&text=Hello!%20I%20have%20a%20query%20regarding%20Apple%20Orchard%20Resort%20Dhanaulti."
            target="_blank"
          >
            <img src={Whatsapp} alt="Call" />
          </a>
        </div>
      </div>

      {/* Right side icons */}
      <div className="social-media-fixed-section-right">
        <div className="social-media-icons">
          <a href="tel:+919958140101" target="_blank" rel="noopener noreferrer">
            <img src={Call} alt="Call" />
          </a>
          
        </div>
      </div>
    </>
  );
};

export default SocialMediaFixed;
