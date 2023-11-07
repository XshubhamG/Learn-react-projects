import React, { useState } from "react";

const Tour = ({ id, image, info, price, name, fn }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
          <h4 className="tour-price">${price}</h4>
        </div>
        <p>
          {readMore ? info : `${info.substring(0, 150)}...`}
          <button onClick={() => setReadMore((prev) => !prev)}>
            {readMore ? "show less" : "show more"}
          </button>
        </p>
        <button onClick={() => fn(id)} className="delete-btn">
          Not Interested
        </button>
      </footer>
    </article>
  );
};

export default Tour;
