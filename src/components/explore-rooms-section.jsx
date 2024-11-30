import React from "react";
import { useNavigate } from "react-router-dom";
import "../css/explore-rooms-section.css";
import RoomCard from "./room-card";
import PremiumRoom from "../assets/room/premium-room/1.webp"; // Add more images if needed
import SuperDeluxeRoom from "../assets/room/super-deluxe-room/1.webp"; // Add more images if needed
import DeluxeRoom from "../assets/room/deluxe-room/1.webp"; // Add more images if needed
import SuiteRoom from "../assets/room/suite-room/1.webp"; // Add more images if needed

const ExploreRoomsSection = () => {
  const navigate = useNavigate();
  const rooms = [
    {
      id: 1,
      image: PremiumRoom,
      title: "Premium Room",
      description:
        "The Premium Room at Apple Orchard Resort combines luxury and comfort with stylish decor, upscale amenities, and panoramic views of the apple orchards, providing an indulgent and serene retreat for guests.",
      price: 7999,
    },
    {
      id: 2,
      image: SuperDeluxeRoom,
      title: "Super Deluxe Room",
      description:
        "The Super Deluxe Room at Apple Orchard Resort features elegant decor, premium furnishings, and expansive views of the lush apple orchards. Enjoy added space, modern amenities, and a luxurious ambiance.",
      price: 6999,
    },
    {
      id: 3,
      image: DeluxeRoom,
      title: "Deluxe Room",
      description:
        "The Deluxe Room at Apple Orchard Resort offers a cozy retreat with modern amenities, plush bedding, and stunning views of the surrounding apple orchards, ensuring a comfortable and memorable stay.",
      price: 6499,
    },
    {
      id: 4,
      image: SuiteRoom,
      title: "Suite Room",
      description:
        "The Suite Room at Apple Orchard Resort offers spacious luxury with a separate living area, elegant furnishings, and premium amenities. Enjoy breathtaking orchard views and an indulgent stay in this exquisite, tranquil setting.",
      price: 9999,
    },
  ];

  return (
    <section className="explore-rooms-section">
      <div className="explore-rooms-header">
        <div className="explore-rooms-header-left swipe-left">
          <h2>Explore Our Rooms</h2>
          <h4>Choose a room according to your budget</h4>
        </div>
        <div className="explore-rooms-header-right swipe-right">
          <button
            onClick={() => {
              navigate("/rooms");
            }}
          >
            View All Rooms <i className="fa-solid fa-caret-right"></i>
          </button>
        </div>
      </div>
      <div className="explore-rooms-cards swipe">
        {rooms.map((room, index) => (
          <RoomCard
            key={index}
            image={room.image}
            title={room.title}
            description={room.description}
            price={room.price}
          />
        ))}
      </div>
    </section>
  );
};

export default ExploreRoomsSection;
