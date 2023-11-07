import { useEffect, useState } from "react";
import { Review } from "./Review";

function App() {
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    try {
      fetch("http://localhost:8000/reviews")
        .then((res) => res.json())
        .then((data) => {
          setReviews(data);
        });
    } catch (error) {
      console.log(error.message);
    }
  }, []);

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
