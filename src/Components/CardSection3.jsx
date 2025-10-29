import React from "react";
import img1 from "../assets/image 10.png";
import img2 from "../assets/image 11.png";
import img3 from "../assets/image 12.png";
import img4 from "../assets/image 13.png";

const cards = [
  {
    image: img1,
    title: "Soil Tester",
    description: "Accurately checks soil pH and moisture levels.",
    link: "#soil-tester",
  },
  {
    image: img2,
    title: "Sprayer Drone",
    description: "Covers large fields with automated spraying.",
    link: "#sprayer-drone",
  },
  {
    image: img3,
    title: "Smart Harvester",
    description: "Boosts productivity with sensor-guided harvesting.",
    link: "#smart-harvester",
  },
  {
    image: img4,
    title: "Crop Monitor",
    description:
      "Real-time crop health analytics and alerts.  description just ",
    link: "#crop-monitor",
  },
];

const CardSection3 = () => {
  return (
    <section className="py-5 " style={{ backgroundColor: "#f8f9fa" }}>
      <div className="container">
        <h2 className="text-center mb-5 fw-bold">Our Blog</h2>

        <div className="row g-4 ps-5">
          {cards.map((card, index) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex" key={index}>
              <div className="card shadow-sm border-0 w-100 d-flex flex-column">
                <img
                  src={card.image}
                  alt={card.title}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column justify-content-between" style={{ flexGrow: 1 }}>
                    <p
  className="card-text text-muted mb-3"
  style={{ whiteSpace: 'normal', wordBreak: 'break-word' }}
>
  {card.description}
</p>
                 
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardSection3;
