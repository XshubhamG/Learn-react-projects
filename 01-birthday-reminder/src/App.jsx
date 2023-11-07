import { useState } from "react";
import List from "./List";
import data from "./data";

function App() {
  const [people, setPeople] = useState(data);

  //* clearAll
  function clearAll() {
    setPeople([]);
  }

  //* deleteSelected element
  function deleteItem(id) {
    const newList = people.filter((item) => item.id !== id);
    setPeople(newList);
  }

  return (
    <>
      <main>
        <section className="container">
          <h3>{people.length} birthdays today</h3>
          <List people={people} deleteItem={deleteItem} />
          <button className="clear-all" onClick={() => clearAll()}>
            Clear all
          </button>
        </section>
      </main>
    </>
  );
}

export default App;
