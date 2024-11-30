import React from "react";
import "../css/footer.css";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.webp";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <>
      <footer>
        <div class="row">
          <div class="footer-col">
            <div className="footer-col-logo">
              {/* <img src={Logo} alt="" /> */}
              <h2>Apple Orchard Resort</h2>
            </div>
            {/* <p>Your trusted partner in wellness, offering comprehensive medical resources and services.</p> */}
            <div className="contact-col">
              <p>
                <i class="fa-solid fa-location-dot"></i>
                <p>
                Near Eco Park, Ward Jaunpur, Lagga Goth, Dhanaulti, Uttarakhand 249180
                </p>
              </p>
            </div>
            <div className="contact-col">
              <p>
                <i class="fa-solid fa-phone-volume"></i>
                <a
                  href="tel:+919958140101"
                  target="_blank"
                  aria-label="call us for hotel booking"
                >
                  +91 9958140101
                </a>
              </p>
              <p>
                <i class="fa-solid fa-phone-volume"></i>
                <a
                  href="tel:+919971854175"
                  target="_blank"
                  aria-label="call us for hotel booking"
                >
                  +91 9971854175
                </a>
              </p>
              <p>
                <i class="fa-solid fa-phone-volume"></i>
                <a
                  href="tel:+918743000197"
                  target="_blank"
                  aria-label="call us for hotel booking"
                >
                  +91 8743000197
                </a>
              </p>
              <p>
                <i class="fa-solid fa-phone-volume"></i>
                <a
                  href="tel:+919971834101"
                  target="_blank"
                  aria-label="call us for hotel booking"
                >
                  +91 9971834101
                </a>
              </p>
              
              <p>
                <i class="fa-solid fa-envelope"></i>
                <a
                  href="mailto:booking@rchronline.com"
                  target="_blank"
                  aria-label="mail us for hotel booking"
                >
                  booking@rchronline.com
                </a>
              </p>
            </div>
            <div className="contact-col">
              <p>
                <i class="fa-regular fa-clock"></i>
                <p>Mon – Sat: 10:00 am – 06:00 pm</p>
              </p>
            </div>
          </div>
          <div class="footer-col">
            <h4>menu</h4>
            <span
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </span>
            <span
              onClick={() => {
                navigate("/about");
              }}
            >
              About
            </span>
            <span
              onClick={() => {
                navigate("/rooms");
              }}
            >
              Rooms
            </span>
            <span
              onClick={() => {
                navigate("/payment");
              }}
            >
              Payment
            </span>

            <span
              onClick={() => {
                navigate("/places-to-visit");
              }}
            >
              Places To Visit
            </span>

            <span
              onClick={() => {
                navigate("/gallery");
              }}
            >
              Gallery
            </span>
          </div>
          <div class="footer-col">
            <h4>get help</h4>
            <span
              onClick={() => {
                navigate("/faq");
              }}
            >
              FAQ
            </span>
            <span
              onClick={() => {
                navigate("/contact");
              }}
            >
              Contact
            </span>
            <span
              onClick={() => {
                navigate("");
              }}
            >
              Privacy Policy
            </span>
            {/* <span
              onClick={() => {
                navigate("/");
              }}
            >
              Payment Options
            </span> */}
            <span
              onClick={() => {
                navigate("/cancellation-policy");
              }}
            >
              Cancellation & Refund Policy
            </span>
          </div>
          <div class="footer-col">
            <h4>Services</h4>
            <span>Room Service</span>
            <span>Breakfast</span>
            <span>Lunch</span>
            <span>Dinner</span>
          </div>
          <div class="footer-col">
            <h4>Connect With Us</h4>
            <div class="social-links">
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
                aria-label="follow us on Youtube"
              >
                <i class="fa-brands fa-youtube"></i>
              </a>
            </div>
            {/* <div className="news-letter">
              <input type="text" placeholder="Enter your E-Mail" />
              <button>Subscribe</button>
            </div> */}
          </div>
        </div>

        <div className="footer-copyright">
          <div className="footer-copyright-left">
            <p>
              Managed by{" "}
              <a href="https://www.royalcollectionhotels.com/" target="_blank">
                Royal Collection Hotels
              </a>
            </p>{" "}
            <img src="" alt="" loading="lazy" />
          </div>

          <div className="footer-copyright-right">
            All Rights Reserved -{" "}
            <a href="https://www.appleorchardresort.com" target="_blank">
              Apple Orchard Resort
            </a>{" "}
            © 2024
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
