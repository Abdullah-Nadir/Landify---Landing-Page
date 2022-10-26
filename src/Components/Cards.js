import btn from "../Images/explore.png";

const Cards = props => {
  return (
    <div className="services-cards">
      {props.cards.map(card => {
        return (
          <div key={card.heading} className="card">
            <div className="card-head">
              <img src={card.img} alt="img1" className="card-img" />
            </div>
            <div className="card-bodi">
              <h5 className="card-heading">{card.heading}</h5>
              <p className="card-para">
                Lorem ipsum dolor amet, consectetur adipiscing elit. Mattis et
                sed nam sem tellus erat.
              </p>
            </div>
            <div className="card-foter">
              <img src={btn} alt="card-btn" className="card-btn" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
