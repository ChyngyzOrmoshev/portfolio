import { useEffect, useRef } from "react";
import { init } from "ityped";
import "./about.scss";
import { contacts, email, coder, designer } from "../index";

function About() {
  const animatedTextRef = useRef();

  useEffect(() => {
    init(animatedTextRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["This page is made with React.js"],
    });
  }, []);
  return (
    <section className="about" id="about">
      <h1>Chyngyz Ormoshev</h1>
      <div className="about__content">
        <img src={contacts} alt="iconContacts" />
        <span>+996 773 15 85 93</span>
      </div>
      <div className="about__content">
        <img src={email} alt="icon-email" />
        <span>Chyngyz.Ormoshev.pls@gmail.com</span>
      </div>
      <div className="about__items">
        <img src={coder} alt="coder" />
        <div className="about__items-text">
          <h3>&lt;Coder&gt;</h3>
          <p>
            Front End Developer who focuses on writing clean, elegant and
            efficient code.
          </p>
        </div>
      </div>
      <div className="about__items">
        <img src={designer} alt="designer" />
        <div className="about__items-text">
          <h3>Designer</h3>
          <p>
            UI/UX Designer with a passion for designing beautiful and functional
            user experiences.
          </p>
        </div>
      </div>
      <div className="about__react">
        <span ref={animatedTextRef}></span>
      </div>
    </section>
  );
}

export default About;
