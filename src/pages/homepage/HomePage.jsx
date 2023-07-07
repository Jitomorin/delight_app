import React, { useState } from "react";
import Cutout from "../../assets/Images/cutout1.png";
import Stockphoto1 from "../../assets/Images/stockphoto1.jpg";
import Stockphoto2 from "../../assets/Images/stockphoto2.jpg";
import Blouses from "../../assets/Images/blouses.jpg";
import Shoes from "../../assets/Images/shoes.jpg";
import Skirts from "../../assets/Images/skirts.jpg";
import Dresses from "../../assets/Images/ttt.jpg";
import Logo from "../../assets/Logos/Logo_simple WSEI.png";
import { ReactComponent as RedcrossLogo } from "../../assets/Logos/redcross-logo.svg";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";

import "./style.css";
import Navbar from "../../components/Navbar";
import { Fade, Slide } from "@mui/material";

const HomePage = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="page_wrapper">
      {/* <Navbar /> */}
      <section
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Fade in={true}>
          <img style={{}} src={Cutout} alt="Cutout" />
        </Fade>

        <div
          style={{
            width: "40%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "end",
            overflow: "hidden",
          }}
        >
          <h1>
            <span className="gradient_text">Slay</span> on a budget
          </h1>
          <h2>with our collection</h2>
          <h3>
            Empower individuals through sustainable and affordable fashion
            choices, in order to express their unique style and make a positive
            impact on the planet.
          </h3>
          <button className="shop-button">Shop Now</button>
        </div>
      </section>
      <section className="section_2">
        <div
          style={{
            display: "flex",
            width: "86%",
            overflow: "hidden",
            height: "90%",
          }}
        >
          <img
            style={{ width: "50%", objectFit: "cover" }}
            src={Stockphoto1}
            alt="Stockphoto1"
          />
          <img
            style={{ width: "50%", objectFit: "cover" }}
            src={Stockphoto2}
            alt="Stockphoto2"
          />
        </div>
        <div class="center">
          <a href="#">
            <span data-attr="Stay">Stay</span>
            <span data-attr="Vibrant">Vibrant</span>
          </a>
        </div>
      </section>
      <div className="divider"></div>
      <section className="section_4">
        <h1>
          How it <span className="gradient_text">Works</span>
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "60%",
            marginTop: "5%",
            marginBottom: "5%",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div
            style={{
              width: "25%",
              borderRight: "3px solid #f066c9",
              paddingRight: "1rem",
            }}
          >
            {/* <img src={RedcrossLogo} alt="Blouses" /> */}

            <h2
              style={{
                textAlign: "center",
              }}
            >
              1
            </h2>
            <h3>Thorough cleaning of all items</h3>
          </div>
          <div
            style={{
              width: "25%",
              borderRight: "3px solid #f066c9",
              paddingRight: "1rem",
              paddingLeft: "1rem",
            }}
          >
            <h2
              style={{
                textAlign: "center",
              }}
            >
              2
            </h2>
            <h3
              style={{
                textAlign: "center",
              }}
            >
              Disinfection and sanitization
            </h3>
          </div>
          <div
            style={{
              width: "25%",
              borderRight: "3px solid #f066c9",
              paddingRight: "1rem",
              paddingLeft: "1rem",
            }}
          >
            <h2
              style={{
                textAlign: "center",
              }}
            >
              3
            </h2>

            <h3
              style={{
                textAlign: "center",
              }}
            >
              Ironing items and packaging
            </h3>
          </div>
          <div
            style={{
              width: "25%",
              borderRight: "3px solid #f066c9",
              paddingRight: "1rem",
            }}
          >
            <h2
              style={{
                textAlign: "center",
              }}
            >
              4
            </h2>

            <h3
              style={{
                textAlign: "center",
              }}
            >
              Selling
            </h3>
          </div>
        </div>
        <p
          style={{
            width: "70%",
            marginLeft: "auto",
            marginRight: "auto",
            textAlign: "center",
            fontSize: "1.5em",
          }}
        >
          Driven by personal experience and a passion for affordable fashion,
          Mary founded delightfully clothed closet to provide stylish clothing
          options for individuals on a budget. Her motivation stems from the
          desire to address the common challenge of finding affordable and
          fashionable clothes, ensuring everyone has access to quality pieces
          without compromising their budget or the environment
        </p>
        <div></div>
      </section>

      <div className="divider"></div>
      <section className="section_3">
        <section className="animated-grid">
          <div class="card">
            <img src={Shoes} alt="Shoes" />
            <button>Shoes</button>
          </div>
          <div className="card">
            <img src={Skirts} alt="Skirts" />
            <button>Skirts</button>
          </div>
          <div className="card">
            <img src={Blouses} alt="Blouses" />
            <button>Blouses</button>
          </div>
          <div className="card">
            <img src={Dresses} alt="Dresses" />
            <button>Dresses</button>
          </div>
        </section>
      </section>
      <footer className="footer">
        <div className="container">
          <div className="footer__content">
            <div className="footer__section">
              <h3>Our Partners</h3>
              <img
                style={{ width: "80%", margin: "0" }}
                src={Logo}
                alt="Logo"
              />
              <RedcrossLogo />
            </div>
            <div className="footer__section">
              <h3>Links</h3>
              <div className="footer__links">
                <a href="#">Home</a>
                <a href="#">Shop</a>

                {/* <a href="#">About</a>

                <a href="#">Services</a>

                <a href="#">Contact</a> */}
              </div>
            </div>
            <div className="footer__section">
              <h3>Contact Us</h3>
              <p>Email: marydelight72@gmail.com</p>
              <p>Phone: +254114440680</p>
              <a
                style={{ margin: "auto", color: "white" }}
                target="_blank"
                href="https://www.instagram.com/delight_mary04/"
              >
                <FeatherIcon icon="instagram" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
