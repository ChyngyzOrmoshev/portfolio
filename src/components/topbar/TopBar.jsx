import React from "react";
import {
  Logo,
  info,
  portfolio,
  works,
  testimonials,
  contacts,
  gmail,
  telegram,
  facebook,
  instagram,
} from "..";
import "./TopBar.scss";

function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar__logo">
        <img src={Logo} alt="iconLogo" />
        <h3>Ormoshev</h3>
        <p>Designer &amp; &lt;Coder&gt;</p>
      </div>
      <div className="topbar__links">
        <div className="topbar__link">
          <img src={info} alt="iconInfo" />
          <h2>About me</h2>
        </div>
        <div className="topbar__link">
          <img src={portfolio} alt="iconPortfolio" />
          <h2>Portfolio</h2>
        </div>
        <div className="topbar__link">
          <img src={works} alt="iconWorks" />
          <h2>Works</h2>
        </div>
        <div className="topbar__link">
          <img src={testimonials} alt="iconTestimonials" />
          <h2>Testimonials</h2>
        </div>
        <div className="topbar__link">
          <img src={contacts} alt="iconContacts" />
          <h2>Contacts</h2>
        </div>
      </div>
      <div className="topbar__social">
        <a href="#!">
          <img src={telegram} alt="iconTelegram" />
        </a>
        <a href="#!">
          <img src={gmail} alt="iconTelegram" />
        </a>
        <a href="#!">
          <img src={facebook} alt="iconTelegram" />
        </a>
        <a href="#!">
          <img src={instagram} alt="iconTelegram" />
        </a>
      </div>
    </div>
  );
}

export default TopBar;
