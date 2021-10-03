import React from "react";
import "./contacts.scss";

function Contacts() {
  return (
    <section className="contacts" id="contacts">
      <div className="contacts__content">
        <div className="contacts__head">
          <h2>Contact Me</h2>
          <button type="submit" className="contacts_btn contacts__glass">
            Send
          </button>
        </div>
        <form>
          <input
            type="text"
            placeholder="UserName"
            className="contacts__glass"
          />
          <input type="email" placeholder="Email" className="contacts__glass" />
          <textarea
            placeholder="Message"
            className="contacts__glass"
          ></textarea>
        </form>
      </div>
    </section>
  );
}

export default Contacts;
