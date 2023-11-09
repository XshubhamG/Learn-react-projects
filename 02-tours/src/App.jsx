import { useState, useEffect } from "react";
import Tours from "./Tours";
import data from "./data";

function App() {
  const [tours, setTours] = useState(data);

  function deleteItem(id) {
    const newArr = tours.filter((tour) => tour.id !== id);
    setTours(newArr);
  }

  return (
    <>
      <main>
        <Tours tours={tours} deleteItem={deleteItem} />
      </main>
    </>
  );
}

export default App;
