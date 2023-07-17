import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <div className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* left  */}
        <div className="flexColStart f-left">
          <img src="/logo2.png" alt="" width={120} />
          <span className="secondaryText">
            Our vision is to make all people the best place to live for them
          </span>
        </div>
        {/* right  */}
        <div className="flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">Samarth Nagar, Dighi, Pune, Maharashtra</span>
          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Product</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
