import { useState } from "react";

const Tour = ({ id, image, price, info, name, removeTour }) => {
  const [readmore, setReadMore] = useState(false);
  return (
    <article className="single-tour" key={id}>
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {readmore ? info : `${info.substring(0, 200)}...`}
          <button
            type="button"
            className="info-btn"
            onClick={() => setReadMore(!readmore)}
          >
            {readmore ? "showless" : "Readmore"}
          </button>
        </p>
        <button
          type="button"
          className="btn btn-block delete-btn"
          onClick={() => removeTour(id)}
        >
          Clear Tour
        </button>
      </div>
    </article>
  );
};

export default Tour;
