import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./WhatsAppButton.css";

const WhatsAppButton = () => {
  const whatsappNumber = "919876543210"; // ✅ Replace with your WhatsApp number (no +)
  const message = "Hello! 👋 I’d like to know more about your services.";

  const handleClick = () => {
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <button className="whatsapp-btn" onClick={handleClick} aria-label="Chat on WhatsApp">
      <i className="bi bi-whatsapp"></i>
    </button>
  );
};

export default WhatsAppButton;
