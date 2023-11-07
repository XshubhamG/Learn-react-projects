import { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

export const Review = ({ data }) => {
  const [index, setIndex] = useState(0);
  const { name, id, job, image, text } = data[index];

  function prevProfile() {
    index == 0 ? setIndex(data.length - 1) : setIndex((prev) => prev - 1);
  }

  function nextProfile() {
    index == data.length - 1 ? setIndex(0) : setIndex((prev) => prev + 1);
  }

  function randomProfile() {
    let random = Math.floor(Math.random() * data.length);
    setIndex(random);
  }

  return (
    <article className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight />
        </span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prevProfile}>
          <FaChevronLeft />
        </button>
        <button className="next-btn" onClick={nextProfile}>
          <FaChevronRight />
        </button>
      </div>
      <button className="random-btn" onClick={randomProfile}>
        Suprise Me
      </button>
    </article>
  );
};
