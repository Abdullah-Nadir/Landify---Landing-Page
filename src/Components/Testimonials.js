import Quotes from "../Images/Quote Mark.png";
import story1 from "../Images/Testimonial 1.png";
import story2 from "../Images/Testimonial 2.png";
import story3 from "../Images/Testimonial 3.png";

const Testimonials = () => {
  return (
    <section id="testimonials">
      <img
        src={Quotes}
        alt="testimonial-quotes"
        className="testimonial-quotes"
      />
      <div className="stories-header">
        <h2 className="stories-heading">Real Stories from Real Customers</h2>
        <p className="stories-para">Get inspired by these stories.</p>
      </div>
      <div className="stories">
        <img src={story1} alt="story1" className="story1" />
        <img src={story2} alt="story2" className="story2" />
        <img src={story3} alt="story3" className="story3" />
      </div>
    </section>
  );
};

export default Testimonials;
