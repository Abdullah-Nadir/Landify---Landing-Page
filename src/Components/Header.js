import { Col, Row } from "react-bootstrap";

// Images
import circle from "../Images/header-circle.png";
import img from "../Images/header-img.png";

const Header = () => {
  return (
    <section id="header-section">
      <Row className="header">
        <Col md={6} className="header-title">
          <h1 className="header-heading">
            Landing page
            <br /> UI kit
          </h1>
          <p className="header-para">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio
            in et, lectus sit lorem id integer.
          </p>
          <button className="header-btn">Get Started</button>
        </Col>
        <Col md={6} className="header-images">
          <img className="header-circle" src={circle} alt="header-circle" />
          <img src={img} alt="header-img" className="header-img" />
        </Col>
      </Row>
    </section>
  );
};

export default Header;
