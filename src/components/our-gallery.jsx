import React, { useState } from "react";
import "../css/our-gallery.css";
import GalleryImage1 from "../assets/gallery/1.jpg";
import GalleryImage2 from "../assets/gallery/2.jpg";
import GalleryImage3 from "../assets/gallery/3.jpg";
import GalleryImage4 from "../assets/gallery/4.jpg";
import GalleryImage5 from "../assets/gallery/5.jpg";
import GalleryImage6 from "../assets/gallery/6.jpg";
import GalleryImage7 from "../assets/gallery/7.jpg";
import GalleryImage8 from "../assets/gallery/8.jpg";
import GalleryImage9 from "../assets/gallery/9.jpg";
import GalleryImage10 from "../assets/gallery/10.jpg";
import GalleryImage11 from "../assets/gallery/11.jpg";
import GalleryImage12 from "../assets/gallery/12.jpg";
import GalleryImage13 from "../assets/gallery/13.jpg";
import GalleryImage14 from "../assets/gallery/14.jpg";
import GalleryImage15 from "../assets/gallery/15.jpg";
import GalleryImage16 from "../assets/gallery/16.jpg";
import GalleryImage17 from "../assets/gallery/17.jpg";
import GalleryImage18 from "../assets/gallery/18.jpg";
import GalleryImage19 from "../assets/gallery/19.jpg";
import GalleryImage20 from "../assets/gallery/20.jpg";
import GalleryImage21 from "../assets/gallery/21.jpg";
import GalleryImage22 from "../assets/gallery/22.jpg";
import GalleryImage23 from "../assets/gallery/23.jpg";
import GalleryImage24 from "../assets/gallery/24.jpg";
import GalleryImage25 from "../assets/gallery/25.jpg";
import GalleryImage26 from "../assets/gallery/26.jpg";
import GalleryImage27 from "../assets/gallery/27.jpg";
import GalleryImage28 from "../assets/gallery/28.jpg";
import GalleryImage29 from "../assets/gallery/29.jpg";
import GalleryImage30 from "../assets/gallery/30.jpg";
import GalleryImage31 from "../assets/gallery/31.jpg";
import GalleryImage32 from "../assets/gallery/32.jpg";
import GalleryImage33 from "../assets/gallery/33.jpg";
import GalleryImage34 from "../assets/gallery/34.jpg";
import GalleryImage35 from "../assets/gallery/35.jpg";
import GalleryImage36 from "../assets/gallery/36.jpg";
// import GalleryImage37 from "../assets/gallery/37.jpg";
// import GalleryImage38 from "../assets/gallery/38.jpg";
// import GalleryImage39 from "../assets/gallery/39.jpg";
// import GalleryImage40 from "../assets/gallery/40.jpg";
// import GalleryImage41 from "../assets/gallery/41.jpg";
// import GalleryImage42 from "../assets/gallery/42.jpg";
// import GalleryImage43 from "../assets/gallery/43.jpg";
// import GalleryImage44 from "../assets/gallery/44.jpg";
// import GalleryImage45 from "../assets/gallery/45.jpg";
// import GalleryImage46 from "../assets/gallery/46.jpg";
// import GalleryImage47 from "../assets/gallery/47.jpg";
// import GalleryImage48 from "../assets/gallery/48.jpg";
// import GalleryImage49 from "../assets/gallery/49.jpg";
// import GalleryImage50 from "../assets/gallery/50.jpg";
// import GalleryImage51 from "../assets/gallery/51.jpg";
// import GalleryImage52 from "../assets/gallery/52.jpg";
// import GalleryImage53 from "../assets/gallery/53.jpg";
// import GalleryImage54 from "../assets/gallery/54.jpg";
// import GalleryImage55 from "../assets/gallery/55.jpg";
// import GalleryImage56 from "../assets/gallery/56.jpg";
// import GalleryImage57 from "../assets/gallery/57.jpg";
// import GalleryImage58 from "../assets/gallery/58.jpg";
// import GalleryImage59 from "../assets/gallery/59.jpg";
// import GalleryImage60 from "../assets/gallery/60.jpg";
// import GalleryImage61 from "../assets/gallery/61.jpg";
// import GalleryImage62 from "../assets/gallery/62.jpg";

const imageList = [
  GalleryImage1,
  GalleryImage2,
  GalleryImage3,
  GalleryImage4,
  GalleryImage5,
  GalleryImage6,
  GalleryImage7,
  GalleryImage8,
  GalleryImage9,
  GalleryImage10,
  GalleryImage11,
  GalleryImage12,
  GalleryImage13,
  GalleryImage14,
  GalleryImage15,
  GalleryImage16,
  GalleryImage17,
  GalleryImage18,
  GalleryImage19,
  GalleryImage20,
  GalleryImage21,
  GalleryImage22,
  GalleryImage23,
  GalleryImage24,
  GalleryImage25,
  GalleryImage26,
  GalleryImage27,
  GalleryImage28,
  GalleryImage29,
  GalleryImage30,
  GalleryImage31,
  GalleryImage32,
  GalleryImage33,
  GalleryImage34,
  GalleryImage35,
  GalleryImage36,
  // GalleryImage37,
  // GalleryImage38,
  // GalleryImage39,
  // GalleryImage40,
  // GalleryImage41,
  // GalleryImage42,
  // GalleryImage43,
  // GalleryImage44,
  // GalleryImage45,
  // GalleryImage46,
  // GalleryImage47,
  // GalleryImage48,
  // GalleryImage49,
  // GalleryImage50,
  // GalleryImage51,
  // GalleryImage52,
  // GalleryImage53,
  // GalleryImage54,
  // GalleryImage55,
  // GalleryImage56,
  // GalleryImage57,
  // GalleryImage58,
  // GalleryImage59,
  // GalleryImage60,
  // GalleryImage61,
  // GalleryImage62,
];

const OurGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null); // To store the clicked image
  const [loadedImages, setLoadedImages] = useState(
    new Array(imageList.length).fill(false)
  ); // Track the loaded state of each image

  // Handle when an image has loaded
  const handleImageLoad = (index) => {
    const updatedLoadedImages = [...loadedImages];
    updatedLoadedImages[index] = true;
    setLoadedImages(updatedLoadedImages); // Mark image as loaded
  };

  const openImage = (image) => {
    setSelectedImage(image); // Sets the clicked image to display in the popup
  };

  const closeImage = () => {
    setSelectedImage(null); // Closes the popup by resetting the selected image
  };

  return (
    <div className="our-gallery-section">
      <h1 className="swipe">Our Gallery</h1>
      <h4 className="swipe">Explore The Resort</h4>
      <div className="our-gallery-wrapper">
        {imageList.map((image, index) => (
          <div
            className="our-gallery-image swipe"
            key={index}
            onClick={() => openImage(image)}
          >
            <img src={image} alt={`Gallery image ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Popup section */}
      {selectedImage && (
        <div className="popup-image">
          <span className="close-btn" onClick={closeImage}>
            <i className="fa-solid fa-xmark"></i>
          </span>
          <img src={selectedImage} alt="Popup" />
        </div>
      )}
    </div>
  );
};

export default OurGallery;
