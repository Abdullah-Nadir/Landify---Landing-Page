import { useState } from "react";
import { Container } from "react-bootstrap";
import Cards from "./Cards";

// Images
import img1 from "../Images/01.png";
import img2 from "../Images/02.png";
import img3 from "../Images/03.png";
import img4 from "../Images/04.png";
import img5 from "../Images/05.png";
import img6 from "../Images/06.png";
import large from "../Images/Large.png";

const Services = () => {
  const [cards] = useState([
    { heading: "Mobile Application", img: img1 },
    { heading: "Web Application", img: img2 },
    { heading: "User Interface Design", img: img3 },
    { heading: "Strategy and Branding", img: img4 },
    { heading: "Perfomance Marketing", img: img5 },
    { heading: "Project Management", img: img6 },
  ]);

  return (
    <section id="services">
      <Container fluid>
        <div className="services-header">
          <h2 className="services-heading">
            Services that connect you to
            <br /> your users
          </h2>
        </div>
        <Cards cards={cards} />
        <button className="services-btn">
          <img src={large} alt="explore-all" />
        </button>
      </Container>
    </section>
  );
};

export default Services;
