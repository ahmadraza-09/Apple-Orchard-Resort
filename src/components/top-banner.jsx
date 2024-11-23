import React from "react";
import "../css/navbar.css";

const TopBanner = () => {
  return (
    <div className="top-banner">
      <div className="top-banner-left">
        <div className="phone">
          <i class="fa-solid fa-phone"></i>
          <a
            href="tel:+919958140101 "
            target="_blank"
            aria-label="call us for hotel booking"
          >
            +91 9958140101 
          </a>
        </div>
        <div className="phone">
          <i class="fa-solid fa-phone"></i>
          <a
            href="tel:+919971834101"
            target="_blank"
            aria-label="call us for hotel booking"
          >
            +91 9971834101 
          </a>
        </div>
        <div className="email">
          <i class="fa-solid fa-envelope"></i>
          <a
            href="mailto:booking@rchronline.com"
            target="_blank"
            aria-label="mail us for hotel booking"
          >
            booking@rchronline.com
          </a>
        </div>
      </div>

      <div className="top-banner-right">
        <a
          href="https://www.instagram.com/apple_orchard_resort_dhanaulti/"
          target="_blank"
          aria-label="follow us on instagram"
        >
          <i class="fa-brands fa-instagram"></i>
        </a>
        <a
          href="https://www.facebook.com/appleorchardresortdhanaulti"
          target="_blank"
          aria-label="follow us on facebook"
        >
          <i class="fa-brands fa-facebook"></i>
        </a>
        <a
          href="https://www.youtube.com/@royalcollectionhotel"
          target="_blank"
          aria-label="follow us on youtube"
        >
          <i class="fa-brands fa-youtube"></i>
        </a>
      </div>
    </div>
  );
};

export default TopBanner;
