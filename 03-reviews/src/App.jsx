import { useEffect, useState } from "react";
import { Review } from "./Review";
import data from "./data";

function App() {
  const [reviews, setReviews] = useState(data);

  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Our Reviews</h2>
          <div className="underline"></div>
          {reviews && <Review data={reviews} />}
        </div>
      </section>
    </main>
  );
}

export default App;
