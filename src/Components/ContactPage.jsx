import React, { useRef, useState } from "react";
import "./ContactPage.css";
import { toast, Toaster } from "react-hot-toast";

const ContactPage = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.target);
    formData.append("access_key", "a505f23b-99d9-4933-a78c-66126935f29a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setLoading(false);

    if (data.success) {
      toast.success("Form submitted successfully!");
      event.target.reset(); // ✅ Automatically reset form
    } else {
      toast.error("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="contact-container">
      <Toaster position="top-center" />
      <h2>Contact Us</h2>
      <form ref={form} onSubmit={handleSubmit} className="contact-form">
        {/* Salutation */}
        <div className="form-group">
          <label htmlFor="salutation">Salutation</label>
          <select id="salutation" name="salutation" required>
            <option value="">Select...</option>
            <option value="Mr.">Mr.</option>
            <option value="Ms.">Ms.</option>
            <option value="Mrs.">Mrs.</option>
            <option value="Dr.">Dr.</option>
            <option value="Prof.">Prof.</option>
          </select>
        </div>

        {/* First Name */}
        <div className="form-group">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" name="firstName" placeholder="John" required />
        </div>

        {/* Company Name */}
        <div className="form-group">
          <label htmlFor="company">Company Name</label>
          <input type="text" id="company" name="company" placeholder="ABC Pvt Ltd" required />
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="example@email.com" required />
        </div>

        {/* Telephone */}
        <div className="form-group">
          <label htmlFor="telephone">Telephone Number</label>
          <input
            type="tel"
            id="telephone"
            name="telephone"
            placeholder="+91 9876543210"
            pattern="[0-9+\s()-]*"
            required
          />
        </div>

        {/* Industry */}
        <div className="form-group">
          <label htmlFor="industry">Industry</label>
          <select id="industry" name="industry" required>
            <option value="">Select Industry...</option>
            <option value="Technology">Technology</option>
            <option value="Healthcare">Healthcare</option>
            <option value="Education">Education</option>
            <option value="Finance">Finance</option>
            <option value="Retail">Retail</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Town / City */}
        <div className="form-group">
          <label htmlFor="town">Town / City</label>
          <input type="text" id="town" name="town" placeholder="Chennai" required />
        </div>

        {/* Zip Code */}
        <div className="form-group">
          <label htmlFor="zip">Zip Code</label>
          <input type="text" id="zip" name="zip" placeholder="600001" pattern="[0-9]{5,6}" required />
        </div>

        {/* Location Dropdown */}
        <div className="form-group">
          <label htmlFor="location">Location</label>
          <select id="location" name="location" required>
            <option value="">Select Location...</option>
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="UK">UK</option>
            <option value="Canada">Canada</option>
            <option value="Australia">Australia</option>
            <option value="Germany">Germany</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Message */}
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="4" placeholder="Write your message..." required></textarea>
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default ContactPage;
