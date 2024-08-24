import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>TapAndGO</h1>
        <p>An E-commerce website</p>
        <p><a href="https://www.jdinfotech.net/">DEVELOPER'S WEBSITE</a></p>
        <p>Copyrights 2023@JD INFOTECH</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://www.instagram.com/jd.infotech/">Instagram</a>
        <a href="https://www.linkedin.com/company/jd-infotech/">linkedin</a>
        <a href="https://www.facebook.com/jdinfotech.net">Facebook</a>
      </div>
    </footer>
  );
};

export default Footer;
