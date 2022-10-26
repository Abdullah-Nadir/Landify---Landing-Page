import { Container } from "react-bootstrap";

// Images
import logo1 from "../Images/Logo 2.png";
import logo2 from "../Images/Logo 3.png";
import logo3 from "../Images/Logo 4.png";
import logo4 from "../Images/Logo 5.png";
import logo5 from "../Images/Logo 6.png";
import logo6 from "../Images/Logo 7.png";
import logo7 from "../Images/Logo 8.png";
import logo8 from "../Images/Logo 9.png";
import logo9 from "../Images/Logo 11.png";

const Clients = () => {
  return (
    <section id="clients-section">
      <Container fluid>
        <div className="client-header">
          <h2 className="client-heading">Trusted by our beloved clients</h2>
        </div>
        <div className="client-logos">
          <img src={logo1} alt="logo-1" className="logo-1" />
          <img src={logo2} alt="logo-2" className="logo-2" />
          <img src={logo3} alt="logo-3" className="logo-3" />
          <img src={logo4} alt="logo-4" className="logo-4" />
          <img src={logo5} alt="logo-5" className="logo-5" />
          <img src={logo6} alt="logo-6" className="logo-6" />
          <img src={logo7} alt="logo-7" className="logo-7" />
          <img src={logo8} alt="logo-8" className="logo-8" />
          <img src={logo9} alt="logo-9" className="logo-9" />
        </div>
      </Container>
    </section>
  );
};

export default Clients;
