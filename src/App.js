import "bootstrap/dist/css/bootstrap.min.css";

// Components
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import Clients from "./Components/Clients";
import Services from "./Components/Services";
import Testimonials from "./Components/Testimonials";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Clients />
      <Services />
      <Testimonials />
    </div>
  );
}

export default App;
