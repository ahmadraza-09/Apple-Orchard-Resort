import React from "react";
import CountUp from "react-countup";
import "../css/customers-counting-card.css";

const CustomerCountingCard = () => {
  return (
    <section className="customers-counting-card-section">
      <div className="customers-counting-card-box">
        <h2>
          <CountUp start={0} end={121} duration={5} />
        </h2>

        <h4>
        New <br /> Friendships
        </h4>
      </div>
      <div className="customers-counting-card-box">
        <h2>
          <CountUp start={0} end={254} duration={5} />
        </h2>
        <h4>
        Five Star <br /> Ratings
        </h4>
      </div>
      <div className="customers-counting-card-box">
        <h2>
          <CountUp start={0} end={430} duration={5} />
        </h2>
        <h4>
        International <br /> Guests
        </h4>
      </div>
      <div className="customers-counting-card-box">
        <h2>
          <CountUp start={0} end={782} duration={5} />
        </h2>
        <h4>
          Served <br /> Breakfast
        </h4>
      </div>
    </section>
  );
};

export default CustomerCountingCard;
