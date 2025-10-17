import React from "react";
import calendarImg1 from "../assets/calender.png";
import calendarImg2 from "../assets/image 39.png";
import calendarImg3 from "../assets/Tools.png";
import calendarImg4 from "../assets/Laboratory.png";
import BrandLogo from "../assets/logo.png";
import youtube from "../assets/youtube (1).png";
import facebook from "../assets/facebook (1).png";
import cslogo from "../assets/cs logo white.png";
import Linkdin from "../assets/linkedin (1).png";
import footerBg from "../assets/image (26).png"; // <-- update path/filename as needed


// If you want, import icons from react-icons or use your images directly
// Import images from local folder (assuming inside src/assets folder or public folder)
// If images are in public folder, just use relative paths like "/images/logo.png"

const Footer = () => {
  return (
   <footer className="bg-[#072B18] text-white pt-5  ">
  <div className="container py-4">
  <div className="row g-4">
    {/* Each badge takes 6 columns on small, 3 on md and up (2 per row on small, 4 per row on md) */}
    {[calendarImg1, calendarImg2, calendarImg3, calendarImg4].map((img, i) => {
      const titles = [
        <>
          60+<br />Years
        </>,
        "Approved by TNAU",
        <>
          50+<br />Installation
        </>,
        <>
          Lab Tested<br />with llFPT
        </>,
      ];

      const boxShadows = [
        "#3EA53C",
        "#F8AF02",
        "#FF7200",
        "#2DBCAB",
      ];

      return (
        <div key={i} className="col-6 col-md-3">
          <div
            className="bg-white text-black rounded  d-flex flex-column justify-content-center align-items-center"
            style={{
              boxShadow: `6px 7px 0 ${boxShadows[i]}`,
              borderRadius: '8px',
              padding: '20px',
              height: '150px', // fixed height for rectangle shape
              textAlign: 'center',
            }}
          >
            <img
              src={img}
              alt={`Badge ${i + 1}`}
              style={{ width: i === 1 ? "auto" : "60px", marginBottom: "12px" }}
            />
            <h3 style={{ fontSize: "20px", fontWeight: "600", margin: 0 }}>
              {titles[i]}
            </h3>
          </div>
        </div>
      );
    })}
  </div>
</div>


      {/* Newsletter + social + links section */}
      <div className="bg-[#072B18] py-5 " style={{ marginTop: "90px" }}>
        <div className="container">
          <div className="row">
            {/* Logo & newsletter */}
            <div className="col-md-4 mb-4">
              {/* Footer logo */}
              <img src={BrandLogo} alt="Logo" style={{ maxWidth: "150px" }} />

              <p className="mt-3">Sign-up for our newsletter</p>

              {/* Newsletter form */}
              <form className="d-flex" onSubmit={(e) => e.preventDefault()}>
              <>
  <input
    type="email"
    className="form-control custom-input me-2"
    placeholder="Email..."
    style={{ borderRadius: '50px', color: '#fff', background: 'transparent' }}
    required
  />
  <style>{`
    .custom-input::placeholder {
      color: rgba(255, 255, 255, 0.7); /* semi-transparent white */
      opacity: 1; /* make sure placeholder is fully visible */
    }
  `}</style>
</>



                <button type="submit" style={{color:'#3EA53C'}} className="btn  bg-transparent  border-none">
                  SUBMIT
                </button>
              </form>

              {/* Social media icons */}
              <div className="mt-4 d-flex gap-3">
                <a href="#" aria-label="Facebook">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: "30px" }}
                  />
                </a>
                <a href="#" aria-label="YouTube">
                  <img
                    src={youtube}
                    alt="youtube icon"
                    style={{ width: "30px" }}
                  />
                </a>
                <a href="#" aria-label="LinkedIn">
                  <img
                    src={Linkdin}
                    alt="LinkedIn"
                    style={{ width: "30px" }}
                  />
                </a>
              </div>
            </div>

            {/* Links section */}
            <div className="col-md-8 gap-20 d-flex justify-content-end " style={{fontSize:'14px'}}>
              {/* Products */}
              <div>
                <h5 style={{fontSize:'15px'}}>PRODUCTS</h5>
                <ul className="list-unstyled " style={{ lineHeight: '2.3' }}>
                  <li><a href="#" style={{ color: '#3EA53C' }} className=" text-decoration-none">Insect egg removal</a></li>
                  <li><a href="#" style={{ color: '#3EA53C' }} className=" text-decoration-none">UV light trap</a></li>
                  <li><a href="#" style={{ color: '#3EA53C' }} className=" text-decoration-none">Prop trap 6-inch and 12-inch</a></li>
                  <li><a href="#" style={{ color: '#3EA53C' }} className=" text-decoration-none">Stack prop trap</a></li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h5 style={{fontSize:'15px'}}>RESOURCES</h5>
                <ul className="list-unstyled" style={{ lineHeight: '2.3' }} >
                  <li><a href="#" style={{ color: '#fff' }} className=" text-decoration-none">FAQs</a></li>
                  <li><a href="#" style={{ color: '#fff' }} className=" text-decoration-none">Customer Stories</a></li>
                </ul>
              </div>

              {/* Company */}
              <div>
                <h5 style={{fontSize:'15px'}}>COMPANY</h5>
                <ul className="list-unstyled" style={{ lineHeight: '2.3' }}>
                  <li><a href="#" style={{ color: '#3EA53C' }} className="text-decoration-none">Careers</a></li>
                  <li><a href="#" style={{ color: '#3EA53C' }} className="text-decoration-none">About us</a></li>
                  <li><a href="#" style={{ color: '#3EA53C' }} className="text-decoration-none">Contact us</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

<hr className="text-white"   style={{
    borderColor: 'white',
    borderWidth: '1px',
    width: '1100px',    // controls the length (shrink horizontally)
    margin: '20px auto', // centers it horizontally
  }} />

      {/* Bottom copyright */}
      <div className="bg-[#072B18] py-2">
  <div className="container d-flex justify-content-between align-items-center flex-wrap">
    <p className="mb-0" style={{ fontSize: '14px', whiteSpace: 'nowrap' }}>
      © 2025 Sri Vrintha Traders
    </p>
    <img src={cslogo} alt="CS Logo" style={{ height: '15px' }} />
  </div>
</div>

    </footer>
  );
};

export default Footer;
