import React, { useState } from "react";
import "../css/hero-section.css";
import Hero from "../assets/hero.jpg";
import SkeletonHero from "./skeleton-hero"; // Import your skeleton loader component

const HeroSection = () => {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  // Handle video load event
  const handleVideoLoad = () => {
    setIsVideoLoaded(true); // Video is loaded, show the video
  };

  return (
    <section className="hero-section">
      {!isVideoLoaded && <SkeletonHero />}{" "}
      <div className="image-background">
        {/* Show Skeleton when video is loading */}
        <img
          src={Hero}
          preload="auto"
          onLoad={handleVideoLoad} // When video is ready to play, mark it as loaded
        />
        <div className="overlay-content swipe">
          <h1>
            Welcome to <br /> Apple Orchard Resort
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
