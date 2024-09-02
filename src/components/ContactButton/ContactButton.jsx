import React from "react";

const ContactButton = () => {
  const handleContactClick = () => {
    const message = "I would like to know more about your Courses and Services";
    const whatsappUrl = `https://wa.me/918111917098?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <button className="primary-btn" onClick={handleContactClick}>
      Contact Us
    </button>
  );
};

export default ContactButton;
