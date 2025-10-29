import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import ClientLogoSlider from "./Components/ClientLogoSlider";
import CardSection from "./Components/CardSection";
import CardSection2 from "./Components/CardSection2";
import WhyUs from "./Components/WhyUs";
import CardSection3 from "./Components/CardSection3";
import Footer from "./Components/Footer";
import ContactPage from "./Components/ContactPage";
import "bootstrap-icons/font/bootstrap-icons.css";
import Whatsapp from "../src/assets/Whatsapp logo.png";


// ✅ Home page showing the full site
function HomePage() {
  return (
    <>
      <Hero />
      <ClientLogoSlider />
      <CardSection />
      <CardSection2 />
      <WhyUs />
      <CardSection3 /> 
   
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        {/* ✅ Default route — opens homepage */}
        <Route path="/" element={<HomePage />} />

        {/* ✅ Contact route */}
        <Route path="/contact" element={<ContactPage />} />

        {/* ✅ Any other route redirects to homepage */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
       {/* ✅ Floating WhatsApp Icon (visible on all pages) */}
      <div
        className="whatsapp-float"
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: "1000",
          background:"transparent",
        }}
      >
        <a
          href="https://wa.me/918056593624?text=Hello!%20Can%20I%20help%20you?"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={Whatsapp}
            alt="WhatsApp Chat"
            width="60"
            height="60"
            style={{
              borderRadius: "0%",
              boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
              transition: "transform 0.3s ease",
            }}
            onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
            onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
        </a>
      </div>
    </>
  )}  

  export default App;
        

