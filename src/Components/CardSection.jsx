import React from "react";
import "./CardSection.css";

// Image imports (update with your own paths)
import img1 from "../assets/Mask group-1.png";
import img2 from "../assets/Mask group-2.png";
import img3 from "../assets/Mask group-3.png";
import img4 from "../assets/Mask group.png";
import img5 from "../assets/Mask group-2.png";

const cardData = [
  {
    image: img1,
    title: " Insect Egg Removel machine -300kg",
    description: "An insect egg remover is a specialized tool or solution designed to eliminate insect eggs from surfaces.",
    link: "#",
  },
  {
    image: img2,
    title: "Card Two",
    description: "A UV light trap attracts insects using ultraviolet light and safely captures them on sticky boards or grids",
    link: "#",
  },
  {
    image: img3,
    title: "Card Three",
    description: "Customize this paragraph as you need.This is a short paragraph for card on",
    link: "#",
  },
  {
    image: img4,
    title: "UV Light Trap",
    description: "A UV light trap attracts insects using ultraviolet light and safely captures them on sticky boards or grids",
    link: "#",
  },
  {
    image: img5,
    title: "Insect Egg Removel Machine",
    description: "A UV light trap attracts insects using ultraviolet light and safely captures them on sticky boards or grids",
    link: "#",
  },
];

const CardSection = () => {
  return (
    <section className="card-section">
      <h2 className="section-title">Our Machinary Products</h2>

      {/* First Row: Cards 1–3 */}
      <div className="card-grid">
        {cardData.slice(0, 3).map((card, index) => (
          <div className="product-card " key={index}>
              <img
                src={card.image}
                alt={card.title}
                className="product-card-image"
              />
              <div className="px-4">
                   <h3 className="product-card-title " >{card.title}</h3>
              <p className="product-card-description">{card.description}</p>

              </div>
             
            </div>
        ))}
      </div>

      {/* Second Row: Cards 4–5 (Centered) */}
      <div className="card-grid center-two">
        {cardData.slice(3).map((card, index) => (
           <div className="product-card p-0" key={index}>
              <img
                src={card.image}
                alt={card.title}
                className="product-card-image"
              />
              <div className="px-4">
                   <h3 className="product-card-title " >{card.title}</h3>
              <p className="product-card-description">{card.description}</p>
              </div>
             
            </div>
        ))}
      </div>
    </section>
  );
};

export default CardSection;
