import React from "react";
import Tour from "./Tour";
const Tours = ({ tours, deleteItem }) => {
  return (
    <>
      <section className="title">
        <h2>Our Tours</h2>
        <div className="underline"></div>
      </section>
      <section className="tours">
        {tours.map((tour) => {
          return <Tour key={tour.id} {...tour} fn={deleteItem} />;
        })}
      </section>
    </>
  );
};

export default Tours;
