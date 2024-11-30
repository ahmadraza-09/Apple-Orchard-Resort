import React from "react";
import "../css/room-card.css";
import { useNavigate } from "react-router-dom";

const RoomCard = ({ image, title, description, price }) => {
  const navigate = useNavigate();

  const formatTitleForUrl = (title) => {
    return title.toLowerCase().replace(/ /g, "-");
  };

  return (
    <div className="room-card">
      <div className="room-card-image">
        <img src={image} alt={title} />
      </div>
      <div className="room-card-content">
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div className="room-card-price">
        <div className="room-card-price-left">
          <h2>
            Rs. {price} <span>/ Night</span>
          </h2>
        </div>
        <div className="room-card-price-right">
          <button
            onClick={() => {
              navigate(`/rooms/${formatTitleForUrl(title)}`);
            }}
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;
