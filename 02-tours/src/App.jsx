import { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [tours, setTours] = useState(null);

  function deleteItem(id) {
    const newArr = tours.filter((tour) => tour.id !== id);
    setTours(newArr);
  }

  useEffect(() => {
    setTimeout(() => {
      try {
        fetch("https://localhost:8000/Post")
          .then((res) => res.json())
          .then((data) => {
            setTours(data);
            setIsLoading(false);
          });
      } catch (error) {
        console.log(error.message);
      }
    }, 1000);
  }, []);

  return (
    <>
      <main>
        {isLoading && <Loading />}
        {tours && <Tours tours={tours} deleteItem={deleteItem} />}
      </main>
    </>
  );
}

export default App;
