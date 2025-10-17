import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import whyUsImg from "../assets/group 133.png"; // Replace with your image

const WhyUs = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">

          {/* Text Column */}
          <div className="col-md-6">
            <h2 className="mb-4" >Why Us?</h2>
            <p className="lead text-black " style={{fontWeight:'400'}}>
          After 60 years in the industry,
we decided to alter direction. We are committed to provide best-in-class fluid management solutions that addresses the necessary business problem and map a perfect solution.
            </p>
          </div>

          {/* Image Column */}
          <div className="col-md-6 text-center">
            <img
              src={whyUsImg}
              alt="Why Choose Us"
              className=""
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyUs;
