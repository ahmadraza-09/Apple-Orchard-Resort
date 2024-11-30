import React from "react";
import "../css/testimonial.css";
import {
  Navigation,
  Autoplay,
  Pagination,
  Scrollbar,
  A11y,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Testimonial = () => {
  const navigate = useNavigate();

  return (
    <section className="testimonial-section">
      <Swiper
        modules={[Navigation, Autoplay, Pagination, Scrollbar, A11y]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        spaceBetween={30}
        slidesPerView={1}
        style={{ maxWidth: "100%", minWidth: "300px", padding: "0px 0px" }}
        pagination={{ clickable: true }}
        // navigation={true}
        breakpoints={{
          320: {
            navigation: false,
          },
          480: {
            navigation: false,
          },
          628: {
            navigation: false,
          },
        }}
      >
        <SwiperSlide>
          <div className="slider-card-testimonial testimonial-content">
            <p>
              <span>
                <i class="fa-solid fa-quote-left"></i>
              </span>
              Staff is very supportive and polite.
              Best time to visit Jan and Feb. Only thing to make sure if you are going with your own vehicle then
              please take front wheel chain that will help to drive easily on snow else it will be difficult to
              cross 1 km down hill track.
              <span>
                <i class="fa-solid fa-quote-right"></i>
              </span>
            </p>
            <h2>- Prabhat Kumar</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-card-testimonial testimonial-content">
            <p>
              <span>
                <i class="fa-solid fa-quote-left"></i>
              </span>
              Awesome place. Food is little costly but quality is very good. Loud music is restricted after 10 pm.
              They don't have dj for bonfire. You can play songs from your playlist. The place is very peaceful
              clean and nice. Awesome view from the resort.
              <span>
                <i class="fa-solid fa-quote-right"></i>
              </span>
            </p>
            <h2>- Prashant Singh</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="slider-card-testimonial testimonial-content">
            <p>
              <span>
                <i class="fa-solid fa-quote-left"></i>
              </span>
              The place is amazing. The staff was very helpful and maintains deceny. The only problem were Other
              guests who think they are above law and order. Yet the manager did take an immediate action and tried
              to maintain the dignity and privacy of the resort and it's other guests.
              <span>
                <i class="fa-solid fa-quote-right"></i>
              </span>
            </p>
            <h2>- Gaibi Kumar</h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonial;
