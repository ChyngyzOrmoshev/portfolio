import React from "react";
import "./portfolioCats.scss";

function PortfolioCats({ item, category, active, setSelected }) {
  return (
    <li
      className={active ? "item item--active" : "item"}
      onClick={() => {
        setSelected(category);
      }}
    >
      {item}
    </li>
  );
}

export default PortfolioCats;
