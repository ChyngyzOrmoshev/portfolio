import { useState, useEffect } from "react";
import { htmlCss, javaScript, reactApps } from "../db";
import "./portfolio.scss";
import { PortfolioCatItems } from "../index";

function Portfolio() {
  const [selected, setSelected] = useState("htmlCss");
  const [data, setData] = useState([]);

  useEffect(() => {
    if (selected === "htmlCss") {
      setData(htmlCss);
    } else if (selected === "javaScript") {
      setData(javaScript);
    } else if (selected === "reactApp") {
      setData(reactApps);
    } else {
      setData(htmlCss);
    }
  }, [selected]);

  const portfolioCatItems = [
    {
      id: 1,
      category: "htmlCss",
      title: "HTML, CSS",
    },
    {
      id: 2,
      category: "javaScript",
      title: "javaScript",
    },
    {
      id: 3,
      category: "reactApp",
      title: "React Apps",
    },
  ];

  return (
    <section className="portfolio" id="portfolio">
      <div className="portfolio__rectangle">
        <div className="rectangle2"></div>
        <div className="rectangle1"></div>
        <div className="rectangle3"></div>
        <div className="rectangle4"></div>
      </div>
      <div className="portfolio__categories">
        <h2>Portfolio</h2>
        <ul className="portfolio__cat">
          {portfolioCatItems.map((item) => (
            <PortfolioCatItems
              item={item.title}
              key={`${item.title}_${item.id}`}
              active={selected === item.category}
              setSelected={setSelected}
              category={item.category}
            />
          ))}
        </ul>
      </div>

      <div className="portfolio__list">
        {data.map((dataItem, id) => (
          <div
            className={`portfolio__item ${dataItem.className}`}
            key={`${dataItem.title}_${id}`}
          >
            <img src={dataItem.img} alt={dataItem.title} />
            <h3>{dataItem.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
