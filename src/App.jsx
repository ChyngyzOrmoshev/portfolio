import "./App.scss";
import {
  About,
  TopBar,
  Portfolio,
  Works,
  Testimonials,
  Contacts,
} from "./components/index";

function App() {
  return (
    <div className="App">
      <section className="glass">
        <TopBar
          items={[
            { name: "about", link: "about" },
            { name: "portfolio", link: "portfolio" },
            { name: "works", link: "works" },
            { name: "testimonials", link: "testimonials" },
            { name: "contacts", link: "contacts" },
          ]}
        />
        <div className="section">
          <About />
          <Portfolio />
          <Works />
          <Testimonials />
          <Contacts />
        </div>
      </section>
      <div className="circle1"></div>
      <div className="circle2"></div>
    </div>
  );
}

export default App;
