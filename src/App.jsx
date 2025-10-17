import React from "react";
import Navbar from "./Components/Navbar";
import Hero from './Components/Hero';
import ClientLogoSlider from "./Components/ClientLogoSlider";
import CardSection from './components/CardSection'; // update path if needed
import CardSection2 from "./Components/CardSection2";
import WhyUs from "./Components/WhyUs";
import CardSection3 from "./Components/CardSection3";
import Footer from "./Components/Footer";




function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <ClientLogoSlider />
      <CardSection />
      <CardSection2 />
      <WhyUs />
      <CardSection3 />
      <Footer />
      
    </>
  );
}

export default App;
