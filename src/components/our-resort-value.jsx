import React, { useState } from 'react';
import '../css/our-resort-value.css';
import ValueImage from '../assets/hero.jpg';

const OurResortValue = () => {
  const [activeTab, setActiveTab] = useState('Quality');

  const renderContent = () => {
    switch (activeTab) {
      case 'Quality':
        return (
          <div className="our-resort-value-right-container-content">
            <h3>Resort Quality</h3>
            <br />
            <p>
              Apple Orchard Resort is synonymous with exceptional quality, offering guests a blend
              of comfort, elegance, and impeccable service amidst the serene beauty of Dhanaulti.
              Nestled amidst lush apple orchards, our resort promises a memorable retreat with
              well-appointed accommodations, modern amenities, and a commitment to ensuring every
              guest experience is both relaxing and rejuvenating. Discover tranquility and luxury at
              its finest at Apple Orchard Resort.
            </p>
          </div>
        );
      case 'Our Vision':
        return (
          <div className="our-resort-value-right-container-content">
            <h3>Our Vision</h3>
            <br />
            <p>
              The vision of Apple Orchard Resort is to provide an unparalleled hospitality experience
              amidst the natural beauty of Dhanaulti. We aim to be a beacon of luxury and serenity,
              offering guests a sanctuary where they can unwind, reconnect with nature, and create
              lasting memories. With a commitment to excellence in service and sustainability, we
              strive to set new standards in hospitality, ensuring every guest feels welcomed and
              valued throughout their stay.
            </p>
          </div>
        );
      case 'Success':
        return (
          <div className="our-resort-value-right-container-content">
            <h3>Success</h3>
            <br />
            <p>
              Success at Apple Orchard Resort is defined by our ability to exceed guest expectations,
              foster memorable experiences, and maintain a harmonious balance with nature. We measure
              success not only by occupancy rates and positive reviews but also by the lasting
              impressions we create and the meaningful connections we forge with our guests. Our
              success is rooted in a commitment to quality, sustainability, and genuine hospitality,
              ensuring every visitor leaves with a sense of satisfaction and fond memories of their
              time with us.
            </p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="our-resort-value-section">
      <div className="our-resort-value-left">
        <img src={ValueImage} alt="" />
      </div>
      <div className="our-resort-value-right">
        <h2>Our Resort Values</h2>
        <p>Pick a room that best suits your taste and budget</p>
        <br />
        <div className="our-resort-value-right-container">
          <div className="our-resort-value-right-container-header">
            {['Quality', 'Our Vision', 'Success'].map((tab) => (
              <h3
                key={tab}
                className={activeTab === tab ? 'active-header-content' : ''}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </h3>
            ))}
          </div>
          <br />
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default OurResortValue;
