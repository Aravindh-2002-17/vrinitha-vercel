import React from "react";
import Marquee from "react-fast-marquee";

// Example logos - replace with your own images or URLs
import logo1 from "../assets/image 18.png";
import logo2 from "../assets/image 19.png";
import logo3 from "../assets/image 20.png";
import logo4 from "../assets/image 21.png";
import logo5 from "../assets/image 22.png";
import logo6 from "../assets/image 23.png";
import logo8 from "../assets/image 25.png";
import logo10 from "../assets/image 27.png";
import logo11 from "../assets/image 28.png";
import logo12 from "../assets/image 29.png";



const logos = [logo1, logo2, logo3, logo4 ,logo5,logo6,logo8,logo10,logo11,logo12];

const ClientLogoSlider = () => {
  return (

    <div className="client-logo-slider" style={{ background: "#fff", padding: "20px 0" }}>
      <h2 style={{ textAlign: "center", marginBottom: "30px", color: "#222" }}>
        powering Leading Food Brands
      </h2>
      <Marquee gradient={false} speed={50}>
        {logos.map((logo, index) => (
          <div
            key={index}
            style={{
              display: "inline-block",
              margin: "0 30px",
              minWidth: "150px",
            }}
          >
            <img
              src={logo}
              alt={`Client logo ${index + 1}`}
              style={{ width:"50%", height: "auto", objectFit: "contain" }}
            />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default ClientLogoSlider;
