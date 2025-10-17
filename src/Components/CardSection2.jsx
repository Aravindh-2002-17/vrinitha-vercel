import React from "react";
import "./CardSection2.css";

// Import your product images
import product1 from "../assets/image 10.png";
import product2 from "../assets/image 11.png";
import product3 from "../assets/image 12.png";
import product4 from "../assets/image 13.png";

const cardData = [
  {
    image: product1,
    title: "Tractor",
    description: "High-efficiency farming tractor for various tasks.",
  },
  {
    image: product2,
    title: "Plough",
    description: "Heavy-duty plough suitable for tough soil.",
  },
  {
    image: product3,
    title: "Wheat Seeds",
    description: "Premium quality seeds for high yield.More seeds",
  },
  {
    image: product4,
    title: "Irrigation Pump",
    description: "Reliable water pump for effective irrigation.",
  },
];

const CardSectionNoWrap = () => {
  return (
    <section className="product-section">
      <h2 className="product-section-title">Solution for all your Needs</h2>

      <div className="product-buttons">
        <button className="product-btn-1">Agri Products</button>
        <button className="product-btn-2">Machine Products</button>
      </div>

      <div className="product-row-wrapper">
        <div className="product-row">
          {cardData.map((card, index) => (
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
             
              
              <div className="px-4 text-start mt-0" >
                <a href="#" className="product-read-more-btn ">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardSectionNoWrap;
