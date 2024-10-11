import "./body.css";

const body = () => {
  return (
    <div className="body-part">
      <div className="description-page">
        <h3 className="title">PAWFUND ADOPTED</h3>
        <p className="description">
          The Houston Humane Society is dedicated to, & working towards, ending
          cruelty, abuse & the overpopulation of animals while providing the
          highest quality of life to those brought to us for care.
        </p>
      </div>

      <div className="help-section">
        <div className="overlay"></div>
        <div className="contentField">
          <h3 className="title-2">How You Can Help</h3>
          <div className="button-container">
            <button className="action-button">DONATE NOW</button>
            <button className="action-button">GIVING</button>
            <button className="action-button">VOLUNTEER</button>
            <button className="action-button">ADOPTED</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default body;
