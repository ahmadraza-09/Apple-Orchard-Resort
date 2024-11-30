import React, { useState } from "react";
import "../css/guest-reviews.css";

const LazyLoadYouTubeEmbed = ({ videoId }) => {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  const handleLoadIframe = () => {
    setIsIframeLoaded(true);
  };

  return (
    <div className="guest-reviews-card">
      {isIframeLoaded ? (
        <iframe
          width="100%"
          height="100%"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <div
          className="youtube-placeholder"
          onClick={handleLoadIframe}
          style={{
            width: "100%",
            height: "100%",
            backgroundImage: `url(https://img.youtube.com/vi/${videoId}/hqdefault.jpg)`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            cursor: "pointer",
          }}
        >
          <div className="play-button-overlay">▶</div>
        </div>
      )}
    </div>
  );
};

const GuestReviews = () => {
  const videos = ["A7OMDlTpZB8", "s6QgRU0gmFA", "TIFRXwnTHXA", "BVGVW6vrfAI", "XaUiP2ZX8c8", "t4YQcWaNoLo", "s5YA92_EfIA", "wu_rMvqdol4", "iUu5q2BQXqg", "wZVhJJYYHe4", "yJSJ-zMlTHs", "1Q0jQ_vAJuU", "vcrDb89zYWg","t4YQcWaNoLo"];
  return (
    <section className="guest-reviews-section">
      <h1>Our Guests Reviews</h1>
      <br />
      <div className="guest-reviews-container">
        {videos.map((videoId) => (
          <LazyLoadYouTubeEmbed key={videoId} videoId={videoId} />
        ))}
      </div>
    </section>
  );
};

export default GuestReviews;
